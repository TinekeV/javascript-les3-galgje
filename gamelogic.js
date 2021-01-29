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
  // WRITE ME
}

function isGameLost(word, guesses) {
  // WRITE ME
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
