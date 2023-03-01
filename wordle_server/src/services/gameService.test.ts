import { gameService } from './gameService';
import './getWordService';
import { CurrentGameStatus } from './gameService';

describe('game service', () => {
  const inputTrue: CurrentGameStatus = {
    currentAnswers: [
      { rowNum: 0, letterNum: 0, value: 'H', guess: '' },
      { rowNum: 0, letterNum: 1, value: 'E', guess: '' },
      { rowNum: 0, letterNum: 2, value: 'L', guess: '' },
      { rowNum: 0, letterNum: 3, value: 'L', guess: '' },
      { rowNum: 0, letterNum: 4, value: 'O', guess: '' },
    ],
    startIndex: 0,
    guessedWord: [false, false, false, false, false],
    NUMBER_OF_LETTERS_PER_WORD: 5,
  };
  const inputFalse: CurrentGameStatus = {
    currentAnswers: [
      { rowNum: 0, letterNum: 0, value: 'A', guess: '' },
      { rowNum: 0, letterNum: 1, value: 'E', guess: '' },
      { rowNum: 0, letterNum: 2, value: 'L', guess: '' },
      { rowNum: 0, letterNum: 3, value: 'L', guess: '' },
      { rowNum: 0, letterNum: 4, value: 'O', guess: '' },
    ],
    startIndex: 0,
    guessedWord: [false, false, false, false, false],
    NUMBER_OF_LETTERS_PER_WORD: 5,
  };
  const responseGuessed = {
    currentAnswers: [
      { rowNum: 0, letterNum: 0, value: 'H', guess: 'green' },
      { rowNum: 0, letterNum: 1, value: 'E', guess: 'green' },
      { rowNum: 0, letterNum: 2, value: 'L', guess: 'green' },
      { rowNum: 0, letterNum: 3, value: 'L', guess: 'green' },
      { rowNum: 0, letterNum: 4, value: 'O', guess: 'green' },
    ],
    guessedWord: [true, true, true, true, true],
  };
  it('response value is expected with correct input', () => {
    expect(gameService(inputTrue, 'hello')).toEqual(responseGuessed);
  });

  it('function will not equal expected response with incorrect input data', () => {
    expect(gameService(inputFalse, 'hello')).not.toEqual(responseGuessed);
  });

  it('function will not equal expected response with incorrect  word', () => {
    expect(gameService(inputTrue, 'table')).not.toEqual(responseGuessed);
  });
});
