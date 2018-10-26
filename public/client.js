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
    "init": 0,
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


console.log(character)


function calculateAttrMod (stat) {
    let mod = (stat - 10) / 2
    return Math.floor(mod)
}

function getCharacterSheet(callbackFn) {
    setTimeout(function() {
        callbackFn(character)}, 100);
}

function displayCharacterSheet(character) {
    renderValues();
}


function getAndDisplayCharacterSheet() {
    getCharacterSheet(displayCharacterSheet);
}

function watchTestButton() {
    $('#test-button').on('click', event => {
        getAndDisplayCharacterSheet();
    });
}

function watchTestRetriveButton() {
    $('#test-retrive').on('click', event => {
        generateCharacterInfoObj();
    })
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

function getAttrMod(name) {

    let varName = parseInt(name)

    let str = document.getElementById('str-mod').value
    let dex = document.getElementById('dex-mod').value
    let con = document.getElementById('con-mod').value
    let int = document.getElementById('int-mod').value
    let wis = document.getElementById('wis-mod').value
    let cha = document.getElementById('cha-mod').value

    let attr = varName
    
    return attr
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

function addProfBonus (stat) {
    let number = parseInt(stat)
    let bonus = character.profBonus
    return number + bonus
}

function renderAC() {
    let ac = character.AC
    $('#armor').attr('value', ac)
}

function renderInitative() {
    let init = document.getElementById('dex-mod').value
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
    checkProfSaves();
    getSavePoints();
    addSaveBonus();
}

function checkProfSaves() {
    let arrayOfArrays = Object.entries(character.saveThrows)
    arrayOfArrays.forEach(i => {
        let name = i[0]
        let isChecked = i[1]
        if (isChecked === true) {
            $(`#${name}-save`).attr('checked','')
        }
    });
}

function getSavePoints() {
    let str = document.getElementById('str-mod').value
    let dex = document.getElementById('dex-mod').value
    let con = document.getElementById('con-mod').value
    let int = document.getElementById('int-mod').value
    let wis = document.getElementById('wis-mod').value
    let cha = document.getElementById('cha-mod').value

    $(`#str-save-point`).attr('value', str)
    $(`#dex-save-point`).attr('value', dex)
    $(`#con-save-point`).attr('value', con)
    $(`#int-save-point`).attr('value', int)
    $(`#wis-save-point`).attr('value', wis)
    $(`#cha-save-point`).attr('value', cha)
}

function addSaveBonus() {
    for (let save in character.saveThrows) {
        if ($(`#${save}-save`).is(':checked')) {
            let point = parseInt( document.getElementById(`${save}-save`).value);
            $(`#${save}-point`).attr('value', addProfBonus(point));
        }
    }
}

function renderSkills() {
    checkProfSkills();
    getSkillPoints();
    addSkillBonus();
}

function getSkillPoints() {
    let str = document.getElementById('str-mod').value
    let dex = document.getElementById('dex-mod').value
    let con = document.getElementById('con-mod').value
    let int = document.getElementById('int-mod').value
    let wis = document.getElementById('wis-mod').value
    let cha = document.getElementById('cha-mod').value

    let strSkills = ['#athl-point'] 
    let dexSkills = ['#acro-point','#soh-point','#stlh-point']
    let intSkills = ['#arca-point','#hist-point','#inve-point','#natu-point','#reli-point']
    let wisSkills = ['#anim-point','#insi-point','#medi-point','#perc-point','#surv-point']
    let chaSkills = ['#dece-point', '#inti-point','#perf-point','#pers-point']

    $(`${strSkills}`).attr('value', str)
    $(`${dexSkills}`).attr('value', dex)
    $(`${intSkills}`).attr('value', int)
    $(`${wisSkills}`).attr('value', wis)
    $(`${chaSkills}`).attr('value', cha)

}

function addSkillBonus() {
    for (let skill in character.skills) {
        if ($(`#${skill}-pro`).is(':checked')) {
            let skillPoint = parseInt( document.getElementById(`${skill}-point`).value);
            $(`#${skill}-point`).attr('value', addProfBonus(skillPoint));
        }
    }
}


function checkProfSkills () {
    let arrayOfArrays = Object.entries(character.skills)
    arrayOfArrays.forEach(i => {
        let name = i[0]
        let isChecked = i[1]
        if (isChecked === true) {
            $(`#${name}-pro`).attr('checked','')
        }
    });
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
        $('#atks-spells').append(newAtk);
    })
}

function generateAtk(name, bonus, dmg) {
    return `
    <fieldset class= "new-atk">
    <legend>Name</legend>
    <input class="atk-name" type="text" value="${ name }">
    <legend>Attack Bonus</legend>
    <input class="atk-bonus" type="number" value="${ bonus }">
    <legend>Damage/Bonus</legend>
    <input class="atk-damage" type="text" value="${ dmg }">
    </fieldset>`
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

function watchAttackButton () {
    $('#new-atk-button').on('click', event => {

    });
}

function watchEquipButton () {
    $('#equip-button').on('click', event => {

    });
}

function watchFeatButton () {
    $('#add-feat-button').on('click', event => {

    });
}

function watchProfButton () {
    $('#add-lang-button').on('click', event => {

    });
}

function rollDice() {
    let results = [];
    for (let i = 0; i < 6; i++) {
        let picks = [];
        for (let j = 0; j < 4; j++) {
            let number = Math.floor(Math.random() * 6) + 1
            picks.push(number);
        }
        picks = picks.sort();
        picks.shift();
        const sum = picks.reduce((a, b) => a + b, 0);
        results.push(sum)
    }
}

function getPlayer() {
    return $('#player').val()
}

function getName() {
    return $('#char-name').val()
}

function getClass() {
    return $('#class').val()
}

function getRace() {
    return $('#race').val()
}

function getAlignment() {
    return $('#alignment').val()
}

function getBackground() {
    return $('#background').val()
}

function getExp() {
    return $('#exp').val()
}

function getLvl() {
    return $('#level').val()
}

function generateAttrObj() {
    let attrObj = {}

    const attr = [
        'str','dex','con','int','wis','cha'];

    attr.forEach(attr => {
        attrObj[attr] = parseInt($(`#${attr}`).val())
    });

    return attrObj
}

function getInsp() {
    return $('#level').val();
}

function getProfBonus() {
    return $('#prof-bonus').val();
}

function getPassWis() {
    return $('#pass-wis').val();
}

function getAC() {
    return $('#armor').val();
}

function getInit() {
    return $('#init').val();
}

function getSpeed() {
    return $('#speed').val();
}

function getHP() {
    return $('#maxHP').val();
}

function getCurrentHP() {
    return $('#currentHP').val();
}

function getTempHP() {
    return $('#tempHP').val();
}

function getSaveThrows() {
    
    let saveObj = {}

    let name = ['str','dex','con','int','wis','cha']

    name.forEach(name => {
        saveObj[name] = checkIfChecked(name, 'save')
    })

    return saveObj
}

function generateSkillsObj() {

    let skillObj = {}

    let name = ['acro','anim','arca','athl','dece','hist','insi','inti','inve','medi','natu','perc','perf','pers','reli','soh','stlh','surv']

    name.forEach(name => {
        skillObj[name] = checkIfChecked(name, 'pro');
    })

    return skillObj
}

function checkIfChecked(name, id) {
    if ($(`#${name}-${id}`).is(':checked')) {
        return true
    }else{
        return false
    }
}

function getAtks() {

    let atksName = [];

    let atksBonus = [];

    let atksDmg = [];

    let atks = [];
    
    const names =  $('#atks-spells fieldset .atk-name');
    const bonus = $('#atks-spells fieldset .atk-bonus');
    const dmg = $('#atks-spells fieldset .atk-damage');
    
    atksName.push(names)
    atksBonus.push(bonus)
    atksDmg.push(dmg)

    atksName.forEach(atk => {
        
    });



}

function getSpellcasting() {

}

function getSpellClass() {

}

function getSpellAblity() {

}

function getSpellAblity() {

}

function getSpellSave() {

}

function getAtkBonus() {

}

function getCantrips() {

}

function getLvlSpells() {

}

function getHitD() {

}

function generateDeathSaveObj() {

}

function getEquipment() {
    let equip = [];

    const object =  $('#other-equip input:text').filter(function() {
        return $.trim(this.value) != "";
    });

    const array = Object.entries(object)

    array.forEach(item => {
        let equipObj = item[1].value
        equip.push(equipObj)
    })

    return equip
}

function getLangsAndProfs() {
    let profs = [];

    const object =  $('#lang-list input:text').filter(function() {
        return $.trim(this.value) != "";
    });

    const array = Object.entries(object)

    array.forEach(item => {
        let profObj = item[1].value
        profs.push(profObj)
    })

    return profs

}

function generateMoneyObj() {
    let moneyObj = {};

    const money = ['cp','sp','ep','gp','pp'];

    money.forEach(money => {
        moneyObj[money] = parseInt($(`#${money}`).val())
    });

    return moneyObj
}

function generateStoryObj() {
    let storyObj = {}

    const story = ['bonds','flaws','ideals','traits']

    story.forEach(i => {
        storyObj[i] = $(`#${i}`).val()
    })

    return storyObj
}

function getFeats() {
    let feats = [];

    const object =  $('#feats-list input:text').filter(function() {
        return $.trim(this.value) != "";
    });

    const array = Object.entries(object)

    array.forEach(item => {
        let featsObj = item[1].value
        feats.push(featsObj)
    })

    return feats
}


function generateCharacterInfoObj() {
    let newCharacter = {};

    newCharacter.player = getPlayer();
    newCharacter.name = getName();
    newCharacter.class = getClass();
    newCharacter.race = getRace();
    newCharacter.alignment = getAlignment();
    newCharacter.background = getBackground();
    newCharacter.ExpPoints = getExp();
    newCharacter.level = getLvl();
    newCharacter.attr = generateAttrObj();
    newCharacter.insp = getInsp();
    newCharacter.profBonus = getProfBonus();
    newCharacter.passiveWis = getPassWis();
    newCharacter.AC = getAC();
    newCharacter.init = getInit();
    newCharacter.speed = getSpeed();
    newCharacter.hp = getHP();
    newCharacter.currentHp = getCurrentHP();
    newCharacter.tempHp = getTempHP();
    newCharacter.saveThrows = getSaveThrows();
    newCharacter.skills = generateSkillsObj();
    newCharacter.atks = getAtks();
    newCharacter.spellcasting = getSpellcasting();
    newCharacter.spellClass = getSpellClass();
    newCharacter.spellAbility = getSpellAblity();
    newCharacter.spellSave = getSpellSave();
    newCharacter.spellAtkBonus = getAtkBonus();
    newCharacter.cantrips = getCantrips();
    newCharacter.lvlSpells = getLvlSpells();
    newCharacter.hitD = getHitD();
    newCharacter.deathSave = generateDeathSaveObj();
    newCharacter.equip = getEquipment();
    newCharacter.langsAndProfs = getLangsAndProfs();
    newCharacter.money = generateMoneyObj();
    newCharacter.story = generateStoryObj();
    newCharacter.feats = getFeats();

    console.log(newCharacter)
}

function watchButtons() {
    watchAttackButton();
    watchEquipButton();
    watchFeatButton();
    watchProfButton();
    watchTestButton();
    watchTestRetriveButton();
}

function startApp() {
    renderMainPage();
    watchButtons();
    rollDice();
}

$(startApp);