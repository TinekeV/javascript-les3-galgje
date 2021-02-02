const { keyIn } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost } = require("./gamelogic");

function game(word, guesses) {
  console.log("Dit heb je tot nu toe geraden: ", guesses);

  // laat zien wat er al geraden is:
  console.log(displayWordSoFar(word,guesses));

  const letter = keyIn("Raad een letter: ",
      {limit: 'abcdefghijklmnopqrstuvwxyz', caseSensitive: true});
  // maak het onmogelijk om meer dan 1 letter tegelijk of hoofdletters in te voeren


  // voeg de geraden letter toe aan de array met guesses
  guesses.push(letter);

  // GEWONNEN
  const winner = isGameWon(word, guesses);
    if (winner) {
      console.log('CONGRATS, YOU WON!');
      return // stopt programma
  }
  // VERLOREN
  const loser = isGameLost(word, guesses);
    if (loser) {
      console.log('YOU LOST, SORRY!');
      return // stopt programma
    }

  // volgende ronde! we roepen game nog een keer aan
  game(word, guesses);
}


console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);
