import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { SigninContext } from '../providers/signin-context';
import { DisplayContext } from '../providers/display-context';
import { ShowHelpModal, SignInModal } from './Modals/Modals';
import { logInAdmin } from '../server-requests/server-requests-users';

export function NavBar() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);

  const { setCurrentUser } = useContext(SigninContext);

  const handleCloseHelpModal = () => setShowHelpModal(false);
  const handleShowHelpModal = () => setShowHelpModal(true);

  const handleCloseLLogInModal = () => setShowSignInModal(false);
  const handleShowSignInModal = () => setShowSignInModal(true);

  const navigate = useNavigate();

  const userNameToDisplay = () => {
    if (localStorage.getItem('username')) {
      return localStorage.getItem('username');
    } else {
      return 'user';
    }
  };
  let logOutVisibility = false;

  localStorage.getItem('username') ? (logOutVisibility = false) : (logOutVisibility = true);

  const logOut = () => {
    logOutVisibility = false;
    localStorage.clear();
    setCurrentUser('');
    navigate('/');
  };

  const handleAdminPanelRequest = async () => {
    const userEmail = localStorage.getItem('userEmail');
    const token = localStorage.getItem('token');
    if (await logInAdmin(userEmail, token)) {
      navigate('../admin');
    } else {
      alert('You need to be an admin to access this page');
    }
  };

  return (
    <>
      <DisplayContext.Provider value={{ showSignInModal, setShowSignInModal }}>
        <div className="d-flex text-center text-bg-dark">
          <div className="cover-container d-flex w-100 h-10 p-3 mx-auto flex-column">
            <header className="mb-auto">
              <div>
                <Link to={'/'}>
                  <h3 className="float-md-start mb-0">Wordle</h3>
                </Link>
                <nav className="nav nav-masthead justify-content-center float-md-end">
                  <Button variant="secondary" onClick={handleShowHelpModal}>
                    Help
                  </Button>
                  <Button variant="secondary" onClick={logOut} hidden={logOutVisibility}>
                    Sign Out
                  </Button>
                  <Button variant="secondary" id="sign_in" onClick={handleShowSignInModal} hidden={!logOutVisibility}>
                    Sign In
                  </Button>
                  <Button variant="danger" size="sm" onClick={handleAdminPanelRequest} hidden={logOutVisibility}>
                    Admin
                  </Button>
                  <span id="welcome-tag">{`Welcome ${userNameToDisplay()}`}</span>
                </nav>
              </div>
            </header>
          </div>
          <Modal show={showHelpModal} backdrop="static" onHide={handleCloseHelpModal} animation={false}>
            <ShowHelpModal />
          </Modal>

          <Modal show={showSignInModal} backdrop="static" onHide={handleCloseLLogInModal} animation={false}>
            <SignInModal />
          </Modal>
        </div>
      </DisplayContext.Provider>
    </>
  );
}
