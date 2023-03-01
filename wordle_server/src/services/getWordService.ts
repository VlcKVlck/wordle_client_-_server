import randomWords from 'random-words';

let word = '';

export const getWord = (length: number) => {
  word = '';
  while (word.length != length) {
    word = randomWords({ exactly: 1, maxLength: length })[0];
  }
  console.log('Playing to win with word:', word);
};

export function setNewWord() {
  return word;
}
