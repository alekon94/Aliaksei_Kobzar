function testPhone(phoneInput){
    let re = /^\d{3}[-]\d{3}[-]\d{4}$/i;
    let OK = re.exec(phoneInput.value);
    if (!OK)
        alert("Incorrect number!");
    else
        alert("Your phone number is " + OK[0]);
}
// /\(?\d{3}\)?([-\/\.])\d{3}\1\d{4}/хъ
function testEmail(emailInput){
    let re = /[-.\w]+@([\w-]+\.)+[\w-]+/gi;
    let OK = re.exec(emailInput.value);
    if (!OK)
        alert("Incorrect email!");
    else
        alert("Your email is " + OK[0]);
}

function testName(nameInput){
    let re = /[A-Z]+[a-z]{1,}/;
    let OK = re.exec(nameInput.value);
    if (!OK)
        alert("Wrong name!");
    else
        alert("Your name is " + OK[0]);
}