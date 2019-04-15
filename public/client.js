'use strict';

const character = "";

const currentUser = {
    user: null,
    token: null,
}

function changeCurrentUser (res) {
    console.log(res);
    const {authToken} = res;
    localStorage.setItem("authToken", authToken);
    currentUser.user = $('#signin-user').val();
    currentUser.token = res.authToken
    console.log("changed user", currentUser.user)
    console.log("changed pass", currentUser.token)
}

function getUserCharacters() {
    $.ajax({
        method: 'GET',
        contentType: 'application/json',
        dataType: 'json',
        processData: false,
        url: '/characters',
        headers: {'Authorization': `Bearer ${ currentUser.token }`}
    })
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

function watchHomeButton() {
    $('header').on('click', '#home-button', event => {
        renderMainPage();
    });
}

function watchExampleButton() {
    $('main').on('click', '#example-button', event => {
        renderCharacterSheetPage();
    });
}

function watchTestButton() {
    $('main').on('click','#test-button', event => {
        getAndDisplayCharacterSheet();
    });
}

function watchTestRetriveButton() {
    $('main').on('click', '#test-retrive', event => {
        generateCharacterInfoObj();
    })
}

function watchSignupButton () {
    $('header').on('click', '#enterSignup', event => {
        event.preventDefault();
        renderSignupPage();
        watchSignupSubmitButton();
    })
}

function watchSignupSubmitButton () {
    $('main').on('click', '#signup-submit', event => {
        console.log("clicked")
        event.preventDefault();
        let username = $('#signup-user').val();
        let password = $('#signup-password').val();
        let passwordConfirm = $('#signup-confirm');
        let loginInfo = {
            username: username,
            password: password
        }
        if(password = passwordConfirm) {
            console.log("confimred")
            $.ajax({
            method: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            processData: false,
            url: `/users`,
            data: JSON.stringify(loginInfo),
            success: changeCurrentUser,
          });
        }else if (password !== passwordConfirm) {
            const err = "Passwords do not match!"
            console.log(err)
        }
    });
}

function watchSigninButton() {
    $('header').on('click', '#enterSignin', event => {
        event.preventDefault();
        renderLoginPage();
        watchLoginButton();
    });
}

function watchLoginButton() {
    $('main').on('click', '#signin-submit', event => {
        event.preventDefault();
        const username = $('#signin-user').val();
        const password = $('#signin-password').val();
        const loginInfo = { username, password };
            $.ajax({
            method: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            url: `/login`,
            data: JSON.stringify(loginInfo),
            success: changeCurrentUser,
          });
    });
}

function watchCharactersButton() {
    $('main').on('click', '#saved-characters', event => {
        event.preventDefault();
        console.log("clicked")
        renderSavedCharcters();

    })
}

function renderMainPage() {
    $('main').html(`<h2 id="description">Create, Update, or Store Your Dungeons and Dragons Character With Lore Ledger</h2>
    <button id="example-button">See an Example</button>
    <button id="saved-characters" >My Characters</button>`);
}

function renderSignupPage() {
    $('main').html(`<form id="signup">
    <fieldset id="signup-fieldset">
        <legend>Sign Up!</legend>
        <input type="text" id="signup-user" required>
        <input type="text" id="signup-password" required>
        <input type="text" id="signup-confirm" required>
        <button type="submit" id="signup-submit">Submit</button>
    </fieldset>
</form>`);
}

function renderLoginPage() {
    $('main').html(`<form id="signin">
    <fieldset id="signin-fieldset">
        <legend id="signin-legend">Sign In!</legend>
        <input type="text" id="signin-user" required>
        <input type="text" id="signin-password" required>
        <button type="submit" id="signin-submit">Submit</button>
    </fieldset>
</form>`);
}

function renderUserCharactersPage() {
    $('main').html(`<h2>Your Characters</h2>
    <button id="character-create-button">Create a Character!</button>
    <ul id="savedChar-list" >
        <li><button class="character-button">Lash</button></li>
    </ul>`)
    renderSavedCharcters()
    
}

function renderSavedCharcters() {
    getUserCharacters()
}

function renderCharacterSheetPage() {
    $('main').html(`<button id="test-button">test render</button>
    <button id="test-retrive">test retrive</button>

    <form id= "character-info">

            <fieldset class= "col-1">
            <legend for="char-name">Character Name</legend>
            <input type="text" id="char-name" required>
            </fieldset>

        
            <fieldset class= "col-1">
            <legend for="class">Class</legend>
            <input type="text" id= "class" required>
            </fieldset>
        
        
            <fieldset class= "col-1">
            <legend for="level">Level</legend>
            <input type="number" id= "level" required>
            </fieldset>

        
            <fieldset class= "col-1">
            <legend for="race">Race</legend>
            <input type="text" id="race" required>
            </fieldset>


            <fieldset class= "col-1">
            <legend for= "background">Background</legend>
            <input type="text" id= "background" required>
            </fieldset>

        
            <fieldset class= "col-1">
            <legend for="alignment">Alignment</legend>
            <input type="text" id="alignment" required>
            </fieldset>

        
            <fieldset class= "col-1">
            <legend for="player">Player Name</legend>
            <input type="text" id="player" required>
            </fieldset>

        
            <fieldset class= "col-1">
            <legend for="exp">Experience Points</legend>
            <input type="number" id="exp" required>
            </fieldset>

    </form>

    <form id= "attributes" class="col-6">
    <h2 id="attr-logo">Attributes</h2></br>
            <fieldset class= "col-3">
                <legend for= "str">Strength</legend>
                <input type= "number" id="str" required>
                <input type= "number" id="str-mod" required>
            </fieldset>

        
            <fieldset class= "col-3">
                <legend for= "dex">Dexterity</legend>
                <input type= "number" id="dex" required>
                <input type= "number" id="dex-mod" required>
            </fieldset>

        
            <fieldset class= "col-3">
                <legend for= "con">Constitution</legend>
                <input type= "number" id="con" required>
                <input type= "number" id="con-mod" required>
            </fieldset>

            <fieldset class= "col-3">
                <legend for= "int">Intelligence</legend>
                <input type= "number" id="int" required>
                <input type= "number" id="int-mod" required>
            </fieldset>

        
            <fieldset class= "col-3">
                <legend for= "wis">Wisdom</legend>
                <input type= "number" id="wis" required>
                <input type= "number" id="wis-mod" required>
            </fieldset>

        
            <fieldset class= "col-3">
                <legend for= "cha">Charisma</legend>
                <input type= "number" id="cha" required>
                <input type= "number" id="cha-mod" required>
            </fieldset>
    </form>
        
    <form id= "misc-attr" class= "col-6">
            <fieldset class= "col-1">
            <legend for="insp">Inspiration</legend>
            <input type="number" id="insp" required>
            </fieldset>

        
            <fieldset class= "col-1">
            <legend for="prof-bonus">Proficiency Bonus</legend>
            <input type="number" id="prof-bonus" required>
            </fieldset>

        
            <fieldset class= "col-1">
            <legend for="pass-wis">Passive Wisdom</legend>
            <input type="number" id="pass-wis" required>
            </fieldset>
    </form>


    <form id= "skills" class= "col-12">

    <h2 id="skill-logo">Skills</h2></br>
            <fieldset id="acro" class= "col-2">
                <legend>Acrobatics</legend>
                <input class="skill-pro" id="acro" type="checkbox">
                <input type="number" class="skill-point" id="acro-point">
            </fieldset>

        
            <fieldset id="anim" class= "col-2">
                <legend>Animal Handling</legend>
                <input class="skill-pro" id="anim-pro" type="checkbox">
                <input type="number" class="skill-pro" id="anim-point">
            </fieldset>

        
            <fieldset id="arca" class= "col-2">
                <legend>Arcana</legend>
                <input class="skill-pro" id="arca-pro" type="checkbox">
                <input type="number" class="skill-pro" id="arca-point">
            </fieldset>

        
            <fieldset id="athl" class= "col-2">
                <legend>Athletics</legend>
                <input class="skill-pro" id="athl-pro" type="checkbox">
                <input type="number" class="skill-pro" id="athl-point">
            </fieldset>

        
            <fieldset id="dece" class= "col-2">
                <legend>Deception</legend>
                <input class="skill-pro" id="dece-pro" type="checkbox">
                <input type="number" id="dece-point">
            </fieldset>

        
            <fieldset id="hist" class= "col-2">
                <legend>History</legend>
                <input class="skill-pro" id="hist-pro" type="checkbox">
                <input type="number" id="hist-point">
            </fieldset>

        
            <fieldset id="insi" class= "col-2">
                <legend>Insight</legend>
                <input class="skill-pro" id="insi-pro" type="checkbox">
                <input type="number" id="insi-point">
            </fieldset>

        
            <fieldset id="inti" class= "col-2">
                <legend>Intimidation</legend>
                <input class="skill-pro" id="inti-pro" type="checkbox">
                <input type="number" id="inti-point">
            </fieldset>

        
            <fieldset id="inve" class= "col-2">
                <legend>Investigation</legend>
                <input class="skill-pro" id="inve-pro" type="checkbox">
                <input type="number" id="inve-point">
            </fieldset>

            <fieldset id="medi" class= "col-2">
                <legend>Medicine</legend>
                <input class="skill-pro" id="medi-pro" type="checkbox">
                <input type="number" id="medi-point">
            </fieldset>

        
            <fieldset id="natu" class= "col-2">
                <legend>Nature</legend>
                <input class="skill-pro" id="natu-pro" type="checkbox">
                <input type="number" id="natu-point">
            </fieldset>

            <fieldset id="perc" class= "col-2">
                <legend>Perception</legend>
                <input class="skill-pro" id="perc-pro" type="checkbox">
                <input type="number" id="perc-point">
            </fieldset>

            <fieldset id="perf" class= "col-2">
                <legend>Performance</legend>
                <input class="skill-pro" id="perf-pro" type="checkbox">
                <input type="number" id="perf-point">
            </fieldset>

            <fieldset id="pers" class= "col-2">
                <legend>Persuasion</legend>
                <input class="skill-pro" id="pres-pro" type="checkbox">
                <input type="number" id="pers-point">
            </fieldset>

            <fieldset id="reli" class= "col-2">
                <legend>Religion</legend>
                <input class="skill-pro" id="reli-pro" type="checkbox">
                <input type="number" id="reli-point">
            </fieldset>

            <fieldset id="soh" class= "col-2">
                <legend>Sleight of Hand</legend>
                <input class="skill-pro" id="soh-pro" type="checkbox">
                <input type="number" id="soh-point">
            </fieldset>

        
            <fieldset id="stlh" class= "col-2">
                <legend>Stealth</legend>
                <input class="skill-pro" id="stlh-pro" type="checkbox">
                <input type="number" id="stlh-point">
            </fieldset>

        
            <fieldset id="surv" class= "col-2">
                <legend>Survival</legend>
                <input class="skill-pro" id="surv-pro" type="checkbox">
                <input type="number" id="surv-point">
            </fieldset>

    </form>

    <form id= "saves" class= "col-6">

    <h2 id="save-logo">Saving Throws</h2></br>
            <fieldset>
                <legend>Strength</legend>
                <input type="checkbox" class="save-prof" id="str-save">
                <input id="str-save-point" type="number">
            </fieldset>

        
            <fieldset>
                <legend>Dexterity</legend>
                <input type="checkbox" class="save-prof" id="dex-save">
                <input id="dex-save-point" type="number">
            </fieldset>

        
            <fieldset>
                <legend>Constitution</legend>
                <input type="checkbox" class="save-prof" id="con-save">
                <input id="con-save-point" type="number">
            </fieldset>

        
            <fieldset>
                <legend>Intelligence</legend>
                <input type="checkbox" class="save-prof" id="int-save">
                <input id="int-save-point" type="number">
            </fieldset>

        
            <fieldset>
                <legend>Wisdom</legend>
                <input type="checkbox" class="save-prof" id="wis-save">
                <input id="wis-save-point" type="number">
            </fieldset>

        
            <fieldset>
                <legend>Charisma</legend>
                <input type="checkbox" class="save-prof" id="cha-save">
                <input id="cha-save-point" type="number">
            </fieldset>

            <fieldset>
                <legend>Death Saves</legend>
                <label>Success
                    <input type="checkbox" class="death-success">
                    <input type="checkbox" class="death-success">
                    <input type="checkbox" class="death-success">
                </label>
                <label>Failure
                    <input type="checkbox" class="death-fail">
                    <input type="checkbox" class="death-fail">
                    <input type="checkbox" class="death-fail">
                </label>
            </fieldset>

    </form>

    <form id= "combat-stats" class= "col-6">

    <h2 id="combat-logo">Combat</h2></br>
            <fieldset class= "col-3">
                <legend>Armor Class</legend>
                <input  id="armor" type="number">
            </fieldset>

        
            <fieldset class= "col-3">
                <legend>Initiative</legend>
                <input  id="initi" type="number">
            </fieldset>

        
            <fieldset class= "col-3">
                <legend>Speed</legend>
                <input id="speed" type="number">
            </fieldset>

        
            <fieldset>
                <legend>Hit Point Maximum</legend>
                <input id="maxHP" type="number">
                <legend>Current Hit Points</legend>
                <input id= "currentHP" type="number">
                <legend>Temporary Hit Points</legend>
                <input id="tempHP" type="number">
            </fieldset>

            <fieldset>
                <legend>Hit Dice</legend>
                <input type="text" id="hitDice">
            </fieldset>

            <form id="atks-spells">
        
            <fieldset class= "new-atk">
    
            <legend>Name</legend>
            <input id="new-atk-name" type="text">
            
            <legend>Attack Bonus</legend>
            <input id="new-atk-bonus" type="number">
            
            <legend>Damage/Type</legend>
            <input id="new-atk-dmg" type="text">
    
            </fieldset>
    
            <button id="new-atk-button" type="submit">Add Attack</button>
        </form>

    </form>

    <form id="background-form" class= "col-6">

    <h2 id="story-logo">Story</h2></br>
            <fieldset id="traits-form">
                <legend>Personality Traits</legend>
                <input id="traits" type="text">
            </fieldset>

        
            <fieldset id="ideals-form">
                <legend>Ideals</legend>
                <input id="ideals" type="text">
            </fieldset>

        
            <fieldset id="bonds-form">
                <legend>Bonds</legend>
                <input id="bonds" type="text">
            </fieldset>

        
            <fieldset id="flaws-form">
                <legend>Flaws</legend>
                <input id="flaws" type="text">
            </fieldset>

    </form>

    <form id="equipment" class= "col-6">

    <h2 id="equip-logo">Equipment</h2></br>
            <fieldset id="money">
                <legend>CP</legend>
                <input id="cp" type="number">
                <legend>SP</legend>
                <input id="sp" type="number">
                <legend>EP</legend>
                <input id="ep" type="number">
                <legend>GP</legend>
                <input id="gp" type="number">
                <legend>PP</legend>
                <input id="pp" type="number">
            </fieldset>

        
            <fieldset id="other-equip">
                <legend>Equipment</legend>
                <input id="equip" class="equip-class" type="text">
                <button id="equip-button">Add Equipment</button>
            </fieldset>

    </form>

    <form id="features" class= "col-6">
    <h2 id="feats-logo">Features and Traits</h2></br>
            <fieldset id="feats-list">
            <legend>Features and Traits</legend>
            <input type="text" id="new-feat" class="feats">
            <button id="add-feat-button" type="submit">Add Feature</button>
            </fieldset>
    </form>

    <form id="lang-other" class= "col-6">
    <h2 id="lang-logo">Languages and Other Profiences</h2></br>
            <fieldset id="lang-list">
                <legend>Languages and Other Proficiencies</legend>
                <input type="text" id="new-lang" class="lang">
                <button id="add-lang-button" type="submit">Add Proficiency</button>
            </fieldset>
    </form>
`)
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

function calculateAttrMod (stat) {
    let mod = (stat - 10) / 2
    return Math.floor(mod)
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

    newCharacter.username = currentUser.user;
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
    watchHomeButton();
    watchAttackButton();
    watchEquipButton();
    watchFeatButton();
    watchProfButton();
    watchTestButton();
    watchTestRetriveButton();
    watchExampleButton();
    watchSignupButton();
    watchSigninButton();
    watchAttackButton();
    watchCharactersButton();

}

function startApp() {
    watchButtons();
    rollDice();
}

$(startApp);