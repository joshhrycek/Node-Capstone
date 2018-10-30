"use strict";

const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require('../server.js');

const expect = chai.expect;

chai.use(chaiHttp);

describe("index page", function() {
  it("should exist", function() {
    return chai
      .request(app.listen())
      .get("/characters")
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });
});
