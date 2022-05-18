function plusNegative(input) {
    let arrayLength = input.shift();
    let arr = input.shift();

    let positiveNumbers = 0;
    let negativeNumbers = 0;
    let zeroNumbers = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) positiveNumbers++;
        else if (arr[i] < 0) negativeNumbers++;
        else zeroNumbers++;
    }

    function calcRatio(countNumbers, quantity) {
        return (countNumbers / quantity).toFixed(4);
    }

    let positiveNumsRatio = calcRatio(positiveNumbers, arrayLength)
    let negativeNumsRatio = calcRatio(negativeNumbers, arrayLength)
    let zeroNumbersRatio = calcRatio(zeroNumbers, arrayLength)

    return `${positiveNumsRatio}\n${negativeNumsRatio}\n${zeroNumbersRatio}`;
}

console.log(plusNegative([5, [1, 2, -1, -2, -4, 0]]));

console.log("Second solution")


function plusMinus(arr) {
    let arrLength = arr.shift();
    let arrayNums = arr.shift();

    let positiveNumbers = 0;
    let negativeNumbers = 0;
    let zeroNumbers = 0;

    for (let i = 0; i < arrayNums.length; i++) {
        if (arrayNums[i] > 0) positiveNumbers++;
        else if (arrayNums[i] < 0) negativeNumbers++;
        else zeroNumbers++;
    }

    let positiveNumsRatio = calcRatio(positiveNumbers, arrLength);
    let negativeNumsRatio = calcRatio(negativeNumbers, arrLength);
    let zeroNumbersRatio = calcRatio(zeroNumbers, arrLength);

    return `${positiveNumsRatio}\n${negativeNumsRatio}\n${zeroNumbersRatio}`;
}

function calcRatio(countNumbers, quantity) {
    return (countNumbers / quantity).toFixed(4);
}
console.log(plusMinus([8, [1, 2, 3, -1, -2, -3, 0, 0]]))
