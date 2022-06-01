import App from './App';

describe('LoginForm', () => {
  it('should redirect to welcome screen when creds are correct', () => {
    cy.mount(<App />);
    cy.contains('Username').find('input').type('testuser');
    cy.contains('Password').find('input').type('testpassword');
    cy.intercept('POST', '/auth', {
      statusCode: 200,
      body: {
        message: 'Authenticated',
      },
    });
    cy.get('button').contains('Login').as('loginButton').click();
    cy.contains('Welcome testuser!');
  });

  it('should show error message when creds are incorrect', () => {
    cy.mount(<App />);
    cy.contains('Username').find('input').type('baduser');
    cy.contains('Password').find('input').type('badpassword');
    cy.intercept('POST', '/auth', {
      statusCode: 401,
      body: {
        message: 'Bad username or password',
      },
    });
    cy.get('button').contains('Login').as('loginButton').click();
    cy.contains('Bad username or password');
  });
});
