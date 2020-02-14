import { htmlElements } from "./tabs.js";

let timerId;

function Clockstart () {}

Clockstart.prototype.init = function () {
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
export { Clockstart };