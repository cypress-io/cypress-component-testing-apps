import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';

describe('LoginService', () => {
  it('should return a user if logged in', (done) => {
    cy.intercept('POST', '/auth', {
      statusCode: 200,
      body: {
        message: 'bob',
      },
    }).then(async () => {
      TestBed.configureTestingModule({
        providers: [LoginService],
      });

      const loginService = TestBed.inject(LoginService);

      const res = await loginService.login('bob', 'the builder')
  
      expect(res).deep.eq({
        status: 200,
        message: 'bob',
      });
      done()
    });
  });

  it('should error if 404', (done) => {
    cy.intercept('POST', '/auth', {
      statusCode: 404,
      body: {
        message: '',
      },
    }).then(async () => {
      TestBed.configureTestingModule({
        providers: [LoginService],
      });
  
      const loginService = TestBed.inject(LoginService);
  
      const res = await loginService.login('bob', 'the builder')

      expect(res).deep.eq({
        status: 404,
        message: 'error during the auth, status code: 404',
      });
      done()
    });
  });

  it('should error if 401 bad credentials', (done) => {
    cy.intercept('POST', '/auth', {
      statusCode: 401,
      body: {},
    }).then(async () => {
      TestBed.configureTestingModule({
        providers: [LoginService],
      });

      const loginService = TestBed.inject(LoginService);

      const res = await loginService.login('bob', 'the constructor')
  
      expect(res).deep.eq({
        status: 401,
        message: 'Bad username or password',
      });
      done()
    });
  });
});
