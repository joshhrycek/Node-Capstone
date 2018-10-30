"use strict";

const chai = require("chai");
const chaiHttp = require("chai-http");
const mongoose = require('mongoose');

const rawApp = require('../server.js');
let { app, runServer, closeServer } = require('../server.js');

const expect = chai.expect;
const config = require('../config')
chai.use(chaiHttp);

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


describe("character endpoint", function() {
  
  before(function() {
    return runServer(config.DATABASE_URL);
  });

  after(function() {
    return closeServer();
  });

  it("should exist", function() {
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