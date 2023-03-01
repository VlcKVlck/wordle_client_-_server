import { useContext, useEffect } from 'react';
import { SigninContext } from '../providers/signin-context';
import { Button } from 'react-bootstrap';
import { createUser } from '../server-requests/server-requests-users';
import { DisplayContext } from '../providers/display-context';

export function SignUp() {
  const { setCurrentUser } = useContext(SigninContext);
  const { setShowSignUpModal } = useContext(DisplayContext);
  //
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputUsername = document.getElementById('username').value;
    const inputFirstName = document.getElementById('first_name').value;
    const inputLastName = document.getElementById('last_name').value;
    const inputPassword = document.getElementById('password').value;
    setTimeout(() => {
      createUser(inputUsername, inputFirstName, inputLastName, inputPassword)
        .then((res) => {
          localStorage.setItem('username', res.user.firstname);
          localStorage.setItem('userinfo', res.user);
          localStorage.setItem('token', res.token);
          setCurrentUser(res.user.firstname);
        })
        .catch((e) => {
          console.log(e.message);
          alert('We already have a user with this email. Please sign in or use another email');
        });
    }, 1000);
    setShowSignUpModal(false);
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
        <label>
          First Name: <input type="text" className="form-control" id="first_name" placeholder="First Name" required />
        </label>
        <br />
        <br />
        <label>
          Last Name: <input type="text" className="form-control" id="last_name" placeholder="Last Name" required />
        </label>
        <br />
        <br />
        <br />
        <Button variant="secondary" className="btn btn-primary" type="submit">
          Sign up
        </Button>
        <br />
      </div>
    </form>
  );
}
