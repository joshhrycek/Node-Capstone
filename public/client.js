'use strict';

const MOCK_CHARACTER = {
    "id": 1,
    "player": "Josh",
    "name": "Jumbles The Monk",
    "class": "Monk",
    "race": "Wood Elf",
    "alignment": "Chaotic Neutral",
    "background": "Scholor",
    "ExpPoints": 1000,
    "level": 1,
    "attr": {
        "str": 1,
        "dex": 3,
        "con": 5,
        "int": 7,
        "wis": 10,
        "cha": 12
      },
    "insp": 1,
    "profBonus": 2,
    "passiveWis": 10,
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
    "atks": [
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

const character = MOCK_CHARACTER

function calculateAttrMod (stat) {
    if (stat === 1) {
        return -5
    }if (stat === 2) {
        return -4
    }if (stat === 3) {
        return -3
    }if (stat === 5) {
        return -2
    }if (stat === 23 || 22 ) {
        $(`#${name}-mod`).attr('value', 6)
    }if (stat === 21 || 20 ) {
        $(`#${name}-mod`).attr('value', 5)
    }if (stat === 19 || 18 ) {
        $(`#${name}-mod`).attr('value', 4)
    }if (stat === 17 || 16 ) {
        $(`#${name}-mod`).attr('value', 3)
    }if (stat === 15 || 14 ) {
        $(`#${name}-mod`).attr('value', 2)
    }if (stat === 13 || 12 ) {
        $(`#${name}-mod`).attr('value', 1)
    }if (stat === 11 || 10 ) {
        $(`#${name}-mod`).attr('value', 0)
    }if (stat === 9 || 8 ) {
        $(`#${name}-mod`).attr('value', -1)
    }if (stat === 7 || 6 ) {
        $(`#${name}-mod`).attr('value', -2)
    }if (stat === 5 || 4 ) {
        $(`#${name}-mod`).attr('value', -3)
    }if (stat === 3 || 2 ) {
        $(`#${name}-mod`).attr('value', -4)
    }if (stat === 1) {
        $(`#${name}-mod`).attr('value', -5)
    }
}

console.log(character)
function getCharacterSheet(callbackFn) {
    setTimeout(function() {
        callbackFn(character)}, 100);
}

function displayCharacterSheet(character) {

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
    let name = character.player
    $('#player').attr('value', name)
}

function renderCharName() {
    let name = character.name
    $('#char-name').attr('value', name);
}

function renderClass() {
    let characterClass = character.class
    $('#class').attr('value', characterClass)
}

function renderRace() {
    let race = character.race
    $('#race').attr('value', race)
}

function renderAlignment() {
    let alignment = character.alignment
    $('#alignment').attr('value', alignment)
}

function renderExp() {
    let exp = character.ExpPoints
    $('#exp').attr('value', exp)
}

function renderLvl() {
    let lvl = character.level
    $('#level').attr('value', lvl)
}

function renderAttr() {
    for (let i in character.attr) {
        $(`#${i}`).val(character.attr[i]);
        renderAttrMod(i, character.attr[i]);
    }
}

function renderAttrMod (name, stat) {
    let mod = calculateAttrMod(stat)
    $(`#${name}-mod`).attr('value', mod)
}

function renderBackground() {
    let background = character.background
    $('#background').attr('value', background)
}

function renderInsp() {
    let insp = character.insp
    $('#insp').attr('value', insp)
}

function renderProfBonus() {
    let prof = character.profBonus
    $('#prof-bonus').attr('value', prof)
}

function renderAC() {
    let ac = character.AC
    $('#armor').attr('value', ac)
}

function renderInitative() {
    let init = character.init
    $('#init').attr('value', init)
}

function renderSpeed() {
    let speed = character.speed
    $('#speed').attr('value', speed)
}

function renderMaxHP() {
    let hp = character.hp
    $('#maxHP').attr('value', hp)
}

function renderCurrentHP() {
    let hp = character.currentHp
    $('#currentHP').attr('value', hp)
}

function renderTempHP() {
    let hp = character.tempHp
    $('#tempHP').attr('value', hp)
}

function renderSaveThrows() {
    
}

function renderSkills() {
    let arrayOfArrays = Object.entries(character.skills)
    arrayOfArrays.forEach(i => {
        let name = i[0]
        let isChecked = i[1]
        checkProfSkills(name, isChecked);
    });
    getSkillPoints();
    addSkillBonus();
}

function getSkillPoints(name, isChecked) {
    let str = document.getElementById('str-mod').value
    let dex = document.getElementById('dex-mod').value
    let con = document.getElementById('con-mod').value
    let int = document.getElementById('int-mod').value
    let wis = document.getElementById('wis-mod').value
    let cha = document.getElementById('cha-mod').value

    $('#acro-point,#anim-point').attr('value', dex)

}

function addSkillBonus(stat) {
    let bonus = character.profBonus
}

function checkProfSkills (name, isChecked) {
    if (isChecked === true) {
        $(`#${name}-pro`).attr('checked','')
    }
}

function renderPassWis() {
    let wis = character.passiveWis
    $('#pass-wis').attr('value', wis)
}

function renderProfandLang() {
    character.langsAndProfs.forEach(i => {
         $('#lang-list').append(generateProfandLang(i));
    });
}

function generateProfandLang(name) {
    return `
    <input class="lang" value="${name}"></input>`
}

function renderHitD() {
    
}

function renderDeathSave() {
    
}

function renderAtks() {
    character.atks.forEach(atk => {
        const newAtk = generateAtk(atk[0], atk[1], atk[2]);
        $('#new-atk').append(newAtk);
    })
}

function generateAtk(name, bonus, dmg) {
    return `
    <legend>Name</legend>
    <input class="atk-name" type="text" value="${ name }">
    <legend>Attack Bonus</legend>
    <input class="atk-bonus" type="number" value="${ bonus }">
    <legend>Damage/Bonus</legend>
    <input class="atk-damage" type="text" value="${ dmg }">`
}

function renderSpellcasting() {
    
}

function renderMoney() {
    for (let i in character.money) {
        $(`#${i}`).val(character.money[i]);
    }
}

function renderEquipment() {
    character.equip.forEach(i => {
        $('#other-equip').append(generateEquip(i));
    });
}

function generateEquip(name) {
    return `
    <input class="equip-class" value="${name}"></input>`
}

function renderStory() {
    for (let i in character.story) {
        $(`#${i}`).val(character.story[i]);
    }
}

function renderFeats() {
    character.feats.forEach(i => {
        $('#feats-list').append(generateFeats(i));
    });
}

function generateFeats(name) {
    return `
    <input type="text" class="feats" value="${name}"></input>`
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
    renderAttr();
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
    renderSkills();
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