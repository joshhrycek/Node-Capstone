const testCharacter = {
    "player": "Josh",
    "name": "Jumbles The Monk",
    "class": "Monk",
    "race": "Wood Elf",
    "alignment": "Chaotic Neutral",
    "background": "Scholor",
    "ExpPoints": 1000,
    "level": 1,
    "attr": {
        "str": 19,
        "dex": 12,
        "con": 15,
        "int": 10,
        "wis": 9,
        "cha": 13
      },
    "insp": 1,
    "profBonus": 2,
    "passiveWis": 10,
    "AC": 16,
    "initi": 0,
    "speed": 25,
    "hp": 30,
    "currentHp": 20,
    "tempHp": 5,
    "saveThrows": {
      "str": false,
      "dex": true,
      "con": false,
      "int": true,
      "wis": false,
      "cha": true
    },
    "skills": {
      "acro": false,
      "anim": false,
      "arca": false,
      "athl": false,
      "dece": false,
      "hist": false,
      "insi": false,
      "inti": false,
      "inve": true,
      "medi": false,
      "natu": false,
      "perc": true,
      "perf": false,
      "pers": false,
      "reli": true,
      "soh": false,
      "stlh": true,
      "surv": true
    },
    "atks": [
      [
        "Greatsword",
        10,
        "1d12 + 3 slashing"
      ],
      [
        "Unarmed",
        5,
        "1d8 bashing"
      ]
    ],
    "spells":[
        {
            name: "fireball",
            lvl: 1
        },
        {
            name: "Ice Shard",
            lvl: 3
        },
        {
            name: "Torchlight",
            lvl: 0
        }
    ],
    "hitD": "5d4",
    "deathSave": {
      "success": 2,
      "fail": 1
    },
    "equip": [
      "Greatsword",
      "Club",
      "Bag Of Holding",
      "Javelin",
      "Health Potion",
      "Staff of Wanting",
      "Map"
    ],
    "langsAndProfs": [
        "Unarmed",
        "Goblin",
        "Simple Weapons",
        "Common",
        "Elven"
    ],
    "money":{
        "cp": 0,
        "sp": 0,
        "ep": 0,
        "gp": 0,
        "pp": 0
    },
    "story": {
        "traits": 'trait1',
        "ideals": 'idea1',
        "bonds": 'bond1',
        "flaws": 'flaw1',
    },
    "feats": [
      "Brave",
      "Self-Consious",
      "Reckless",
    ],
};

module.exports = { testCharacter }