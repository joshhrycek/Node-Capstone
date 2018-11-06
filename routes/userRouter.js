'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const config = require ('../config');
const router = express.Router();

mongoose.Promise = global.Promise;

const {User} = require('../models');

router.post ('/', jsonParser, (req, res) => {
    const requiredFields = ['username', 'password'];
    const missingField = requiredFields.find(field => {
        !(field in req.body)
    });

    if (missingField) {
        return res.status(422).json({
            reason: "Missing Field",
            location: missingField
        });
    }

    const stringFields = requiredFields
    const nonStringField = stringFields.find(field => {
        field in req.body && typeof req.body[field] !== 'string'
    });

    if (nonStringField) {
        return res.status(422).json({
            reason: "Field is not a String",
            location: nonStringField
        });
    }

    const trimmed = stringFields;
    const nonTrimmedField = trimmed.find(field => {
        req.body[field].trim() !== req.body[field]
    });

    if (nonTrimmedField) {
        return res.status(422).json({
            reason: "Field cannot start of end with a space",
            location: nonTrimmedField
        });
    }

    const sizedFields = {
        username: {
            min: 5
        },
        password: {
            min: 5,
            max: 72
        }
    };
    const tooSmall = Object.keys(sizedFields).find(field => {
        'min' in sizedFields[field] &&
        req.body[field].trim().length < sizedFields[field].min
    });
    const tooBig = Object.keys(sizedFields).find(field => {
        'max' in sizedFields[field] &&
        req.body[field].trim().length > sizedFields[field].max
    });

    if (tooSmall || tooBig) {
        return res.status(422).json({
            reason: "Field is either less than 5 characters long, or more than 72 characters long",
            location: tooSmall || tooBig
        });
    }

    let {username, password} = req.body;

    return User
    .find({username})
    .count()
    .then(count => {
        if (count > 0) {
            return Promise.reject({
                code: 422,
                reason: "Username Taken",
                location: "username"
            });
        }
    return User.hashPassword(password)
    })
    .then(hash => {
        return User.create({
            username,
            password: hash,
            firstName,
            lastName
        });
    })
    .then(user => {
        return res.status(201).json(user.serialize());
    })
    .catch(err => {
        if (err.reason === "Username Taken") {
            return res.status(err.code).json(err);
        }
        res.status(500).json({
            code: 500,
            message: "Internal Server Error"
        });
    });
});

module.exports = router;