function sumOfElements(arr) {
let val = +prompt ("Enter value:");
for (let elem of arr){
    for(let newelem of arr) {
        if (val == elem + newelem){
            if (arr[elem] - arr[newelem] == 0){
                continue;
            }
            return true;
        }
    }
}
}
    alert (sumOfElements([1,5,3,4,5,99]));