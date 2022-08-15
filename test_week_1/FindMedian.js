function findMedianInOddsList(arr) {
  arr.sort();
  const medianIndex = Math.floor(arr.length / 2);

  const nums = [...arr];

  console.log(nums[medianIndex]);
}

findMedianInOddsList([0, 1, 2, 13, 6, 5, 3]);
