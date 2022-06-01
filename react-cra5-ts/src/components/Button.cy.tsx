import Button from './Button';

describe('Button', () => {
  it('should mount', () => {
    cy.mount(<Button>Click Me</Button>);

    cy.get('button').contains('Click Me');
  });

});
