let timerId;
let myInterval;
let startTime;
let outputStopwatch;
clockStart();
function clockStart() {
    timerId = setInterval(onIntervalNextTick, 1);

}

function onIntervalNextTick() {
    const clock = htmlElements.output;
    const date = new Date(); // (*)

    let hours = date.getHours();
    if (hours < 10) hours = `0${hours}`;


    let minutes = date.getMinutes();
    if (minutes < 10) minutes = `0${minutes}`;


    let seconds = date.getSeconds();
    if (seconds < 10) seconds = `0${seconds}`;
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;

}

const htmlElements = {};
htmlElements.links = document.querySelector('links');
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.stop');
htmlElements.resetBtn = document.querySelector('.container .buttons button.reset');
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
htmlElements.timer = document.querySelector('.container .links .timer');
htmlElements.output = document.querySelector('.container .output');
htmlElements.outputStopwatch = document.querySelector('.container .outputStopwatch');


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
const tabs = [htmlElements.startBtn, htmlElements.stopBtn, htmlElements.resetBtn,
    htmlElements.outputStopwatch, htmlElements.output];

const links = [htmlElements.timer, htmlElements.stopwatch, htmlElements.clock];

function selectStopwatch() {

    links.forEach(element => element.classList.remove("selected"));
    htmlElements.stopwatch.classList.add("selected");
    tabs.forEach(element => element.classList.remove("hidden"));
    htmlElements.output.classList.add("hidden");
    htmlElements.outputStopwatch.innerHTML = '0:00:00';
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
function Timer() {
    const difference = (new Date().getTime() - startTime) / 1000;
    let seconds = parseInt(difference % 60);
    let minutes = parseInt((difference / 60) % 60);
    const hours = parseInt((difference / 360) % 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    outputStopwatch.innerHTML = `${hours}:${minutes}:${seconds}`;
    console.log(outputStopwatch);
}

function resetStopwatch() {
    clearInterval(myInterval);
    selectStopwatch();
}

function stopStopwatch() {
    clearInterval(myInterval);
}
