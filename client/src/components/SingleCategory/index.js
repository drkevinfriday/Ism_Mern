import React from 'react';
import collage2 from '../../assets/images/collage2.jpg';
import { Link } from 'react-router-dom';

const SingleCategory = ({ posts, title, category }) => {
    //const category = posts.category;
    console.log(posts);
  if (!posts.length) {
    return <h3>No Posts in this Category Yet</h3>;
  }

  return (
    <div className='category-container'>
      
      {posts &&
        posts.map(post => (
          <div key={post._id} className="card mb-3"
          style={{
            backgroundColor: 'transparent',
          }}
          >
            
            <h3 className="card-header" style={{backgroundColor: 'white',borderRadius: '25px'}}>Post Title:{post.title}</h3>
            <img src={collage2} style={{ padding: '50px', borderRadius: '25px'}}></img>
            <p className="" style={{ }}>
              {post.username}</p>
            <p>Story Published: {post.createdAt}</p>
            <div className="card-body">
              <p>{post.postText}</p>
              <Link to={`/post/${post._id}`}>
                <p className="mb-0">
                  Reactions: {post.reactionCount} || Click To{" "}
                  {post.reactionCount ? "see" : "start"} The Discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SingleCategory;