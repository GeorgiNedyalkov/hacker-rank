function gradingStudents(grades) {
  let roundedGrades = [];

  for (let grade of grades) {
    if (grade < 38) {
      roundedGrades.push(grade);
    } else {
      let difference = 5 - (grade % 5);

      if (difference < 3) {
        roundedGrades.push(grade + difference);
      } else {
        roundedGrades.push(grade);
      }
    }
  }

  return roundedGrades;
}
console.log(gradingStudents([73, 67, 38, 33]));
