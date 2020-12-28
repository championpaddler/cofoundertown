const mongoose = require('mongoose');

const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    blog: {
      type: String,
      required: 'blog cannot be blank'
    },
    description: {
      type: String,
      required: 'Type Cannot be blank'
    }
  },
  { collection: 'blog' }
);

module.exports = mongoose.model('blog', blogSchema);