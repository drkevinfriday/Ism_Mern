import React from "react";
import { Link } from "react-router-dom";

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return (
      <h3>
        No Stories Yet! We Are Here To Support Your Stories. Write When You're
        Ready 😊{" "}
      </h3>
    );
  }
  const handleDelete = (event) => {
    const removeID = event.target.parentElement.getAtrribute("data-id")
    deletePost( removeID)
  }

  const [deletePost] = useMutation(REMOVE_POST, {
    variables: { id }, refetchQueries: ['PostData']
  })

  return (
    <div>
      <h3>{title}</h3>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-3">
            <img src="{post.image.url}" alt="{post.title}" className="card-img-top"> </img>
            <div className="card-body">
            <h5 className="card-title">{post.title}</h5>  
            <p className="card-subtitle" id={post._id}>
              <Link
                to={`/profile/${post.username}`}
              >
                {post.username}
              </Link>{" "}
              Story Published On {post.createdAt}
              </p>
              <button className="card-link" onClick={handleDelete}>Delete Post</button>
              <div className="card-link">
              <Link to={`/post/${post._id}`}>
                <p className="mb-0">
                  Reactions: {post.reactionCount} || Click To{" "}
                  {post.reactionCount ? "see" : "start"} The Discussion!
                </p>
              </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
