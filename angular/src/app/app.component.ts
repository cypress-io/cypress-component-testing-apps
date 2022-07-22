import { Component } from '@angular/core';
import { of } from 'rxjs';
import { tap, filter, map, catchError } from 'rxjs/operators';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuthed = false
  errorMessage = '';
  username = ''

  constructor(private readonly loginService: LoginService) {}

  handleLogin(username: string, password: string): void {
    console.log('handleLogin')
    this.errorMessage = '';

    this.loginService.login(username, password).pipe(
      tap(console.log),
      filter(username => !!username),
      map(username => this.username = username),
      map(() => this.isAuthed = true),
      catchError((err) => of(this.isAuthed = false))
    )
  }

  logout(): void {
    console.log('logout');
    this.isAuthed = false;
  }
}
