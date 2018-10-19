'use strict';

const MOCK_CHARACTER = {
    "id": 1,
    "player": "Josh",
    "name": "Jumbles The Monk",
    "class": "Monk",
    "race": "Wood Elf",
    "alignment": "Chaotic Neutral",
    "experiencePoints": 1000,
    "level": 1,
    "attributes": {
        "strength": 20,
        "dexterity": 20,
        "constitution": 20,
        "intelligence": 20,
        "wisdom": 20,
        "charisma": 20
      },
    "background": "Scholor",
    "inspiration": 1,
    "proficiencyBonus": 2,
    "AC": 16,
    "initiative": null,
    "speed": 25,
    "hp": 30,
    "currentHp": 20,
    "temporaryHp": 5,
    "savingThrows": {
      "strength": null,
      "dexterity": null,
      "constitution": null,
      "intelligence": null,
      "wisdom": null,
      "charisma": null
    },
    "skills": {
      "acrobatics": false,
      "animalHandling": false,
      "arcana": false,
      "athletics": false,
      "deception": false,
      "history": false,
      "insight": false,
      "intimidation": false,
      "investigation": true,
      "medicine": false,
      "nature": false,
      "perception": true,
      "performance": false,
      "persuasion": false,
      "religion": true,
      "sleightOfHand": false,
      "stealth": true,
      "survival": true
    },
    "passiveWisdom": 8,
    "otherProfAndLang": [
      "Light & Med Armor",
      "Shields",
      "Simple & Martial Weapons",
      "Common",
      "Halfling"
    ],
    "hitDice": null,
    "deathSaves": {
      "successes": 0,
      "failures": 0
    },
    "attacks": [
      [
        "Greatsword",
        5,
        "1d12 + 3 slashing"
      ],
      [
        "Unarmed",
        5,
        "1d8 bashing"
      ]
    ],
    "spellcasting": null,
    "money":       {
        "cp": null,
        "sp": null,
        "ep": null,
        "gp": null,
        "pp": null
      },
    "equipment": [
      "Greatsword",
      "Club",
      "Bag Of Holding",
      "Javelins x6",
      "Health Potion",
      "Staff of Wanting",
      "Map"
    ],
    "story": {
        "traits": null,
        "ideals": null,
        "bonds": null,
        "flaws": null,
    },
    "features": [
      "Brave",
      "RAGE",
      "Reckless Attack",
    ],
    "spellcastingClass": null,
    "spellcastingAbility": null,
    "spellSaveDC": null,
    "spellAttackBonus": null,
    "cantrips": ['fire'],
    "levelOneSpells": ['vortex'],
    "levelTwoSpells": [],
    "levelThreeSpells": [],
    "levelFourSpells": ['ball of death'],
    "levelFiveSpells": [],
    "levelSixSpells": [],
    "levelSevenSpells": [],
    "levelEightSpells": [],
    "levelNineSpells": []
};

function getCharacterSheet(callbackFn) {
    setTimeout(function() {
        callbackFn(MOCK_CHARACTER)}, 100);
}

function displayCharacterSheet(data) {

}


function getAndDisplayCharacterSheet() {
    getCharacterSheet(displayStatusUpdates);
}

$(getAndDisplayCharacterSheet)

function renderMainPage() {

}

function renderSignupPage() {

}

function renderLoginPage() {

}

function renderUserCharactersPage() {
    
}

function renderSavedCharcters() {

}

function renderCharacterSheetPage() {

}

function watchButtons() {

}

function startApp() {
    renderMainPage();
    watchButtons();
}

$(startApp);