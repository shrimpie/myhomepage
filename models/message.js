const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  authorId : String,
  toAuthorId : String,
  content : String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('message', MessageSchema, 'messages');
