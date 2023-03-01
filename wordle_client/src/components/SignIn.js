import { useContext, useEffect } from 'react';
import { SigninContext } from '../providers/signin-context';
import { Button } from 'react-bootstrap';
import { LogInUser } from '../server-requests/server-requests-users';
import { DisplayContext } from '../providers/display-context';

export function SignIn() {
  const { setCurrentUser } = useContext(SigninContext);
  const { setShowSignInModal } = useContext(DisplayContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputUsername = document.getElementById('username');
    const inputPassword = document.getElementById('password');

    setTimeout(() => {
      LogInUser(inputUsername.value, inputPassword.value)
        .then((res) => {
          localStorage.setItem('username', res.user.firstname);
          localStorage.setItem('userEmail', res.user.email);
          localStorage.setItem('token', res.token);
          setCurrentUser(res.user.firstname);
          setShowSignInModal(false);
        })
        .catch((e) => {
          console.log(e.message);
          if (e.message === 'No such user') {
            alert(
              'We do not have a registered user with such username and password. ' +
                'If you want to sign up, please close the sign in window, and go to sign up'
            );
          }
        });
    }, 1000);
  };

  useEffect(() => {
    document.getElementById('username').focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          Email: <input type="text" className="form-control" id="username" placeholder="Email" required />
        </label>
        <br />
        <br />
        <label>
          Password: <input type="text" className="form-control" id="password" placeholder="Password" required />
        </label>
        <br />
        <br />
        <Button variant="secondary" className="btn btn-primary" type="submit">
          Sign in
        </Button>
        <br />
      </div>
    </form>
  );
}
