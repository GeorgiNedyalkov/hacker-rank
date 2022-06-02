function breakingRecords(scores) {

    let minScore = scores[0];
    let maxScore = scores[0];

    let countMin = 0;
    let countMax = 0;

    for (const score of scores) {
        if (score > maxScore) {
            maxScore = score;
            countMax++;
        }

        if (score < minScore) {
            minScore = score;
            countMin++;
        }
    }

    let result = [countMax, countMin];

    return result;
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));

