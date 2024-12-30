import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { BackComponent } from '../../shared/components/back.component';

@Component({
  imports: [BackComponent, ReactiveFormsModule],
  templateUrl: 'register.component.html',
})
export class RegisterComponent {
  private formBuilder = inject(FormBuilder);
  registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  onSubmit() {
    console.log(this.registerForm.value);
  }
}
