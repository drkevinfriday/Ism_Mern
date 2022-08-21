const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const categorySchema = new Schema(
  {
    categoryName: {
      type: [String],
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);



const category = model('Category', categorySchema);

module.exports = category;
