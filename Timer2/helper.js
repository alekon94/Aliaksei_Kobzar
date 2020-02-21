import {htmlElements, links, tabs} from "./tabs.js";
let myInterval;
function Select () {}
Select.prototype.selectClock = function () {
    links.forEach(element => element.classList.remove("selected"));
    htmlElements.clock.classList.add("selected");

    tabs.forEach(element => element.classList.add("hidden"));
    htmlElements.output.classList.remove("hidden");
    clearInterval(myInterval);
}

Select.prototype.selectTimer = function () {
    links.forEach(element => element.classList.remove("selected"));
    htmlElements.timer.classList.add("selected");

    tabs.forEach(element => element.classList.add("hidden"));
    htmlElements.output.classList.remove("hidden");
    clearInterval(myInterval);
}
export { Select };