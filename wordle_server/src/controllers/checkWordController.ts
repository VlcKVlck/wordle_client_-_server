import { Request, Response, Router } from 'express';
import bodyParser from 'body-parser';
import { gameService } from '../services/gameService';
import { setNewWord } from '../services/getWordService';

const checkedWord = Router();

async function checkWord(req: Request, res: Response) {
  try {
    const currentWord = setNewWord();
    res.send(gameService(req.body, currentWord));
  } catch (e) {
    res.status(400).send(e.message);
  }
}

checkedWord.post('/', bodyParser.json(), checkWord);

export default checkedWord;
