import auxiliaryAPI from "./auxiliaryAPI.js";

let temperature = 21;
let mode = "summer";
let level = 0;
let isOn = false;

const dateObj = document.getElementById("date");
const temperatureObj = document.getElementById("temperature");
const levelObj = document.getElementById("level");
const modusObj = document.getElementById("modus");

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("on-off-button").addEventListener("click", turnOnOff);
    document.getElementById("level-button").addEventListener("click", levelChange);
    document.getElementById("mode-button").addEventListener("click", modeChange);
    document.getElementById("plus-button").addEventListener("click", increaseTemperature);
    document.getElementById("minus-button").addEventListener("click", decreaseTemperature);

    updateDisplay();
    updateTime();
    setInterval(updateTime, 1000);
});

function updateTime() {
    const currentDate = new Date();
    dateObj.innerText = currentDate.toLocaleString('de-DE', {timeZone: 'UTC'}) + " - "
        + auxiliaryAPI.getGreetingDependOnTime(currentDate);
}


function turnOnOff() {
    isOn = !isOn;
    updateDisplay();
}

function updateDisplay() {
    if (isOn) {
        temperatureObj.innerText = `Temperature: ${temperature}°C`;
        levelObj.innerText = `Level: ${level}`;
        modusObj.innerText = `Modus: ${mode}`;
    } else {
        temperatureObj.innerText = "";
        levelObj.innerText = "";
        modusObj.innerText = "";
    }
}

function increaseTemperature() {
    temperature++;
    updateDisplay();
}

function decreaseTemperature() {
    temperature--;
    updateDisplay();
}

function levelChange() {
    level = (level + 1) % 4;
    updateDisplay();
}

function modeChange() {
    mode = mode === "summer" ? "winter" : "summer";
    updateDisplay();
}