const express = require("express");
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();

const router = express.Router();

const {Characters} = require("../models")

router.get("/", (req,res) => {
    res.json(Characters.get());
});

router.post("/", (req,res) => {

});

router.put("/:id", (req,res) => {

});

router.delete("/:id", (req,res) => {

});

module.exports = router