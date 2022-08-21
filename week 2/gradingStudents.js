function gradingStudents(grades) {
  let result = [];
  let diff = 0;

  for (let grade of grades) {
    const diff = 5 - (grade % 5);

    if (grade >= 38 && diff < 3) {
      result.push(grade + diff);
    } else {
      result.push(grade);
    }
  }
  return;
}

gradingStudents([73, 67, 38, 33]);
