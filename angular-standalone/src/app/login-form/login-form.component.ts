
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';

@Component({
  standalone: true,
  imports: [FormsModule, ButtonComponent],
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @Input() errorMessage = ''
  @Output() onLogin: EventEmitter<{ username: string, password: string }> = new EventEmitter()
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
