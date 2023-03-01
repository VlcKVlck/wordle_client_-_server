import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Admin() {
  return (
    <>
      <br />
      <h3> Restricted admin area (WIP)</h3>
      <br />
      <Link to={'/'}>
        <Button variant="secondary">Back to main site</Button>
      </Link>
    </>
  );
}
