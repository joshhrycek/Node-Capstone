"use strict";

const chai = require("chai");
const chaiHttp = require("chai-http");
const mongoose = require('mongoose');
const faker = require('faker');

const rawApp = require('../server.js');
const { app, runServer, closeServer } = require('../server.js');
const { TEST_DATABASE_URL } = require('../config');

const expect = chai.expect;
const config = require('../config');
chai.use(chaiHttp);
const {Characters} = require('../models');

const { testCharacter } = require('./testdata.js');


function seedCharacterData() {
  console.info('seeding Character data');
  const seedData = [];
  for (let i=1; i<=10; i++) {
    seedData.push(generateCharacterData());
  }
  return Characters.insertMany(seedData); 
}

// used to generate data to put in db
function generateName() {
  const names = [
    'Jumbles', 'Lash', 'Waren', 'Star', 'Ziggy'];
  return names[Math.floor(Math.random() * names.length)];
}

// used to generate data to put in db
function generateClass() {
  const playerClass = ['Ranger', 'Monk', 'Warrior'];
  return playerClass[Math.floor(Math.random() * playerClass.length)];
}

// used to generate data to put in db
function generatePlayer() {
  const players = ['Josh', 'Zack', 'Mitch'];
  return players[Math.floor(Math.random() * players.length)];
}

function generateRace() {
  const races = ['Dwarf','Gnome','Human','Dragonborn'];
  return races[Math.floor(Math.random() * races.length)]
}

// generate an object represnting a Character.
// can be used to generate seed data for db
// or request.body data
function generateCharacterData() {
  return {
    name: generateName(),
    playerClass: generateClass(),
    race: generateRace(),
    player: generatePlayer()
  }
}


function tearDownDb() {
  console.warn('Deleting database');
  return mongoose.connection.dropDatabase();
}

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
  return runServer(config.TEST_DATABASE_URL);
});

beforeEach(function() {
  return seedCharacterData();
});

afterEach(function () {
  return tearDownDb();
});

after(function() {
  return closeServer();
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
    .send({name: "Wrong",
          playerClass: "Rogue"})
    .then(function (res) {
      expect(res).status(400);
    });
  });

  
   it("should make a successful post request", function() {
     return chai
     .request(app)
     .post('/characters')
     .send(generateCharacterData())
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
    const updateData = {
      name: "Put Name"
    }
    return Characters
    .findOne()
    .then(function (character) {
      updateData.id = character.id;
      return chai
      .request(app)
      .put(`/characters/${character.id}`)
      .send(updateData)
    })
    .then(function (res) {
      expect(res).status(204)
      return Characters.findById(updateData.id)
    })
    .then(function (character) {
      expect(updateData.name).to.be.equal(character.name);
    });
  });

  // it("Should respond with an error if it cannot update existing Character", function() {
  //   const updateData = {
  //     asdflaasdf: false
  //   }
  //   return Characters
  //   .findOne()
  //   .then(function (character) {
  //     updateData.id = character.id;
  //     return chai
  //     .request(app)
  //     .put(`/characters/${character.id}`)
  //     .send(updateData)
  //   })
  //   .then(function (res) {
  //     expect(res).status(400);
  //   });
  // });
});

describe("Delete endpoint", function (){
  
  it("Should delete an existing Character", function() {
    return Characters
    .findOne()
    .then(function(character) {
      return chai
      .request(app)
      .delete(`/characters/${character.id}`)
      .then(function (res) {
        expect(res).status(204);
        return Characters.findById(character.id)
      })
      .then(function (character) {
        expect(character).to.be.null;
      });
    });
  });

  // it("Should respond with an error if character cannot be deleted", function() {
  //   return chai
  //   .request(app)
  //   .delete(`/characters/${id}`)
  //   .send("")
  //   .then(function (res) {
  //     expect(res).status(401);
  //   })
  //   .catch(err => {
  //     console.log("DELETE error", err);
  //   });
  // });
});
