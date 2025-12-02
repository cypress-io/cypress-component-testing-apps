import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';

@Component({
  imports: [FormsModule, ButtonComponent, CommonModule],
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  errorMessage = input<string>('')
  onLogin = output<{ username: string, password: string }>()
  username = ''
  password = ''
  submitted = false

  handleFormSubmit(): void {
    this.submitted = true;
    
    if (!this.username || !this.password) {
      return;
    }

    this.onLogin.emit({ username: this.username, password: this.password })
  }
}
