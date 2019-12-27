function lottery (str) {
    let symbol = "";
    let myObj = {};
    for (let i = 0; i < str.length; i++) {
        if (isNaN(Number((str[i]))) == false) {

            if (!myObj[str[i]]) {
                myObj[str[i]] = 1;
            }
            else if(myObj[str[i]] < 2) {
                continue;
            }
            symbol += Number(str[i]);
        }
    }

    if (symbol == "") {
        return "One more time!";
    } else {
        return symbol;
    }

}
alert (lottery("11тло556566565611"));