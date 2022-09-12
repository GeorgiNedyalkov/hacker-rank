function countingValleys(steps, path) {
  let countValleys = 0;
  let seaLevel = 0;
  console.log(path);
  for (let i = 0; i < steps; i++) {
    let currentStep = path[i];

    if (currentStep == "D") {
      seaLevel--;
    } else {
      seaLevel++;
    }
  }
}
countingValleys(12, "DDUUDDUDUUUD");
// console.log("First valley");
// countingValleys(8, "UDDDUDUU");
// console.log("Second valley");
// countingValleys(8, "DDUUUUDD");
