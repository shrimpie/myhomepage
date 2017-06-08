const path = require('path');
const passport = require('passport');
// jwt is used to generate token so a logged-in user can be remembered.
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');


class UserRoute {

  constructor (app) {
    this.app = app;
  }

  userRoutes() {

    this.app.post('/users/register', (req, res) => {
      // console.log('req.body:', req.body);
      let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        online: 'N',
        socketId: ''
      });
      User.addUser(newUser, (err, user) => {
        if(err) {
          console.log('[users.js] post /users/register error:', err);
          res.json({ success: false, msg: 'Failed to register user'});
        } else {
          res.json({ success: true, msg: 'User registered'});
        }
      });
    });

    this.app.post('/users/authenticate', (req, res) => {

      const username = req.body.username;
      const password = req.body.password;

      User.getUserByUserName(username, (err, user) => {
        if(err) {
          throw err;
        }
        if(!user) {
          return res.json({ success: false, msg: 'User not found'});
        }
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
    this.app.get('/users/profile', passport.authenticate('jwt', { session: false }),
      (req, res) => {
      res.json({ user: req.user });
    });

    // this.app.get('*', function(req, res) {
    //     res.sendFile(path.join(__dirname, 'public/index.html'));
    // });

  }

  routesConfig() {
		this.userRoutes();
	}

}


module.exports = UserRoute;
