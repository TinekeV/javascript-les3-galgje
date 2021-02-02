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
  const wordInLetterArray = word.split('');

  for (let index = 0; index < wordInLetterArray.length; index++) {
    const letterInWord = wordInLetterArray[index];
    const guessedGameWon = guesses.includes(letterInWord);

    if (!guessedGameWon) {
      return false
    }
  }

  return true

}

function isGameLost(word, guesses) {
  let count = 0
  for (let i = 0; i < guesses.length; i++) {
    const guessedLetter = guesses[i];
    const totalGuesses = word.includes(guessedLetter)

    if (!totalGuesses) {
      count++;
      //console.log('LOOPT DE COUNTER?', count)
    }
  }

  if (count >= 7) {
    return true
  }
  if (count < 7) {
    return false
  }
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};