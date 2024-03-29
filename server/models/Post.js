const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');
const postSchema = new Schema(
  {
    postText: {
      type: String,
      required: 'You need to leave a post!',
      minlength: 1,
      maxlength: 280
    },
    title: {
      type: String,
      minlength: 1,
      maxlength: 280
    },
    category: {
      type: String,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema],
    // category: [
    //   {
    //     type: Number,
    //     ref:'Category'
    //   }
    // ]
  },
  {
    toJSON: {
      getters: true
    }
  }
);
postSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});
const Post = model('Post', postSchema);
module.exports = Post;
