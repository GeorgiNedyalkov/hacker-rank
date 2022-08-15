function findUniqueElement(arr) {
    // input: a = [1,2,3,4,3,2,1]
    // output: the unique element - 4
    return arr.sort().reduce((x,y) => x^y);
}

console.log(findUniqueElement([1,2,3,4,3,2,1]));
