import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { BackComponent } from '../../shared/components/back.component';

@Component({
  imports: [BackComponent, ReactiveFormsModule],
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  private formBuilder = inject(FormBuilder);
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
