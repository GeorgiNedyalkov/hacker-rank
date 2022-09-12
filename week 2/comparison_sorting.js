function comparisonSorting(arr) {
  let frequencyArr = new Array(100).fill(0);

  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    frequencyArr[currentElement]++;
  }

  return frequencyArr;
}

comparisonSorting([1, 1, 3, 2, 1]);
