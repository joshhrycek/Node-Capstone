"use strict";

const express = require("express");
const morgan = require("morgan");
const mongoose = require('mongoose');
const passport = require('passport');

mongoose.Promise = global.Promise;

const app = express();
const charactersRouter = require('./routes/charactersRouter');
const userRouter = require('./routes/userRouter');
const authRouter = require('./routes/authRouter');
const {localStrategy, jwtStrategy} = require('./strategies');
const {PORT, DATABASE_URL} = require('./config');

app.use(express.static("public"));
app.use(morgan("common"));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  if (req.method === 'OPTIONS') {
    return res.send(204);
  }
  next();
});

passport.use(localStrategy);
passport.use(jwtStrategy);

app.use('/characters', charactersRouter);
app.use('/users', userRouter);
app.use('/login', authRouter)

let server ;

function runServer(DATABASE_URL, port = PORT) {
  return new Promise((resolve, reject) => {
     
    mongoose.connect(DATABASE_URL, { useNewUrlParser: true }, err => {
       if (err) {
         return reject(err);
       };
     });
    
     console.log("Found Database")
    
     server = app
      .listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
      .on("error", err => {
        mongoose.disconnect();
        reject(err);
      });
  });
};

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log("Closing server");
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}


if (require.main === module) {
  runServer(DATABASE_URL).catch(err => console.error(err));
}

module.exports = { app, runServer, closeServer};