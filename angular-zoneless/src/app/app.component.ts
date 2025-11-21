import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { take } from 'rxjs/operators';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginService } from './login.service';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  imports: [WelcomeComponent, LoginFormComponent, HttpClientModule, CommonModule],
  providers: [LoginService],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isAuthed = false
  errorMessage = '';
  username = ''

  constructor(private readonly loginService: LoginService, private ref: ChangeDetectorRef) {}

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
      // force change detection to update the UI until we convert the values to signals
      this.ref.markForCheck();
    })
  }

  logout(): void {
    console.log('logout');
    this.isAuthed = false;
  }
}
