import { Button } from 'react-bootstrap';

describe('welcome', () => {
  it('should display play button', () => {
    cy.mount(<Button label="play_game" />);
    cy.get('button').should('exist');
    cy.get('img').should('not.exist');
  });

  it('should display sign up button', () => {
    cy.mount(<Button label="sign_up" />);
    cy.get('button').should('exist');
  });

  it('should not display sign up button if currentuser exists', () => {
    let currentUser = true;
    cy.mount(<Button label="sign_up" hidden={!!currentUser} />);
    cy.get('button').should('not.be.visible');
  });
});
