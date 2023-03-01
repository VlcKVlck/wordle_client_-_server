import Modal from 'react-bootstrap/Modal';
import { SignIn } from '../SignIn';
import { Help } from '../Help';
import { SignUp } from '../SignUp';
import { GameOver } from '../GameOver';
import { YouWon } from '../YouWon';

export function SignInModal() {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignIn />
      </Modal.Body>
    </>
  );
}

export function ShowHelpModal() {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Need some help?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Help />
      </Modal.Body>
    </>
  );
}

export function ShowSignUpModal() {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Sign up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignUp />
      </Modal.Body>
    </>
  );
}

export function GameOverModal() {
  return (
    <>
      <Modal.Header>
        <Modal.Title>Game Over :(</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <GameOver />
      </Modal.Body>
    </>
  );
}

export function YouWonModal() {
  return (
    <>
      <Modal.Header>
        <Modal.Title>You Won!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <YouWon />
      </Modal.Body>
    </>
  );
}
