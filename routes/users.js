// This file handles requests related to the users, like: register, authenticate
// and profile. Whenever there is request of such, node uses this file to
// manipulate data and returns responses.
// However, it does not handle the view of front-end presentation. That's the
// job of Angular 2.

const express = require('express');
const router = express.Router();
const passport = require('passport');
// passport is the authentication middleware.
const jwt = require('jsonwebtoken');
// jwt is used to generate token so a logged-in user can be remembered.
const config = require('../config/database');
// config stores the database credentials.
const User = require('../models/user');
// User handles what attributes and functions a user has (saved in Mongodb).


router.post('/register', (req, res, next) => {
  console.log(req.body);
  
  // 1. gather user data
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });
  // 2. add to database and return operation result
  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({ success: false, msg: 'Failed to register user'});
    } else {
      res.json({ success: true, msg: 'User registered'});
    }
  });
});

router.post('/authenticate', (req, res, next) => {
  // 1. gather input data
  const username = req.body.username;
  const password = req.body.password;

  // 2. Find if such user exists
  User.getUserByUserName(username, (err, user) => {
    if(err) {
      throw err;
    }
    // no such user
    if(!user) {
      return res.json({ success: false, msg: 'User not found'});
    }
    // has such user, compare password
    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800 // 1 week
        });
        // return a token and constructed user object
        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({ success: false, msg: 'Wrong password'});
      }
    });
  });
});

// passport.authenticate
// By default, if authentication fails, Passport will respond with a 401
// Unauthorized status, and any additional route handlers will not be invoked.
// If authentication succeeds, the next handler will be invoked and the req.user
// property will be set to the authenticated user.
router.get('/profile', passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
  res.json({ user: req.user });
});

module.exports = router;
