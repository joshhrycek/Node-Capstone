"use strict";

const chai = require("chai");
const chaiHttp = require("chai-http");
const rawApp = require('../server.js');
let app = rawApp.app;

const expect = chai.expect;

chai.use(chaiHttp);
console.log(app)

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
