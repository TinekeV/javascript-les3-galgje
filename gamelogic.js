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
  // DOEL FUNCTIE: functie geef TRUE ('VERLOREN) als gebruiker 7 of meer letters verkeerd invult
  // DUS if statements voor aantal/lengte guesses
  // Eentje voor 7 of meer: aantal verkeerd geraden letters <= 7
  // Eentje voor 7 of minder: aantal verkeerd geraden letters >= 7

let wrongGuesses = guesses.length;
  if (wrongGuesses >= 7) {
    return true
  }
  if (wrongGuesses <= 7) {
    return false
  }
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
