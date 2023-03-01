export interface CurrentGameStatus {
  currentAnswers: Array<{
    rowNum: number;
    letterNum: number;
    value: string;
    guess: string;
  }>;
  startIndex: number;
  guessedWord: boolean[];
  NUMBER_OF_LETTERS_PER_WORD: number;
}

export function gameService(currentGameStatus: CurrentGameStatus, currentWord: string): object {
  if (currentGameStatus.currentAnswers.length < 1) throw new Error('Missing information to check word');
  const { currentAnswers, startIndex, guessedWord, NUMBER_OF_LETTERS_PER_WORD } = currentGameStatus;
  for (let i = 0; i < NUMBER_OF_LETTERS_PER_WORD; i++) {
    if (currentWord.includes(currentAnswers[i + startIndex].value.toLowerCase())) {
      if (currentAnswers[i + startIndex].value.toLowerCase() === currentWord[currentAnswers[i].letterNum]) {
        currentAnswers[i + startIndex].guess = 'green';
        guessedWord[i] = true;
      } else {
        currentAnswers[i + startIndex].guess = 'orange';
      }
    } else {
      currentAnswers[i + startIndex].guess = 'grey';
    }
  }
  return { currentAnswers, guessedWord };
}
