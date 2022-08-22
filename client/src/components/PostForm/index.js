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

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // ADD POST TO DB
      await addPost({
        variables: { postText },
      });

      // CLEAR FORM VALUE
      setText("");
      setCharacterCount(0);
    } catch (event) {
      console.error(event);
    }
  };

  return (
    <form>
        <div className="mb-3">
          <label htmlFor="file"className="form-label">
            {" "}
            Add Post Image
          </label>
          <input className="form-control disabled" type="file" id="formFile"></input>
        </div>
        <div className="form-group">
          <label htmlFor="Title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="PostFormTitle"
            placeholder="What Shall We Call This?"
          ></input>
        </div>
        <div className="mb-3 form-group">
          <label
            className={`mt-3 form-label ${characterCount === 2000 ? "text-error" : ""}`}
          >
            What's Your Story? 
            | Character Count: {characterCount}/2000{" "}
              {error && <span className="ml-2">Something went wrong...</span>}
          </label>
          <textarea className="form-control-plaintext" id="Story"  type="text" cols="20" rows="10" placeholder="So it started ..." onChange={handleChange}>
          </textarea>
          </div>
        <div className="mt-4">
          <select className="form-select" aria-label="Pick A Category">
            <option value="">Sexism</option>
            <option value="">Racism</option>
            <option value="">Ableism</option>
            <option value="">Anti-Semitism</option>
            <option value="">Colorism</option>
            <option value="">Cissexism</option>
            <option value="">Elitism</option>
            <option value="">Tokenism</option>
          </select>
        </div>
        <button
          className="mt-3 btn col-12 col-md-3 btn-primary"
          type="submit"
          onSubmit={handleFormSubmit}
        >
          Submit
        </button>
    </form>
  );
};

export default PostForm;
