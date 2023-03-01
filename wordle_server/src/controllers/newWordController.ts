import { getWord } from '../services/getWordService';
import { Request, Response, Router } from 'express';

const newWord = Router();

async function fetchNewWord(req: Request, res: Response) {
  try {
    const length = Number(req.params.length);
    getWord(length);
    res.status(200).send('ok');
  } catch (e) {
    res.status(400).send(e.message);
  }
}

newWord.get('/:length', fetchNewWord);

export default newWord;
