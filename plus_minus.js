// The test cases are scaled to six decimal places

arr = [1, 1, 0, -1, -1];
arr2 = [1, 2, 3, -1, -2, -3, 0, 0];

function plusMinus(input) {

    let zeroCounter = 0;
    let negativeCounter = 0;
    let positiveCounter = 0;

    for (let number of input) {
        if (number > 0) {
            positiveCounter++;
        } else if (number < 0) {
            negativeCounter++;
        } else if (number == 0) {
            zeroCounter++;
        }
    }

    let positiveRatio = (positiveCounter / input.length).toFixed(6);
    let negativeRatio = (negativeCounter / input.length).toFixed(6);
    let zeroRatio = (zeroCounter / input.length).toFixed(6);

    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio);
}

console.log(plusMinus([1, 1, 0, -1, -1]));
console.log(plusMinus([1, -2, -7, 9, 1, -8, -5]));