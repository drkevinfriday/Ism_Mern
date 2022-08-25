import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { REMOVE_POST } from "../../utils/mutations";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return (
      <h3>
        No Stories Yet! We Are Here To Support Your Stories. Write When You're
        Ready 😊{" "}
      </h3>
    );
  }
  // removed delete functionality temporarily and image rendering
  /*
  const handleDelete = (event) => {
    const removeID = event.target.parentElement.getAtrribute("data-id")
    deletePost( removeID)
  }

  const [deletePost] = useMutation(REMOVE_POST, {
    variables: { id }, refetchQueries: ['PostData']

    <button className="card-link" onClick={handleDelete}>Delete Post</button>
    <img src="{post.image.url}" alt="{post.title}" className="card-img-top"> </img>
  })
*/

  return (
    <Row xs={1} md={2} lg={4} className="">
      <h3>{title}</h3>
      {posts &&
        posts.map((post) => (
          <Col>
            <Card key={post._id} className="my-3">
              <Card.Body className="">
                <Card.Title className="post-title">{post.title}</Card.Title>
                <p className="" id={post._id}>
                  <Link to={`/profile/`}>{post.username}</Link>
                  {post.createdAt}
                </p>

                <div className="card-link">
                  <Link to={`/post/${post._id}`}>
                    <p className="mb-0">
                      Reactions: {post.reactionCount} || Click To{" "}
                      {post.reactionCount ? "See" : "Start"} The Discussion!
                    </p>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default PostList;
