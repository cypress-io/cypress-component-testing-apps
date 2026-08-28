import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginService } from './login.service';
import { WelcomeComponent } from './welcome/welcome.component';
@Component({
  imports: [WelcomeComponent, LoginFormComponent, CommonModule],
  providers: [LoginService],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isAuthed = signal(false)
  errorMessage = signal('');
  username = signal('');

  constructor(private readonly loginService: LoginService, private ref: ChangeDetectorRef) {}

  async handleLogin(username: string, password: string): Promise<void> {
    this.errorMessage.set('');

    const response = await this.loginService.login(username, password)

    if(response.status === 200) {
      this.isAuthed.set(true)
      this.username.set(username)
    } else {
      this.errorMessage.set(response.message)
    }
  }

  logout(): void {
    console.log('logout');
    this.isAuthed.set(false)
    this.username.set('')
  }
}
