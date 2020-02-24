const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const localStorageName = 'added-clients';
class CALENDAR {
constructor(options) {
    this.options = options;
     this.elements = {
         days: this.getFirstElementInsideByClassName('calendar-days'),
         week: this.getFirstElementInsideByClassName('calendar-week'),
         month: this.getFirstElementInsideByClassName('calendar-month'),
         year: this.getFirstElementInsideByClassName('calendar-current-year'),
         currentDay: this.getFirstElementInsideByClassName('calendar-left-side-day'),
         currentWeekDay: this.getFirstElementInsideByClassName('calendar-left-side-day-of-week'),
         prevYear: this.getFirstElementInsideByClassName('calendar-change-year-slider-prev'),
         nextYear: this.getFirstElementInsideByClassName('calendar-change-year-slider-next'),
     };
     this.date = +new Date();
     this.options.maxDays = 37;
     this.init();
}
init (){
    if (!this.options.id) return false;
    this.activeList();
    this.createAll();
}

createAll() {
    this.createWeekDays();
    this.createMonths();
    this.createDays();
}
drawDays() {
    let calendar = this.getCalendar();
}

createWeekDays() {
    let weekTemplate = "";
    let a = document.querySelector("calendar-week");
    WEEK_DAYS.forEach (week => {
        weekTemplate += `<li>${week}</li>`
    });

    this.elements.week.innerHTML = weekTemplate;
}

createMonths() {
    let monthsList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let monthTemplate = "";
    let calendar = this.getCalendar();
    monthsList.forEach((month, idx) => {
        monthTemplate += `<li class="${idx === calendar.current.month ? 'active': ''}" data-month="${idx}">${month}</li>`
    });

    this.elements.month.innerHTML = monthTemplate;

}

getCalendar(){
    let time = new Date(this.date);
    return {
        current: {
            days: this.countOfDaysInMonth(time),
            startWeek: this.getStartedDayOfWeekByTime(time),
            day: time.getDate(),
            week: time.getDay(),
            month: time.getMonth(),
            year: time.getFullYear,
            formatted: this.getFormattedDate(time),
            tm: +time,
        },
        pMonth: new Date(time.getFullYear(), time.getMonth() - 1,1),
        nMonth: new Date(time.getFullYear(), time.getMonth() + 1,1),
        pYear: new Date(new Date(time).getFullYear() - 1, 0, 1),
        nYear: new Date(new Date(time).getFullYear() + 1, 0, 1)

    }
}

getStartedDayOfWeekByTime(time) {
    let date = this.getMonthAndYear(time);
    return new Date(date.year, date.month, 1).getDay();
}

countOfDaysInMonth(time){
    let date = this.getMonthAndYear(time);
    return new Date(date.year, date.month + 1, 0).getDate();
}

getMonthAndYear(time) {
    let date = new Date(time);
    return {
        year: date.getFullYear(),
        month: date.getMonth(),
    }
}

getFormattedDate(date) {
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
}

activeList() {
    this.elements.prevYear.addEventListener('click', e => {

    });
    this.elements.nextYear.addEventListener('click', e => {

    });
}

getFirstElementInsideByClassName(className){
    return document.getElementById(this.options.id).getElementsByClassName(className)[0];
}
}

(function () {
new CALENDAR({
    id: "calendar"
})
})();