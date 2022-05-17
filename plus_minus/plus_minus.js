function plusMinusRatios(arr) {
    let positiveNumsCount = 0;
    let negativeNumsCount = 0;
    let zerosCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveNumsCount++;
        } else if (arr[i] < 0) {
            negativeNumsCount++;
        } else {
            zerosCount++;
        }
    }

    let positiveRatio = positiveNumsCount / arr.length;
    let negativeRatio = negativeNumsCount / arr.length;
    let zeroRatio = zerosCount / arr.length;

    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}

plusMinusRatios([-4, 3, -9, 0, 4, 1])


function plusMinus(input) {
    let arrayLength = input[0];
    let arr = input[1];

    let positiveNumsCount = 0;
    let negativeNumsCount = 0;
    let zerosCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveNumsCount++;
        } else if (arr[i] < 0) {
            negativeNumsCount++;
        } else {
            zerosCount++;
        }
    }

    console.log(positiveNumsCount)
    console.log(negativeNumsCount)
    console.log(zerosCount)
}

plusMinus(6, [-4, 3, -9, 0, 4, 1])



