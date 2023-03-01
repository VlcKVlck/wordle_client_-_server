import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function YouWon() {
  return (
    <>
      <h6>Congratulations!</h6>
      <Link to="/">
        <Button variant="primary">Play again</Button>
      </Link>
    </>
  );
}
