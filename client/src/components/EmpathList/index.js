import React from 'react';
import { Link } from 'react-router-dom';

const EmpathList = ({ empathCount, username, empaths }) => {
  if (!empath || !empaths.length) {
    return <p className="bg-dark text-light p-3">Let's Connect With Others, {username} 🌎 ! </p>;
  }
  return (
    <div>
      <h5>
        {username}'s {empathCount} {empathCount === 1 ? 'Empath' : 'Empaths'}
      </h5>
      {empaths.map(empath => (
        <button className="btn w-100 display-block mb-2" key={empath._id}>
          <Link to={`/profile/${empath.username}`}>{empath.username}</Link>
        </button>
      ))}
    </div>
  );
};

export default EmpathList;