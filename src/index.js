// `"use strict";`
const state = {
    increaseTempButton: null,
    decreaseTempButton: null,
    tempNumberContainer: null,
    tempNumberClass: null,
    tempNumber: 1,
    skyEmojiContainer: null,
    skyEmoji: '',
    landEmojiContainer: null,
    landEmoji: '',
    cityNameContainer: null,
    cityName: '',
    cityInput: '',

};

const loadControls = () => {
    state.increaseTempButton = document.getElementById('increaseTempButton');
    state.decreaseTempButton = document.getElementById('decreaseTempButton');
    state.tempNumber = parseInt(document.getElementById('tempNumberContainer').innerText);
    state.tempNumberContainer = document.getElementById('tempNumberContainer');
    state.tempNumberClass = document.getElementById('tempNumberContainer').className;
    state.skyEmojiContainer = document.getElementById('skyEmojiContainer');
    state.skyEmoji = document.getElementById('skyEmojiContainer').innerText;
    state.landEmojiContainer = document.getElementById('landEmojiContainer');
    state.landEmoji = document.getElementById('landEmojiContainer').innerText;
    state.cityNameContainer = document.getElementById('cityNameContainer');
    state.cityName = document.getElementById('cityNameContainer').innerText;
    state.cityInput = document.getElementById('cityInput');
};

const checkTempColor = (tempNumber) => {
    let className = 'redTemp';
    if (tempNumber >= 80) {
        className = 'redTemp';
    } else if (tempNumber >= 70) {
        className = 'orangeTemp';
    } else if (tempNumber >= 60) {
        className = 'yellowTemp';
    } else if (tempNumber >= 50) {
        className = 'greenTemp';
    } else if (tempNumber <= 49) {
        className = 'tealTemp';
    }
    return className
}

const getLandscape = (temperature) => {
    if (temperature >= 80) {
        return "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (temperature >= 70) {
        return "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (temperature >= 60) {
        return "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else {
        return "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
};

const registerEventHandlers = () => {
    state.increaseTempButton.addEventListener('click', () => {
        state.tempNumberContainer.innerText = ++state.tempNumber;
        state.tempNumberContainer.className = checkTemp(state.tempNumberContainer.innerText);
        const landscape = getLandscape(state.tempNumber);
        // const skyEmojis = getSkyEmojis(state.tempNumber);
        document.getElementById("land-emoji-section").innerText = landscape;
        // document.getElementById("sky-emoji-div").innerText = skyEmojis;
        console.log(state.tempNumberContainer.className);
        console.log(state.tempNumber)
    });
    state.decreaseTempButton.addEventListener('click', () => {
        state.tempNumberContainer.innerText = --state.tempNumber;
        state.tempNumberContainer.className = checkTempColor(state.tempNumber);
        state.landEmojiContainer.innerText = checkTempPicture(state.tempNumber);
    });
    state.cityInput.addEventListener('input', () => {
        state.cityNameContainer.innerText = state.cityInput.value;
    });
};

const onLoaded = () => {
    loadControls();
    registerEventHandlers();
};

onLoaded();