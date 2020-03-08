tableCreate();
click();
buttonCreate();

let change = document.querySelector('button');
change.addEventListener('click', changeColorsClicked);


function tableCreate() {
    let body = document.getElementsByTagName("body")[0];
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");
    for (let j = 0; j < 8; j++) {

        let row = document.createElement("tr");

        for (let i = 0; i < 8; i++) {

            let cell = document.createElement("td");
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("id", "fields");
    tbl.classList.add('inpcol');

}

function buttonCreate() {
    let body = document.getElementsByTagName("body")[0];
    let but = document.createElement("button");
    body.appendChild(but);
    but.innerHTML = "change colors";
}

function click() {
    let table = document.getElementById('fields');

    let selectedTd;

    table.onmousedown = function (event) {
        let target = event.target;

        while (target != this) {
            if (target.tagName == 'TD') {
                highlight(target);
                return;
            }
            target = target.parentNode;
        }
    }

    function highlight(node) {

        selectedTd = node;
        selectedTd.classList.add('col');
    }
}

function changeColorsClicked() {

    let tbl = document.querySelector('table');
    let pickedcell = tbl.querySelectorAll('td');

    tbl.className = 'col';
    for (let elem of pickedcell) {

        if (elem.className == 'col') {
            elem.className = 'reversecol';
        }

    }
}
    