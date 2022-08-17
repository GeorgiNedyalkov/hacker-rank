function marsExploration(s) {
  let radiatedLetters = 0;
  let messages = [];
  let numberOfMessages = s.length / 3;
  let messageArr = s.split("");

  while (numberOfMessages > 0) {
    messages.push(messageArr.splice(0, 3));
    numberOfMessages--;
  }

  for (let message of messages) {
    let stringMsg = message.join("");

    if (stringMsg[0] !== "S") {
      radiatedLetters++;
    }

    if (stringMsg[1] !== "O") {
      radiatedLetters++;
    }

    if (stringMsg[2] !== "S") {
      radiatedLetters++;
    }
  }

  return radiatedLetters;
}

console.log(
  marsExploration(
    "SOSOSOSOSDSDSKWOSDOSDOASDOASDFAFJDFDOSOSOWNSOSOSNDSKDDOSOSOSJDSDSOOSOSDSDOSASSOASDSAOSOSODSDSOASDWS"
  )
);

console.log(marsExploration("SOSSPSSQSSOR"));
