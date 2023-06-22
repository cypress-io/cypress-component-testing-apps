import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output, signal } from '@angular/core';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, map, Subject, takeUntil, tap } from 'rxjs';
import { ButtonComponent } from '../button/button.component';

interface Login {
  username: string
  password: string
}

class LoginForm extends FormGroup {
  constructor(readonly fb: NonNullableFormBuilder) {
    super(fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    }).controls)
  }
}

@Component({
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ButtonComponent, CommonModule],
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {
  @Input() errorMessage = ''
  @Output() onLogin: EventEmitter<{ username: string, password: string }> = new EventEmitter()

  login = signal({ username: '', password: '', submitted: false })

  private readonly destroy$ = new Subject()
  private readonly _fb = inject(NonNullableFormBuilder);

  loginForm = new LoginForm(this._fb)

  ngOnInit(): void {
      this.loginForm.valueChanges.pipe(
        takeUntil(this.destroy$)
      ).subscribe(({ username, password }: { username: string, password: string }) => {
        this.login.set({ username, password, submitted: false })
      })
  }

  ngOnDestroy(): void {
      this.destroy$.next(null);
      this.destroy$.complete()
  }

  handleFormSubmit(): void {
    this.login.update(({ username, password }) => ({ username, password, submitted: true }))

    if (this.loginForm.status === 'INVALID') {
      return;
    }
    
    this.onLogin.emit({ username: this.login().username, password: this.login().password })
  }
}
