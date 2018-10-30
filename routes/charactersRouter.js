const express = require("express");
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mongoose = require('mongoose');

const router = express.Router();

mongoose.Promise = global.Promise;

const {Characters} = require("../models");

router.get("/", (req,res) => {
    console.log("regardless")
    Characters
    .find()
    .then(results => {
        console.log("if .then runs")
        res.json(results);
    }).catch(err => {
        console.log("error occur", err);
    })
});

router.post("/", (req,res) => {

});

router.put("/:id", (req,res) => {

});

router.delete("/:id", (req,res) => {

});

module.exports = router