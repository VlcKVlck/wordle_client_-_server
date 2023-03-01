const endpoint = 'http://localhost:3333';

export async function selectWord(length) {
  return await fetch(`${endpoint}/generateWord/${length}`);
}

export async function sendWordToServer(currentAnswers, startIndex, guessedWord, NUMBER_OF_LETTERS_PER_WORD) {
  const message = {
    currentAnswers: currentAnswers,
    startIndex: startIndex,
    guessedWord: guessedWord,
    NUMBER_OF_LETTERS_PER_WORD: NUMBER_OF_LETTERS_PER_WORD,
  };

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
  };

  return await fetch(`${endpoint}/checkWord`, requestOptions);
}
