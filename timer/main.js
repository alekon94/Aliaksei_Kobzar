let timerId;

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
    htmlElements.startBtn.addEventListener('click', activeStopwatch);
}

function selectStopwatch() {
    htmlElements.timer.classList.remove("selected");
    htmlElements.stopwatch.classList.add("selected");
    htmlElements.clock.classList.remove("selected");
    htmlElements.startBtn.classList.remove('hidden');

    htmlElements.startBtn.classList.remove('hidden');
    htmlElements.stopBtn.classList.remove('hidden');
    htmlElements.resetBtn.classList.remove('hidden');
    htmlElements.output.classList.add("hidden");
    htmlElements.outputStopwatch.classList.remove("hidden");
    htmlElements.outputStopwatch.innerHTML = '0:00:00';
}

function selectClock() {
    htmlElements.timer.classList.remove("selected");
    htmlElements.stopwatch.classList.remove("selected");
    htmlElements.clock.classList.add("selected");

    htmlElements.startBtn.classList.add('hidden');
    htmlElements.stopBtn.classList.add('hidden');
    htmlElements.resetBtn.classList.add('hidden');
    htmlElements.output.classList.remove("hidden");
    htmlElements.outputStopwatch.classList.add("hidden");
    clearInterval(myInterval);
}

function selectTimer() {
    htmlElements.timer.classList.add("selected");
    htmlElements.stopwatch.classList.remove("selected");
    htmlElements.clock.classList.remove("selected");

    htmlElements.startBtn.classList.add('hidden');
    htmlElements.stopBtn.classList.add('hidden');
    htmlElements.resetBtn.classList.add('hidden');

    htmlElements.output.classList.remove("hidden");
    htmlElements.outputStopwatch.classList.add("hidden");
    clearInterval(myInterval);
}


function activeStopwatch () {
    const startTime = new Date().getTime();
    myInterval = setInterval(Timer, 1);
    const outputStopwatch = htmlElements.outputStopwatch;
    outputStopwatch.innerHTML = '';
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
    }
    }

function resetStopwatch() {
    clearInterval(myInterval);
    selectStopwatch();
}

function stopStopwatch() {
    clearInterval(myInterval);
}
