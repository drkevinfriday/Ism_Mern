import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
//const [addReaction, { error }] = useMutation(ADD_REACTION);
import { ADD_REACTION } from '../../utils/mutations';

const ReactionForm = ({ postId }) => {
  const [reactionBody, setBody] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addReaction, { error }] = useMutation(ADD_REACTION);

  // UPDATE STATE DUE TO FORM INPUT CHANGES 
  const handleChange = (event) => {
    if (event.target.value.length <= 2000) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // SUBMIT FORM
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addReaction({
        variables: { reactionBody, postId },
      });

      // CLEARS VALUES
      setBody('');
      setCharacterCount(0);
    } catch (event) {
      console.error(event);
    }
  };
  return (
    <div>
      <form>
        <div className="mb-3">
        <label
        for="characterCount"className={`m-0 form-label${characterCount === 2000 || error ? 'text-error' : ''}`}>
        Character Count: {characterCount}/2000
        {error && <span className="ml-2">Something Went Wrong...</span>}
      </label>  
        <textarea
          type="textarea" placeholder="Leave A Reaction 🧐" value={reactionBody} className="form-control"onChange={handleChange}>
        </textarea>
        </div>
        <button className="btn" type="submit" onSubmit={handleFormSubmit}>
          Submit
        </button>
      </form>
      {error && <div>Something Went Wrong...</div>}
    </div>
  );
};


export default ReactionForm;