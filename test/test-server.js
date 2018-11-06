"use strict";

const chai = require("chai");
const chaiHttp = require("chai-http");
const mongoose = require('mongoose');
const faker = require('faker');

const rawApp = require('../server.js');
let { app, runServer, closeServer } = require('../server.js');

const expect = chai.expect;
const config = require('../config');
chai.use(chaiHttp);

const { testCharacter } = require('./testdata.js');

describe("index page", function() {
  it("should exist", function() {
    return chai
      .request(app)
      .get("/")
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });
});



before(function() {
  return runServer(config.DATABASE_URL);
});

describe("character endpoint", function() {
  
  it("should get characters in DB", function() {
    return chai
      .request(app)
      .get('/characters')
      .then(function(res) {
        expect(res).to.be.json;
      })
      .catch(function(err) {
        console.log(err)
      });
    })
  });

describe("Post request", function () {
 
  it("should respond with an error, if the post request cannot be made", function () {
    return chai
    .request(app)
    .post('/characters')
    .send({name: "Wrong"})
    .then(function (res) {
      expect(res).status(400);
      done();
    })
    .catch(function (err) {
      console.log("Cannot Get Error", err)
    });
  });

  
  it("should make a successful post request", function() {
    return chai
    .request(app)
    .post('/characters')
    .send(testCharacter)
    .then(function (res) {
      expect(res).status(201);
    })
    .catch(function (err) {
      console.log(err)
    });
  }); 
});

describe("PUT endpoint", function (){
  
  it("Should update an existing Character", function() {
    return chai
    .request(app)
    .put(`/characters/${id}`)
    .send(updateData)
    .then(function (res) {
      expect(res).status(204)
      done();
    });
  });

  it("Should respond with an error if it cannot update existing Character", function() {
    return chai
    .request(app)
    .put(`/characters/${id}`)
    .send("")
    .then(function (res) {
      expect(res).status(401)
    })
    .catch(err => {
      console.log("PUT error", err);
    })
  });

});

describe("Delete endpoint", function (){
  
  it("Should delete an existing Character", function() {
    return chai
    .request(app)
    .delete(`/characters/${id}`)
    .send(updateData)
    .then(function (res) {
      expect(res).status(204)
      done();
    });
  });

  it("Should respond with an error if character cannot be deleted", function() {
    return chai
    .request(app)
    .delete(`/characters/${id}`)
    .send("")
    .then(function (res) {
      expect(res).status(401);
    })
    .catch(err => {
      console.log("DELETE error", err);
    });
  });
});


after(function() {
  return closeServer();
});