import Button from './CyButton.vue';

describe('Button', () => {
  it('should mount', () => {
    cy.mount(Button, {
      slots: {
        default: () => 'Click Me',
      },
    });

    cy.get('button').contains('Click Me');
  });

  it('when button is clicked, should call onClick', () => {
    cy.mount(Button, {
      props: {
        onClick: cy.spy().as('onClick')
      },
      slots: {
        default: () => 'Click Me',
      },
    });

    cy.get('button').contains('Click Me').click();
    cy.get('@onClick').should('have.been.called');
  });
});
