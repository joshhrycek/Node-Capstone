'use strict';

const {Strategy: LocalStrategy} = require('passport-local');

const {Strategy: JwtStrategy, ExtractJwt} = require('passport-jwt');

const {User} = require('./models');
const {JWT_SECRET} = require('./config');

const localStrategy = new LocalStrategy((username, password, callback) => {
    let user;
    User.findOne({username: username})
        .then(_user => {
            user = _user;
            if (!user) {
                return Promise.reject({
                    reason: "Login Error",
                    message: "Incorrect Username and/or Password"
                });
            }
            return user.validatePassword(password);
        })
        .then(isValid => {
            if(!isValid) {
                return Promise.reject({
                    reason: "Login Error",
                    message: "Incorrect Username and/or Password"
                });
            }
            return callback(null, user);
        })
        .catch(err => {
            if (err.reason ==="Login Error") {
                return callback(null, false, err);
            }
            return callback(err, false);
        })
});
console.log("Arrived", JWT_SECRET)

const jwtStrategy = new JwtStrategy(
    {
      secretOrKey: JWT_SECRET,
      // Look for the JWT as a Bearer auth header
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
      // Only allow HS256 tokens, which are the ones we issue
      algorithms: ['HS256']
    },
    (payload, done) => {
      done(null, payload.user);
    }
  );
  
  module.exports = { localStrategy, jwtStrategy };