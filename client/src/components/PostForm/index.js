import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";

const PostForm = () => {
  const [postText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        // UPDATE USER'S (ME) PROFILE ARRAY
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, posts: [...me.posts, addPost] } },
        });
      } catch (event) {
        console.warn("First Post Added By User!");
      }

      // CURRENT CACHE
      const { posts } = cache.readQuery({ query: QUERY_POSTS });

      // PUSH NEW POST IN ARRAY
      cache.writeQuery({
        query: QUERY_POSTS,
        data: { POSTS: [addPost, ...posts] },
      });
    },
  });

  const handleChange = (event) => {
    if (event.target.value.length <= 2000) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      // ADD POST TO DB
      await addPost({
        variables: { postText }
      });

      // CLEAR FORM VALUE
      setText('');
      setCharacterCount(0);
    } catch (event) {
      console.error(event);
    }
  };

  return (
    <div>
    <div className="mb-3">
      <div className="mb-3">
          <label htmlFor="formFile" className="form-label"> Add Post Image</label>
          <input className="form-control" type="file" id="formFile"></input>
      </div>
      <div>
          <label htmlFor="Title" className="form-label">Title</label>
          <input type="text" className="form-control" id="PostFormTitle" placeholder="What Shall We Call This?"></input>
      </div>
      <div className="mb-3">
          <label htmlFor="story" className={`${characterCount === 2000 ? 'text-error' : ''}`} class="form-label">What's Your Story? Character Count: {characterCount}/2000 {error && <span className="ml-2">Something went wrong...</span>} </label>
          <textarea className="form-control" id="Story"  value={postText} rows="3" onChange={handleChange}></textarea>
      </div>
      <div className="mb-3">
        
      <button className="btn col-12 col-md-3" type="click" onClick={handleFormSubmit}>
        Submit
      </button>

      </div>
     
      
      </div>
  </div>
  );
};

export default PostForm;
