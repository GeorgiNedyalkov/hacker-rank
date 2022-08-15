function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz(15);

function findMedian(arr) {
  const mid = Math.floor(arr.length / 2);
  arr.sort();

  console.log(mid);
  console.log(arr);
}

findMedian([0, 1, 2, 4, 6, 5, 3]);
