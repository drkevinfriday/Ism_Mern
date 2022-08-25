import React, { useState, useReducer } from "react";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS, QUERY_ME, QUERY_CATEGORY } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { Navigate } from "react-router-dom";

const PostForm = (props) => {
  const [postText, setText] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        // UPDATE USER’S (ME) PROFILE ARRAY
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

  const handleTitle = (event) => {
    if (event.target.value.length <= 100) {
      setTitle(event.target.value);
      setCharacterCount(event.target.value.length);
      console.log(event.target.value);
    }
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
    console.log(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("HELLO");
    try {
      // ADD POST TO DB
      await addPost({
        variables: { postText, title, category },
      });

      // CLEAR FORM VALUE
      setText("");
      setTitle("");
      setCharacterCount(0);
    } catch (event) {
      console.error(event);
    }
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          backgroundColor: "mintcream",
          borderRadius: "25px",
          padding: "10px",
        }}
      >
        <div className="mb-3">
          <div className="mb-3">
            <h3>Post Form:</h3>
            <label htmlFor="formFile" className="form-label">
              {" "}
              Add Post Image
            </label>
            <input className="form-control" type="file" id="formFile"></input>
          </div>
          <div>
            <label htmlFor="Title" className="form-label">
              Title
            </label>
            <textarea
              className="form-control"
              id="PostFormTitle"
              value={title}
              onChange={handleTitle}
              placeholder="What Shall We Call This?"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="story" className="story">
              What’s Your Story?
            </label>
            <textarea
              className="form-control"
              id="Story"
              value={postText}
              rows="3"
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <select onChange={handleCategory} value={category}>
              <option>Choose category</option>
              <option>Racism</option>
              <option>Anti-Semitism</option>
              <option>Sexism</option>
              <option>Ableism</option>
              <option>Tokenism</option>
              <option>Colorism</option>
              <option>Cissexism</option>
              <option>Elitism</option>
            </select>
          </div>
          <div className="mb-3">
            <button
              className="btn col-12 col-md-3 post-btn"
              type="click"
              onClick={handleFormSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostForm;
