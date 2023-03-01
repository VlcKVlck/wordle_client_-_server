import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function GameOver() {
  return (
    <>
      <h6>Think you can still win? Try playing with a new word</h6>
      <Link to="/">
        {' '}
        <Button variant="primary">Play again</Button>
      </Link>
    </>
  );
}
