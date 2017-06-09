const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// user schema
const UserSchema = mongoose.Schema({
  name : String,
  email : { type: String, required: true },
  username : { type: String, required: true },
  password : { type: String, required: true },
  online : String,
  socketId : String
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
}

module.exports.getUserByUserName = function(username, callback) {
  const query = { username: username };
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}

module.exports.addSocketId = function(data) {
  User.findById(data.id, function(err, user) {
    // console.log('user:', user);
    user.socketId = data.socketId;
    user.online = data.online;
    user.save(function(err, updatedUser) {
      // console.log('updatedUser:', updatedUser);
    });
  });
}
