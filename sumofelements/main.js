function sumOfElements(arr) {
    let val = +prompt("Enter value",'');
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === val && i !== j) {
                return true;
            };
        };
    };
    return false;
};
    alert (sumOfElements([1,1,5,3,4,5,99]));