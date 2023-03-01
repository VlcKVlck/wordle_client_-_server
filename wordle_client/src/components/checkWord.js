import { sendWordToServer } from '../server-requests/server-requests-words';

export async function checkWord(currentAnswers, startIndex, guessedWord, setGuessedWord, NUMBER_OF_LETTERS_PER_WORD) {
  const res = await sendWordToServer(currentAnswers, startIndex, guessedWord, NUMBER_OF_LETTERS_PER_WORD);
  const array = await res.json();
  currentAnswers = array.currentAnswers;
  guessedWord = array.guessedWord;

  return { curAnswer: currentAnswers, guessW: guessedWord };
}
