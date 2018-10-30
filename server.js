"use strict";

const express = require("express");
const morgan = require("morgan");
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const app = express();
const charactersRouter = require('./routes/charactersRouter');
const {PORT, DATABASE_URL} = require('./config');

app.use(express.static("public"));
app.use(morgan("common"));

app.use('/characters', charactersRouter);

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