Stopwatch();
const htmlElements = {
    output: document.querySelector('.container [data-mode="stopwatch"] .output'),
    buttons: document.querySelectorAll('.container .tabs [data-mode="stopwatch"] .buttons button'),
    startButton: document.querySelector('.container .tabs [data-mode="stopwatch"] .buttons .start'),
    stopButton: document.querySelector('.container .tabs [data-mode="stopwatch"] .buttons .stop'),
    resetButton: document.querySelector('.container .tabs [data-mode="stopwatch"] .buttons .reset')
};

function Stopwatch() {}

Stopwatch.prototype.init = function() {
    htmlElements.startButton.addEventListener('click', onStartButtonClick);
    htmlElements.stopButton.addEventListener('click', onStopButtonClick);
    htmlElements.resetButton.addEventListener('click', onResetButtonClick);
    alert("hi");
};

let startTime;
let myInterval;
let lastDifferenceSeconds = 0;
let differenceSeconds = 0;

// htmlElements.startButton.disabled = true;
// htmlElements.stopButton.disabled = false;
// htmlElements.resetButton.disabled = false;
//
// htmlElements.startButton.setAttribute('disabled', 'disabled');
// htmlElements.stopButton.removeAttribute('disabled');
// htmlElements.resetButton.removeAttribute('disabled');

function onStartButtonClick() {
    ClassHelper.removeClass('disabled', htmlElements.buttons);
    ClassHelper.addClass('disabled', [htmlElements.startButton]);
    myInterval = setInterval(onIntervalTick, 1000);
    startTime = new Date().getTime();
}

function onStopButtonClick() {
    ClassHelper.removeClass('disabled', htmlElements.buttons);
    ClassHelper.addClass('disabled', [htmlElements.stopButton]);
    clearInterval(myInterval);
    lastDifferenceSeconds = differenceSeconds;
}

function onResetButtonClick() {
    ClassHelper.removeClass('disabled', htmlElements.buttons);
    ClassHelper.addClass('disabled', [htmlElements.resetButton]);
    lastDifferenceSeconds = 0;
    startTime = new Date().getTime();
    clearInterval(myInterval);
    onIntervalTick();
}

function onIntervalTick() {
    const differenceMilliseconds = new Date().getTime() - startTime;
    differenceSeconds = differenceMilliseconds / 1000 + lastDifferenceSeconds;
    let seconds = parseInt(differenceSeconds % 60);
    let minutes = parseInt((differenceSeconds / 60) % 60);
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    htmlElements.output.innerText = `00:${minutes}:${seconds}`;
}
function addClass(className, elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className);
    }
}

function removeClass(className, elements) {
    elements.forEach(function(element) {
        element.classList.remove(className);
    });
}
function ClassHelper() {}
ClassHelper.addClass = addClass;
ClassHelper.removeClass = removeClass;
