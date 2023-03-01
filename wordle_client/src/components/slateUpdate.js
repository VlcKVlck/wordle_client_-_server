import { checkWord } from './checkWord';
import { checkIfLegitWord } from './checkIfLegitWord';

export function slateUpdate(value, context) {
  const {
    lastLetterToDelete,
    setLastLetterToDelete,
    guessedWord,
    setGuessedWord,
    NUMBER_OF_LETTERS_PER_WORD,
    currentAnswers,
    setCurrentAnswers,
    currentLetter,
    setCurrentLetter,
  } = context;

  if (value === 'BACKSPACE') {
    if (
      currentAnswers[currentLetter].letterNum >= 0 &&
      currentAnswers[currentLetter].letterNum <= NUMBER_OF_LETTERS_PER_WORD &&
      currentLetter >= lastLetterToDelete
    ) {
      currentAnswers[currentLetter].value = '';
      currentAnswers[currentLetter].guess = '';
      setCurrentAnswers(currentAnswers.slice());
      if (currentLetter - 1 > 0) {
        setCurrentLetter(currentLetter - 1);
      } else {
        setCurrentLetter(0);
      }
    }
    return;
  }

  //this handles word validation - checks if the word is correct if player reached the last letter, and updates the answer array and re-renders
  // the game otherwise.
  if (currentAnswers[currentLetter].letterNum === NUMBER_OF_LETTERS_PER_WORD - 1) {
    currentAnswers[currentLetter].value = value;
    // checks with a dictionary API if the word entered is a real word.
    checkIfLegitWord(currentAnswers, currentLetter - 4).then((res) => {
      if (res === false) {
        alert('We check your words against a dictionary API.\nThe word you entered is not a real word. Please try again. \n\nIf the problem persistsm please turn off "word validation" to play with any input.');
        //only if the word is a real world, the client will proceed to check with the server if it is the selected word
      } else {
        checkWord(currentAnswers, currentLetter - 4, guessedWord, setGuessedWord, NUMBER_OF_LETTERS_PER_WORD).then((res) => {
          setGuessedWord(res.guessW);
          setCurrentAnswers(res.curAnswer);
        });
        setCurrentLetter(currentLetter + 1);
        setLastLetterToDelete(currentLetter + 2);
      }
    });
  } else {
    currentAnswers[currentLetter].value = value;
    setCurrentLetter(currentLetter + 1);
    setCurrentAnswers(currentAnswers.slice());
  }
}
