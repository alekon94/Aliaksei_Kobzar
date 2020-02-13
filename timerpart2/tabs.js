import { clockStart } from "./clock.js";
import { selectStopwatch, Timer } from "./stopwatch.js";

let timerId;
export let myInterval;
export let startTime;
export let outputStopwatch;



export const htmlElements = {};
htmlElements.links = document.querySelector('links');
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.stop');
htmlElements.resetBtn = document.querySelector('.container .buttons button.reset');
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
htmlElements.timer = document.querySelector('.container .links .timer');
htmlElements.output = document.querySelector('.container .output');
htmlElements.outputStopwatch = document.querySelector('.container .outputStopwatch');
export const tabs = [htmlElements.startBtn, htmlElements.stopBtn, htmlElements.resetBtn,
    htmlElements.outputStopwatch, htmlElements.output];

export const links = [htmlElements.timer, htmlElements.stopwatch, htmlElements.clock];

clockStart(timerId);
initEventList();
console.log(htmlElements);

function initEventList(){
    htmlElements.timer.addEventListener('click', selectTimer);
    htmlElements.stopwatch.addEventListener('click', selectStopwatch);
    htmlElements.clock.addEventListener('click',selectClock);
    htmlElements.stopBtn.addEventListener('click', stopStopwatch);
    htmlElements.resetBtn.addEventListener('click', resetStopwatch);
    htmlElements.startBtn.addEventListener('click', startStopwatch);
}



function selectClock() {
    links.forEach(element => element.classList.remove("selected"));
    htmlElements.clock.classList.add("selected");

    tabs.forEach(element => element.classList.add("hidden"));
    htmlElements.output.classList.remove("hidden");
    clearInterval(myInterval);
}

function selectTimer() {
    links.forEach(element => element.classList.remove("selected"));
    htmlElements.timer.classList.add("selected");

    tabs.forEach(element => element.classList.add("hidden"));
    htmlElements.output.classList.remove("hidden");
    clearInterval(myInterval);
}

function startStopwatch () {
    startTime = new Date().getTime();
    outputStopwatch = htmlElements.outputStopwatch;
    myInterval = setInterval(Timer, 1);
    outputStopwatch.innerHTML = '';
}


function resetStopwatch() {
    clearInterval(myInterval);
    selectStopwatch();
}

function stopStopwatch() {
    clearInterval(myInterval);
}

