const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  author: String,
  title: String,
  featuredImgUrl: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('blog', BlogSchema, 'blogs');
