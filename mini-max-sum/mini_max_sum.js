function miniMax(arr) {
    // sort the array in ascending number
    arr.sort((a, b) => a - b);

    let maxSum = 0;
    let minSum = 0;

    // remove the last element to find the min sum
    let lastElement = arr.pop();

    for (let num of arr) {
        minSum += num;
    }

    // add the last element to find the max sum
    arr.push(lastElement)

    for (let i = 1; i < arr.length; i++) {
        maxSum += arr[i];
    }

    // print result
    console.log(minSum + " " + maxSum);
}

miniMax([1, 3, 5, 7, 9]);
miniMax([7, 69, 2, 221, 8974]);
