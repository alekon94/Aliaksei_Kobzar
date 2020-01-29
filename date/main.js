function getDate () {
    let val = document.querySelector("input").value;
    let date = new Date();
    let now = Date.parse(String(date.getFullYear()) + '-' + (date.getMonth() + 1) + '-' + date.getDate());
    let birthday = Date.parse(val);
    let result = (birthday - now) / (1000 * 60 * 60 * 24);
    document.getElementById("result").innerHTML = "До дня рождения осталось: " + Math.round(result) + " дней";
}
