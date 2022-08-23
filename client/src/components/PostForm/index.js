import React, { useState, useReducer } from "react";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";
<<<<<<< HEAD
//import { Link } from "react-router-dom";
//import Category from "../Category";
=======
import { Link } from "react-router-dom";
>>>>>>> 8ad58f2aaa419dd41c47789d69c2eb644c8b63b6

const PostForm = () => {
  const [postText, setText] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  // TESTING CATEGORY
  //const [state, dispatch] = useReducer(reducer, initialState);
/*
  const initialState = {
    category: {
      label: 'category',
      value: '',
    }
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "setCategory":
      return { ...state, category: action.payload };
      default:
        return state;
    }
  }
*/

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

  const handleTitle = (event) => {
    if (event.target.value.length <= 100) {
      setTitle(event.target.value);
      setCharacterCount(event.target.value.length);
      console.log(event.target.value);
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      // ADD POST TO DB
      await addPost({
        variables: { postText, title },
         
      });

      // CLEAR FORM VALUE
      setText('');
      setTitle('');
      setCharacterCount(0);
      // return <Link to="/profile:username"></Link>
    } catch (event) {
      console.error(event);
    }
  };

  return (
    <div
    style={{
      position: "relative",
      backgroundColor: "mintcream",
      borderRadius: "25px",
      padding: "10px",
      
      
    }}>
    <div className="mb-3">
      <div className="mb-3">
        <h3>Post Form:</h3>
          <label htmlFor="formFile" className="form-label"> Add Post Image</label>
          <input className="form-control" type="file" id="formFile" ></input>
      </div>
      <div>
          <label htmlFor="Title" className="form-label">Title</label>
          <textarea  className="form-control" id="PostFormTitle" value={title} onChange={handleTitle} placeholder="What Shall We Call This?"></textarea>
      </div>
      <div className="mb-3">
          <label htmlFor="story" className="story">What's Your Story?</label>
          <textarea className="form-control" id="Story"  value={postText} rows="3" onChange={handleChange}></textarea>
      </div>

      {/*Testing category
      <>
      <select>
        <option>Choose category</option>
        {category.map((category) => (
          <option key={category} value={category}>
            {category}
            </option>
        ))}
      </select>
      </> 
      */} 

      <div className="mb-3">
<<<<<<< HEAD
      <button className="btn col-12 col-md-3 post-btn" type="click" onClick={handleFormSubmit}>
=======
        
      <button className="btn col-12 col-md-3 post-btn" type="submit" onSubmit={handleFormSubmit}>
>>>>>>> 8ad58f2aaa419dd41c47789d69c2eb644c8b63b6
        Submit
      </button>
      </div>
      </div>
  </div>
  );
};

export default PostForm;
