import { htmlElements } from "./tabs.js";
import {links, tabs} from "./tabs.js";
import {outputStopwatch, startTime} from "./tabs.js";

function selectStopwatch() {

    links.forEach(element => element.classList.remove("selected"));
    htmlElements.stopwatch.classList.add("selected");
    tabs.forEach(element => element.classList.remove("hidden"));
    htmlElements.output.classList.add("hidden");
    htmlElements.outputStopwatch.innerHTML = '0:00:00';
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
export { selectStopwatch, Timer };