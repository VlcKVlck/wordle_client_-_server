import { getWord, setNewWord } from './getWordService';

describe('testing getWordService', function () {
  it('expect word length to be as sent', async () => {
    const length = Math.ceil(Math.random() * 9 + 1);
    getWord(length);
    expect(setNewWord()).toHaveLength(length);
  });
});
