function treeSum (arr) {
    let sum = 0;
    for (let element of arr){
        if (Array.isArray(element) == true) {
            element = treeSum(element);
        }
        sum += element;
    }
    return sum;
}
alert (treeSum([3, 6, [3,[3,4,[],5],4,6]]));//34