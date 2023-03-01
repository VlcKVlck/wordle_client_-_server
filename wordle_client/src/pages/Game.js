import { Display } from '../components/Display';
import { KeyBoard } from '../components/KeyBoard';
import { useState } from 'react';
import { AnsContext } from '../providers/ans-context';
import { slateUpdate } from '../components/slateUpdate';
import './Game.css';
import { gameConfig } from '../game_config/gameConfig';

export function Game() {
  const NUMBER_OF_ROWS = gameConfig.numberOfRows;
  const NUMBER_OF_LETTERS_PER_WORD = gameConfig.numberOfLettersPerWord;

  let initialSlate = [];
  const buildInitialBoard = (arr) => {
    for (let i = 0; i < NUMBER_OF_ROWS; i++) {
      for (let j = 0; j < NUMBER_OF_LETTERS_PER_WORD; j++) {
        arr.push({ rowNum: i, letterNum: j, value: '', guess: '' });
      }
    }
    return arr;
  };
  initialSlate = buildInitialBoard(initialSlate);

  const [currentAnswers, setCurrentAnswers] = useState(initialSlate);
  const [guessedWord, setGuessedWord] = useState([false, false, false, false, false]);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [lastLetterToDelete, setLastLetterToDelete] = useState(0);

  const useStateValues = {
    lastLetterToDelete,
    setLastLetterToDelete,
    guessedWord,
    setGuessedWord,
    slateUpdate,
    NUMBER_OF_LETTERS_PER_WORD,
    NUMBER_OF_ROWS,
    currentAnswers,
    setCurrentAnswers,
    currentLetter,
    setCurrentLetter,
  };

  return (
    <AnsContext.Provider value={useStateValues}>
      <div className="site">
        <Display />
        <KeyBoard />
      </div>
    </AnsContext.Provider>
  );
}
