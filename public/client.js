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
    "attr": {
        "str": 20,
        "dex": 20,
        "con": 20,
        "int": 20,
        "wis": 20,
        "cha": 20
      },
    "background": "Scholor",
    "insp": 1,
    "profBonus": 2,
    "AC": 16,
    "init": 0,
    "speed": 25,
    "hp": 30,
    "currentHp": 20,
    "tempHp": 5,
    "saveThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
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
    "passiveWis": 10,
    "profAndLang": [
      "Unarmed",
      "Goblin",
      "Simple Weapons",
      "Common",
      "Elven"
    ],
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
    "spellcasting": 0,
    "spellClass": 0,
    "spellAbility": 0,
    "spellSave": 0,
    "spellAtkBonus": 0,
    "cantrips": ['fire'],
    "lvl1pells": ['vortex'],
    "lvl2Spells": [],
    "lvl3Spells": [],
    "lvl4": ['ball of death'],
    "lvl5": [],
    "lvl6": [],
    "lvl7": [],
    "lvl8": [],
    "lvl9": [],
    "hitD": 0,
    "deathSave": {
      "successes": 0,
      "failures": 0
    },
    "equipment": [
      "Greatsword",
      "Club",
      "Bag Of Holding",
      "Javelin",
      "Health Potion",
      "Staff of Wanting",
      "Map"
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
    "features": [
      "Brave",
      "Self-Consious",
      "Reckless",
    ],
};

const data = MOCK_CHARACTER

console.log(MOCK_CHARACTER)
function getCharacterSheet(callbackFn) {
    setTimeout(function() {
        callbackFn(MOCK_CHARACTER)}, 100);
}

function displayCharacterSheet(data) {

}


function getAndDisplayCharacterSheet() {
    getCharacterSheet(displayStatusUpdates);
}

function watchTestButton() {
    $('#test-button').on('click', event => {
        renderValues();
    });
}

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


//Functions that are responsible for adding saved vaules to Character Sheets


function renderPlayerName() {
    let name = data.player
    $('#player').attr('value', name)
}

function renderCharName() {
    let name = data.name
    $('#char-name').attr('value', name);
}

function renderClass() {
    let characterClass = data.class
    $('#class').attr('value', characterClass)
}

function renderRace() {
    let race = data.race
    $('#race').attr('value', race)
}

function renderAlignment() {
    let alignment = data.alignment
    $('#alignment').attr('value', alignment)
}

function renderExp() {
    let exp = data.experiencePoints
    $('#exp').attr('value', exp)
}

function renderLvl() {
    let lvl = data.level
    $('#level').attr('value', lvl)
}

function renderattr() {
    
}

function renderBackground() {
    let background = data.background
    $('#background').attr('value', background)
}

function renderInsp() {
    let insp = data.insp
    $('#insp').attr('value', insp)
}

function renderProfBonus() {
    let prof = data.profBonus
    $('#prof-bonus').attr('value', prof)
}

function renderAC() {
    let ac = data.AC
    $('#armor').attr('value', ac)
}

function renderInitative() {
    let init = data.init
    $('#init').attr('value', init)
}

function renderSpeed() {
    let speed = data.speed
    $('#speed').attr('value', speed)
}

function renderMaxHP() {
    let hp = data.hp
    $('#maxHP').attr('value', hp)
}

function renderCurrentHP() {
    let hp = data.currentHp
    $('#currentHP').attr('value', hp)
}

function renderTempHP() {
    let hp = data.tempHp
    $('#tempHP').attr('value', hp)
}

function renderSaveThrows() {
    
}

function renderSkils() {
    
}

function renderPassWis() {
    let wis = data.passiveWis
    $('#pass-wis').attr('value', wis)
}

function renderProfandLang() {
    
}

function renderHitD() {
    
}

function renderDeathSave() {
    
}

function renderAtks() {
    
}

function renderSpellcasting() {
    
}

function renderMoney() {
    for (let i in data.money) {
        $(`#${i}`).val(data.money[i]);
    }
}

function renderEquipment() {
    
}

function renderStory() {
    for (let i in data.story) {
        $(`#${i}`).val(data.story[i]);
    }
}

function renderFeats() {
    
}

function renderSpellLvl1() {
    
}

function renderSpellLvl2() {
    
}

function renderSpellLvl3() {
    
}

function renderSpellLvl4() {
    
}

function renderSpellLvl5() {
    
}

function renderSpellLvl6() {
    
}

function renderSpellLvl7() {
    
}

function renderSpellLvl8() {
    
}

function renderSpellLvl9() {
    
}

function renderSpellClass() {

}

function renderSpellAbility() {
    
}

function renderSpellSave() {
    
}

function renderSpellAtkBonus() {
    
}

function renderCantrips() {
    
}

function renderLvlSpells() {
    renderSpellLvl1();
    renderSpellLvl2();
    renderSpellLvl3();
    renderSpellLvl4();
    renderSpellLvl5();
    renderSpellLvl6();
    renderSpellLvl7();
    renderSpellLvl8();
    renderSpellLvl9();
}

function renderSpellStats() {
    renderSpellClass();
    renderSpellAbility();
    renderSpellSave();
    renderSpellAtkBonus();
}

function renderSpells() {
    renderCantrips();
    renderLvlSpells();
}

function renderValues() {
    renderPlayerName();
    renderCharName();
    renderClass();
    renderRace();
    renderAlignment();
    renderExp();
    renderLvl();
    renderattr();
    renderBackground();
    renderInsp();
    renderProfBonus();
    renderAC();
    renderInitative();
    renderSpeed();
    renderMaxHP();
    renderCurrentHP();
    renderTempHP();
    renderSaveThrows();
    renderSkils();
    renderPassWis();
    renderProfandLang();
    renderHitD();
    renderDeathSave();
    renderAtks();
    renderSpellcasting();
    renderMoney();
    renderEquipment();
    renderStory();
    renderFeats();
    renderSpellStats();
    renderSpells();
}

function watchButtons() {
    watchTestButton();
}

function startApp() {
    renderMainPage();
    watchButtons();
}

$(startApp);