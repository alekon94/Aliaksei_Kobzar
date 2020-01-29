function getDate () {
    let val = document.querySelector("input").value;
    let date = new Date();
    let now = Date.parse(String(date.getFullYear()) + '-' + (date.getMonth() + 1) + '-' + date.getDate());
    let birthday = Date.parse(val);
    let result = (birthday - now) / (1000 * 60 * 60 * 24);
    if (val === '') {
        document.getElementById("result").innerHTML = "Вы ничего не ввели. Попробуйте еще раз";
    } else {
        if (isNaN(result) == true) {
            document.getElementById("result").innerHTML = "Дата введена неверно. Попробуйте еще раз";
        }  else {
            document.getElementById("result").innerHTML = "До дня рождения осталось: " + Math.round(result) + " дней";
        }
    }

}
