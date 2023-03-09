import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { take } from 'rxjs/operators';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginService } from './login.service';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  standalone: true,
  imports: [WelcomeComponent, LoginFormComponent, HttpClientModule, CommonModule],
  providers: [LoginService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuthed = signal(false)
  errorMessage = signal('');
  username = signal('')

  private readonly _loginService = inject(LoginService);

  handleLogin(username: string, password: string): void {
    this.errorMessage.set('')

    this._loginService.login(username, password).pipe(
      take(1),
    ).subscribe(response => {
      if (response.status === 200) {
        this.isAuthed.set(true)
        this.username.set(username)
      } else {
        this.errorMessage.set(response.message)
      }
    })
  }

  logout(): void {
    this.isAuthed.set(false)
  }
}
