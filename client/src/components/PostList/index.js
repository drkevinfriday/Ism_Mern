import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No Stories Yet! We Are Here To Support Your Stories. Write When You're Ready 😊 </h3>;
  }
  const handleDelete = (event) => {
    const removeID = event.target.getElementById("data-id")
    deletePost( removeID )
  }

  const [deletePost] = useMutation(REMOVE_POST, {
    variables: { id }, refetchQueries: ['PostData']
  })

  return (
    <div>
      <h3>{title}</h3>
      {posts &&
        posts.map(post => (
          <div key={post._id} className="card mb-3">
            <p className="card-header" id={post._id}>
              <Link
                to={`/profile/${post.username}`}
                className="text-light"
              >
                {post.username}
              </Link>{' '}
              Story Published On {post.createdAt}
              <button onClick={handleDelete}>Delete Post</button>
            </p>
            
            <div className="card-body">
              <Link to={`/post/${post._id}`}>
                <p>{post.body}</p>
                <p className="mb-0">
                  Reactions: {post.reactionCount} || Click To{' '}
                  {post.reactionCount ? 'see' : 'start'} The Discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;