import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const { id: postId } = useParams();

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No Stories Yet! We Are Here To Support You With Your Story. Share When You're Ready 🫶🏾 </h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {posts &&
        posts.map(post => (
          <div key={post._id} className="card mb-3">
            <img></img>  
            <p className="card-header">
            <Link
                to={`/profile/${post.username}`} >
            </Link>{' '}
            {post.username}
              Story Published On {post.createdAt}
            </p>
            <div className="card-body">
              <p>{post.body}</p>
              <p className="mb-0">
                Reactions: {post.reactionCount} || Click To Join {' '}
                {post.reactionCount ? 'see' : 'start'} The Discussion!
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;