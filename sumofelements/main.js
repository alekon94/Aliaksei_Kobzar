function sumOfElements(arr) {
let val = +prompt ("Enter value:");
for (let elem of arr){
    for(let newelem of arr) {
        if (val == elem + newelem && arr[elem]!= arr[newelem]){
            return true;
        }
    }
}
}
    alert (sumOfElements([1,5,3,4,5,99]));