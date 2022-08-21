const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const categorySchema = new Schema(
  {
    _id:{
        type: Number
    },
    categoryName: {
      type: String
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);



const Category = model('Category', categorySchema);

module.exports = Category;
