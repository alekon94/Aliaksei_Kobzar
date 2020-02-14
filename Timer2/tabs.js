import { Clockstart } from "./clock.js";
import { Stopwatch } from "./stopwatch.js";
import { Select} from "./helper.js";

export const htmlElements = {};

const clock = new Clockstart();
const stopwatch = new Stopwatch();
const select = new Select();

htmlElements.clock = document.querySelector('a[data-mode="clock"]');
htmlElements.stopwatch = document.querySelector('a[data-mode=stopwatch]');
htmlElements.timer = document.querySelector('a[data-mode=timer]');


htmlElements.links = document.querySelector('links');
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.stop');
htmlElements.resetBtn = document.querySelector('.container .buttons button.reset');
htmlElements.output = document.querySelector('.container .output');
htmlElements.outputStopwatch = document.querySelector('.container .outputStopwatch');

export const tabs = [htmlElements.startBtn, htmlElements.stopBtn, htmlElements.resetBtn,
    htmlElements.outputStopwatch, htmlElements.output];

export const links = [htmlElements.timer, htmlElements.stopwatch, htmlElements.clock];


console.log(htmlElements);

function initEventList(){
    htmlElements.timer.addEventListener('click', select.selectTimer);
    htmlElements.stopwatch.addEventListener('click', stopwatch.init);
    htmlElements.clock.addEventListener('click',select.selectClock);
    htmlElements.stopBtn.addEventListener('click', stopwatch.stopStopwatch);
    htmlElements.resetBtn.addEventListener('click', stopwatch.resetStopwatch);
    htmlElements.startBtn.addEventListener('click', stopwatch.startStopwatch);
}

clock.init();
initEventList();

