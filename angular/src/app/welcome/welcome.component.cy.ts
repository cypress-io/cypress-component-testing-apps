import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  it('should mount with greeting', () => {
    cy.mount(WelcomeComponent, {
      componentProperties: {
        username: 'Test User',
      },
    }).then((response) => {
      cy.spy(response.component.onLogout, 'emit').as('onLogout');
    });
    cy.contains('Welcome Test User');
  });
});
