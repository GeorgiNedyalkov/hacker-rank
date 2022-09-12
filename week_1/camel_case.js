function processData(input) {
  // divide the operation, dataType and words from input

  let operation = input[0]
  let dataType = input[2]
  let words = input.substring(4, input.length)

  let result = []

  if (operation == "S") {
    let resultArr = []

    for (let i = 0; i < words.length; i++) {
      let letter = words[i]

      if (letter == letter.toUpperCase() && i == 0) {
        resultArr.push(letter)
      } else if (letter == letter.toUpperCase()) {
        resultArr.push(" ")
        resultArr.push(letter)
      } else {
        resultArr.push(letter)
      }
    }

    let resultString = resultArr.join("").toLowerCase()

    if (dataType == "M") {
      return resultString.substring(0, resultString.length - 3)
    }

    return resultString
  } else if (operation == "C") {
    let wordsArr = words.split(" ")
    let upperCaseArr = []

    for (let i = 0; i < wordsArr.length; i++) {
      let word = wordsArr[i]
      let firstLetter = word[0].toUpperCase()
      let remainingLetters = word.substring(1, word.length)
      upperCaseArr.push(firstLetter + remainingLetters)
    }

    let result = upperCaseArr.join("")

    if (dataType == "M") {
      let firstLetter = result[0].toLowerCase()
      let remainingLetters = result.substring(1, result.length)

      return firstLetter + remainingLetters + "()"
    } else if (dataType == "C") {
      return result
    } else if (dataType == "V") {
      let firstLetter = result[0].toLowerCase()
      let remainingString = result.substring(1, result.length)
      return firstLetter + remainingString
    }
  }
}

const methodSplitOperation = "S;M;plasticCup()"
const classSplitOperation = "S;C;LargeSoftwareBook"
const variableSplitOperation = "S;V;pictureFrame"

// console.log(processData(sampleSplitOperation))
console.log(processData("S;V;iPad"))
console.log(processData("C;M;mouse pad"))
console.log(processData("C;M:white sheet of paper"))

/*       Sample input                 Sample ouput
    S;M;plasticCup()            -  placstic cup
    S;C;LargeSoftwareBook       -  large software book
    S;V;pictureFrame            -  picture frame
*/
