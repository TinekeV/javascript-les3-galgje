function displayWordSoFar(word, guesses) {
  const letterArray = word.split('');

  let output = '';
  for (let index = 0; index < letterArray.length; index++) {
    const letterInWord = letterArray[index];
    const letterGuessed = guesses.includes(letterInWord);

    if (!letterGuessed) {
      output = output + '_ ';
    }

    if (letterGuessed) {
      output = output + letterInWord + ' ';
    }
  }
    return output
}


function isGameWon(word, guesses) {
  const letterArray = word.split('');

  for (let index = 0; index < letterArray.length; index++) {
    const letterInWord = letterArray[index];
    const letterGuessed = guesses.includes(letterInWord);

    if (!letterGuessed) {
      return false;
    }

    if (letterGuessed) {
      return true;
    }
  }

}

function isGameLost(word, guesses) {
  // DOEL FUNCTIE: "isGameLost should return true if you've guessed 7 wrong letters or more"
  // DOEL FUNCTIE: functie laat true returnen als speler 7 of meer letters verkeerd heeft
  // DUS if statements
  // Eentje voor 7 of meer: guesses <= 7
  // Eentje voor 7 of minder: guesses >= 7

  const letterArray = word.split('');

  for (let index = 0; index < letterArray.length; index++) {
    const letterInWord = letterArray[index];
    const letterGuessed = guesses.includes(letterInWord);

    if (letterGuessed.length >= 7) {
      return false;
    }

    if (letterGuessed.length <= 7) {
      return true;
    }
  }

}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
