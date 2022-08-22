import React from 'react';

const SingleCategory = ({ posts, title, category }) => {
    //const category = posts.category;
  if (!posts.length) {
    return <h3>No Posts in this Category Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {posts &&
        posts.map(post => (
          <div key={post._id} className="card mb-3">
            <h3>{post.category}</h3>
            <p className="card-header">
              {post.username}
              thought on {post.createdAt}
            </p>
            <div className="card-body">
              <p>{post.postText}</p>
              <p className="mb-0">
                Reactions: {post.reactionCount} || Click to{' '}
                {post.reactionCount ? 'see' : 'start'} the discussion!
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SingleCategory;