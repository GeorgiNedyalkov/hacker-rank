function pangram(str) {
  // create a Set to collect all the unique letters
  let alphabetSet = new Set();
  // go through each letter
  for (let i = 0; i < str.length; i++) {
    // skip spaces
    if (str[i] == " ") {
      continue;
    }
    // add letter to the Set
    alphabetSet.add(str[i].toLowerCase());
  }

  if (alphabetSet.size === 26) {
    console.log("pangram");
  } else {
    console.log("not pangram");
  }
}

pangram("The quick brown fox jumps over the lazy dog");
pangram("We promptly judged antique ivory buckles for the next prize");
pangram("We promptly judged antique ivory buckles for the prize");
