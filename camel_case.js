function processData(input) {
  let data = input.split(";");
  let operation = data[0];
  let dataType = data[1]
  let words = data[2];

  let arr = words.split(' ');
  let result = [];

  if (operation == "C") {
    let firstWord = arr[0];   
    result.push(firstWord);
   
    for (let i = 1; i < arr.length; i++) {
      let firstLetter = arr[i][0].toUpperCase();
      let resultWord = firstLetter + arr[i].substring(1, arr[i].length);
      result.push(resultWord)
    }

    if (dataType == "M") {
      result.push("()");
    } else if (dataType == "C") {
      let firstLetter = result[0][0].toUpperCase();
      result[0] = firstLetter + result[0].substring(1, result[0].length);
    }     
    console.log(result.join(""));

  } else if (operation == "S") {
        
    // split
    let upperCaseIndexes = [];   

    // find indexes of capital letter words
    for (let index in words) {
      if (words[index] == words[index].toUpperCase()) {       
        upperCaseIndexes.push(index);
      }
    }
    
    if (dataType == "M") {
      
    }

    if (upperCaseIndexes.length == 1) {
      let firstWord = words.slice(0, upperCaseIndexes[0]);
      let secondWord = words.slice(upperCaseIndexes[0]);
      result.push(firstWord);
      result.push(secondWord.toLowerCase());
    }   

   

    console.log(result.join(" "));

  }  

}

processData("S;M;plasticCup()");       // output: plastic cup
processData("S;C;LargeSoftwareBook");  // output: large software book
processData("S;V;pictureFrame");        // output: picture frame
processData("S;V;iPad");               // output: iPad

// processData("C;M;mouse pad");
// processData("C;V;mobile phone");
// processData("C;M;white sheet of paper")
// processData("C;C;code swarm");
// processData("C;C;coffee machine")
