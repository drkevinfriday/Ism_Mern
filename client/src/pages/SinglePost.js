import React from 'react';
import { useParams } from 'react-router-dom';
import ReactionList from '../components/ReactionList';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHT } from '../utils/queries';

const SinglePost = (props) => {
  const { id: postId } = useParams();

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId },
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {post.username}
          </span>{' '}
          Story Published On {thought.createdAt}
        </p>
        <div className="card-body">
          <p>{post.body}</p>
        </div>
      </div>
      {post.reactionCount > 0 && (
        <ReactionList reactions={post.reactions} />
      )}
    </div>
  );
};

export default SinglePost;