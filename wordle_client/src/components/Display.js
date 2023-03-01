import { AnsContext } from '../providers/ans-context';
import { useContext, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { GameOverModal, YouWonModal } from './Modals/Modals';

export function Display() {
  const { slateUpdate, NUMBER_OF_ROWS, NUMBER_OF_LETTERS_PER_WORD, currentAnswers, currentLetter, guessedWord } = useContext(AnsContext);
  const context = useContext(AnsContext);
  useEffect(() => {
    if (currentLetter < currentAnswers.length) document.getElementById(currentLetter).focus();
  }, [currentLetter]);

  useEffect(() => {
    if (guessedWord.every((x) => x)) {
      handleShowYouWonModal();
    }
    if (currentLetter === currentAnswers.length && !guessedWord.every((x) => x)) {
      handleShowGameOverModal();
    }
  }, [guessedWord]);

  function onKeyClick(e) {
    if ((e.key <= 'z' && e.key >= 'a') || e.key === 'Backspace') {
      slateUpdate(e.key.toUpperCase(), context);
    }
  }

  const [showGameOverModal, setShowGaveOverModal] = useState(false);
  const handleCloseGameOverModal = () => setShowGaveOverModal(false);
  const handleShowGameOverModal = () => setShowGaveOverModal(true);

  const [showYouWonModal, setShowYouWonModal] = useState(false);
  const handleShowYouWonModal = () => setShowYouWonModal(true);
  const handleCloseYouWonModal = () => setShowYouWonModal(false);

  return (
    <>
      <div className="output">
        <br /> <br /> <br />
        {[...Array(NUMBER_OF_ROWS).keys()].map((row) => (
          <div className={'row' + String(row)} key={row}>
            {currentAnswers
              .slice(row * Number(NUMBER_OF_LETTERS_PER_WORD), row * Number(NUMBER_OF_LETTERS_PER_WORD) + Number(NUMBER_OF_LETTERS_PER_WORD))
              .map((answer) => (
                <input
                  readOnly
                  id={currentAnswers.indexOf(answer)}
                  key={currentAnswers.indexOf(answer)}
                  value={answer.value}
                  className={'displayBlocks ' + answer.guess}
                  onKeyUp={onKeyClick}
                />
              ))}
          </div>
        ))}
      </div>

      <Modal show={showGameOverModal} backdrop="static" onHide={handleCloseGameOverModal} animation={false}>
        <GameOverModal />
      </Modal>
      <Modal show={showYouWonModal} backdrop="static" onHide={handleCloseYouWonModal} animation={false}>
        <YouWonModal />
      </Modal>
    </>
  );
}
