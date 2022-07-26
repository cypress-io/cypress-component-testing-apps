import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
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
    this.errorMessage = '';

    this.loginService.login(username, password).pipe(
      take(1),
    ).subscribe((response) => {
      if (response.status === 200) {
        this.isAuthed = true
        this.username = username
      } else {
        this.errorMessage = response.message
      }
    })
  }

  logout(): void {
    console.log('logout');
    this.isAuthed = false;
  }
}
