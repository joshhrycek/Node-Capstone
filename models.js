'use strict';

const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const charactersSchema = mongoose.Schema({
    "username": String,
    "player": {type : String, required: true},
    "name": {type : String, required: true},
    "playerClass": {type : String, required: true},
    "race": {type : String, required: true},
    "alignment": String,
    "background": String,
    "ExpPoints": Number,
    "level": Number,
    "attr": {
        "str": Number,
        "dex": Number,
        "con": Number,
        "int": Number,
        "wis": Number,
        "cha": Number
      },
    "insp": Number,
    "profBonus": Number,
    "passiveWis": Number,
    "AC": Number,
    "initi": Number,
    "speed": Number,
    "hp": Number,
    "currentHp": Number,
    "tempHp": Number,
    "saveThrows": {
      "str": Boolean,
      "dex": Boolean,
      "con": Boolean,
      "int": Boolean,
      "wis": Boolean,
      "cha": Boolean
    },
    "skills": {
      "acro": Boolean,
      "anim": Boolean,
      "arca": Boolean,
      "athl": Boolean,
      "dece": Boolean,
      "hist": Boolean,
      "insi": Boolean,
      "inti": Boolean,
      "inve": Boolean,
      "medi": Boolean,
      "natu": Boolean,
      "perc": Boolean,
      "perf": Boolean,
      "pers": Boolean,
      "reli": Boolean,
      "soh": Boolean,
      "stlh": Boolean,
      "surv": Boolean
    },
    "atks": [
      [
        String,
        Number,
        String
      ]
    ],
    "spells":[
        {
            name: String,
            lvl: Number
        }
    ],
    "hitD": String,
    "deathSave": {
      "success": Number,
      "fail": Number
    },
    "equip": [
      String
    ],
    "langsAndProfs": [
        String
    ],
    "money":{
        "cp": Number,
        "sp": Number,
        "ep": Number,
        "gp": Number,
        "pp": Number
    },
    "story": {
        "traits": String,
        "ideals": String,
        "bonds": String,
        "flaws": String,
    },
    "feats": [
        String
    ],
})

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.methods.serialize = function() {
    return {username: this.username}; 
}

userSchema.methods.validatePassword = function(password) {
    console.log("Validating this password", password);
    return bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = function(password) {
    return bcrypt.hash(password, 10);
}

charactersSchema.methods.serialize = function() {
    return {username: this.username}; 
}

const Characters = mongoose.model('Characters', charactersSchema);
const User = mongoose.model('User', userSchema);

module.exports = {Characters, User}