import React, { useState } from 'react';
const [addReaction, { error }] = useMutation(ADD_REACTION);

const ReactionForm = ({ postId }) => {
  return (
    <div>
      <p
        className={`m-0 ${characterCount === 2000 || error ? 'text-error' : ''}`}
      >
        Character Count: {characterCount}/2000
        {error && <span className="ml-2">Something Went Wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Leave a reaction to this thought..."
          value={reactionBody}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>

        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>

      {error && <div>Something went wrong...</div>}
    </div>
  );
};


export default ReactionForm;