function tableCreate() {
    //body reference
    var body = document.getElementsByTagName("body")[0];


    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");


    for (var j = 0; j <= 8; j++) {

        var row = document.createElement("tr");

        for (var i = 0; i < 8; i++) {

            var cell = document.createElement("td");



            row.appendChild(cell);
        }


        tblBody.appendChild(row);
    }

    // append the <tbody> inside the <table>
    tbl.appendChild(tblBody);
    // put <table> in the <body>
    body.appendChild(tbl);
    // tbl border attribute to
    tbl.setAttribute("border", "2");
     tbl.offsetWidth
}
tableCreate();