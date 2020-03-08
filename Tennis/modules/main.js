import {Events, localStorageName} from "./events.js";

//localStorage.clear();
class MAIN extends Events {
    init() {

        this.eventsTrigger();
        this.drawAll();
    }

    drawAll() {
        this.drawWeekDays();
        this.drawMonths();
        this.drawDays();
        this.drawYearAndCurrentDay();
        this.drawEvents();

    }
}

let project = new MAIN({id: "calendar"});
project.init();
