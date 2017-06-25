const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/user');
const config = require('./database');

module.exports = function(passport) {
  let opts = {};
  // options is an object literal containing options to control how the token is
  // extracted from the request or verified.
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  // 1. jwtFromRequest (REQUIRED) Function that accepts a request as the only
  //    parameter and returns either the JWT as a string or null.
  // 2. fromAuthHeader() creates a new extractor that looks for the JWT in the
  //    authorization header with the scheme 'JWT'
  opts.secretOrKey = config.secret;
  // secretOrKey is a REQUIRED string or buffer containing the secret
  // (symmetric) or PEM-encoded public key (asymmetric) for verifying the
  // token's signature.
  passport.use(new JwtStrategy(opts, (jwtPayload, done) => {
    // 1. jwt_payload is an object literal containing the decoded JWT payload.
    // 2. done is a passport error first callback accepting arguments
    //    done(error, user, info)
    User.getUserById(jwtPayload._doc._id, (err, user) => {
      if(err) { return done(err, false); }
      if(user) { return done(null, user); }
      return done(null, false);
    });
  }));
}
