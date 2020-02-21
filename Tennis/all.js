class CALENDAR {
    constructor() {
        this.elements = {
            arrow: document.querySelector("next-year")
        };
        this.events();
    }
    events() {
        this.elements.arrow.addEventListener('click', e=> {
            alert ('hi');
        });
    }

}
(function () {
    new CALENDAR()
})();
