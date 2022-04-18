import Button from './Button.vue';

describe('Button', () => {
  it('should mount', () => {
    cy.mount(Button, {
      slots: {
        default: 'Click Me',
      },
    });

    cy.get('button').contains('Click Me');
  });

  it.skip('when button is clicked, should call onClick', () => {
    cy.mount(Button, {
      // props: {
      //   onClick: cy.spy().as('onClick'),
      // },
      slots: {
        default: 'Click Me',
      },
    });
    const spy = cy.spy();
    Cypress.vue.$on('click', spy);
    cy.get('button')
      .contains('Click Me')
      .click()
      .then(() => expect(spy).to.be.calledOnce);
    // cy.get('@wrapper').invoke('emitted', 'click').should('have.length', 1)
    // cy.get('@click').should('have.been.called');
  });
});
