import { SigninContext } from '../providers/signin-context';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { selectWord } from '../server-requests/server-requests-words';
import Modal from 'react-bootstrap/Modal';
import { DisplayContext } from '../providers/display-context';
import { ShowSignUpModal } from '../components/Modals/Modals';
import { gameConfig } from '../game_config/gameConfig';

export function Welcome() {
  const NUMBER_OF_LETTERS_PER_WORD = gameConfig.numberOfLettersPerWord;
  const { currentUser } = useContext(SigninContext);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleCloseLSignUpModal = () => setShowSignUpModal(false);
  const handleShowSignUpModal = () => setShowSignUpModal(true);

  const userNameToDisplay = () => (currentUser ? currentUser : 'user');

  const startGame = () => {
    selectWord(Number(NUMBER_OF_LETTERS_PER_WORD)).then(() => console.log('Playing with new word'));
  };

  return (
    <DisplayContext.Provider value={{ showSignUpModal, setShowSignUpModal }}>
      <div className="full-size-welcome d-flex h-100 text-center text-bg-dark">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <main className="px-3">
            <h1>{`Welcome ${userNameToDisplay()}`}</h1>
            <Link to={'../game'}>
              <Button label="play_game" onClick={startGame} size={'lg'}>
                Play game{' '}
              </Button>
            </Link>
            <br />
            <br />
            <p className="lead" hidden={!!currentUser}>
              Sign in to your account to keep track of your scores.
            </p>
            <h6 hidden={currentUser}>Don't have an account yet?</h6>
            <Button variant="secondary" label="sign_up" onClick={handleShowSignUpModal} hidden={!!currentUser}>
              Sign up
            </Button>
            <br />
            <Modal show={showSignUpModal} backdrop="static" onHide={handleCloseLSignUpModal} animation={false}>
              <ShowSignUpModal />
            </Modal>
          </main>
        </div>
      </div>
    </DisplayContext.Provider>
  );
}
