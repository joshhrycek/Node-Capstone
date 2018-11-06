const express = require("express");
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mongoose = require('mongoose');

const router = express.Router();

mongoose.Promise = global.Promise;

const {Characters} = require("../models");

const validator = function (req, res, next) {
    const requiredFields = ["name", "class", "race", "player"];
    for (let i = 0; i < requiredFields.length; i++) {
        if (!(requiredFields[i] in req.body)) {
            console.log(`Missing ${requiredFields[i]} field!`)
            return res.status(400)
        }
    };
    next();
};


router.get("/", (req,res) => {
    Characters
    .find()
    .then(results => {
        return res.json(results);
    }).catch(err => {
        console.log(err)
    })
});

router.post("/", jsonParser, validator, (req,res) => {
    Characters
    .create({
        name: req.body.name,
        playerClass: req.body.class,
        race: req.body.race,
        player: req.body.player
    })
    .then(function (character) {
        res.status(201).json(character);
    })  
    .catch(function (err, character) {
            res.status(400);
            console.log('An Error Occurred', err);
    });

});

router.put("/:id", jsonParser, validator, (req,res) => {
    Characters
    .findById(req.params.id)
    .update({
        name: req.body.name,
        playerClass: req.body.class,
        race: req.body.race,
        player: req.body.player
    })
    .then(character => {
        res.status(204).json(character).end();
    })
    .catch(err => {
        console.log("Character Updated", err);
        res.status(401).end();
    })
});

router.delete("/:id", (req,res) => {
    Characters
    .findById(req.params.id)
    .then(character => {
        character.remove();
        console.log('Deleted Character!');
        res.status(204).end();
    })
    .catch(err => {
        console.log('Cannot Delete Character', err);
        res.status(401).end();
    });
});

module.exports = router