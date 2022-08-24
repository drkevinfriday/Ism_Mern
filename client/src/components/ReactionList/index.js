import React from 'react';
import { Link } from 'react-router-dom';

const ReactionList = ({ reactions }) => {
  return (
    <div className="card mb-5">
    <div className="card-header">
        <span className="text-light">Reactions</span>
    </div>
    <div className="card-body">
        {reactions &&
        reactions.map(reaction => (
            <p className="rounded-1 mb-3" key={reaction._id}>
            {reaction.reactionBody} {'// '}
            <Link to={`/profile/${reaction.username}`}>
                {reaction.username} on {reaction.createdAt}
            </Link>
            </p>
        ))}
    </div>
    </div>
  );

};

export default ReactionList;