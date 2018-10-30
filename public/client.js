'use strict';

const MOCK_CHARACTER = {
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

function renderInitiative() {
    let initi = document.getElementById('dex-mod').value
    $('#initi').attr('value', initi)
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
    let hit = character.hitD
    $('#hitDice').attr('value',hit)
}

function renderDeathSave() {
    let success = character.deathSave.success
    let fail = character.deathSave.fail
    for (let i = 0; i < success; i++) {
        $('.death-success').attr('checked', true)
    }
    for (let i = 0; i < fail; i++) {
        $('.death-fail').attr('checked', true)
    }
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
    <legend>Weapon Name</legend>
    <input class="atk-name" type="text" value="${ name }">
    <legend>Attack Bonus</legend>
    <input class="atk-bonus" type="number" value="${ bonus }">
    <legend>Damage/Bonus</legend>
    <input class="atk-damage" type="text" value="${ dmg }">
    </fieldset>`
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

function renderSpells() {
    character.spells.forEach(spell => {
        let newSpell = generateSpell(spell.name, spell.lvl)
        $('#atks-spells').append(newSpell);
    })
}

function generateSpell(name, lvl) {
    let newLvl = lvl
    
    if (newLvl === 0) {
        newLvl = "cantrip"
    }
    
    return `
    <fieldset class= "new-spell">
    <legend>Spell Name</legend>
    <input class="spell-name" type="text" value="${ name }">
    <legend>Spell Lvl</legend>
    <input class="spell-lvl" type="text" value="${newLvl}">
    </fieldset>`
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
    renderInitiative();
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
    renderMoney();
    renderEquipment();
    renderStory();
    renderFeats();
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

function getIniti() {
    return $('#initi').val();
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
        saveObj[name] = checkIfCheckedID(name, 'save')
    })

    return saveObj
}

function generateSkillsObj() {

    let skillObj = {}

    let name = ['acro','anim','arca','athl','dece','hist','insi','inti','inve','medi','natu','perc','perf','pers','reli','soh','stlh','surv']

    name.forEach(name => {
        skillObj[name] = checkIfCheckedID(name, 'pro');
    })

    return skillObj
}

function checkIfCheckedID(name, id) {
    if ($(`#${name}-${id}`).is(':checked')) {
        return true
    }else{
        return false
    }
}

function getAtks() {
    let atks = [];

    const names =  $('#atks-spells fieldset .atk-name').toArray().map(el => el.value);

    const bonus = $('#atks-spells fieldset .atk-bonus').toArray().map(el => el.value);

    const dmg = $('#atks-spells fieldset .atk-damage').toArray().map(el => el.value);

    for (let i= 0;i < names.length; i++) {
        atks.push([names[i],bonus[i],dmg[i]])
    }

    return atks
}

function getSpells() {
    let spells = [];

    const name =  $('#atks-spells fieldset .spell-name ').toArray().map(el => el.value);
    const lvl = $('#atks-spells fieldset .spell-lvl').toArray().map(el => el.value);
    
    for (let i= 0;i < name.length; i++) {
        spells.push([name[i],lvl[i]])
    }

    return spells
}

function getHitD() {
    return $('#hitDice').val();
}

function generateDeathSaveObj() {
    let save = {
        success: 0,
        fail: 0
    }

    for (let i = 0; i < 3; i++) {
        if($('.death-success').is(':checked')) {
            save.success++
        }
        if($('.death-fail').is(':checked')){
            save.fail++
        }
    }
    console.log(save)
    return save
}

function getEquipment() {
    let equip = [];

    const array =  $('#other-equip input:text').toArray().map(el => el.value);

    array.forEach(item => {
        equip.push(item)
    })
    return equip
}

function getLangsAndProfs() {
    let profs = [];

    const array =  $('#lang-list input:text').toArray().map(el => el.value);

    array.forEach(item => {
        profs.push(item)
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

    const array =  $('#feats-list input:text').toArray().map(el => el.value);

    array.forEach(item => {
        feats.push(item)
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
    newCharacter.initi = getIniti();
    newCharacter.speed = getSpeed();
    newCharacter.hp = getHP();
    newCharacter.currentHp = getCurrentHP();
    newCharacter.tempHp = getTempHP();
    newCharacter.saveThrows = getSaveThrows();
    newCharacter.skills = generateSkillsObj();
    newCharacter.atks = getAtks();
    newCharacter.spells = getSpells();
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