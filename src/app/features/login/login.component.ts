import { HttpEventType } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { IApiResponseError } from '../../core/models/api-response.interface';
import { IFormDataUser } from '../../core/models/types';
import { AuthService } from '../../core/services/auth.service';
import { BackComponent } from '../../shared/components/back.component';

@Component({
  imports: [BackComponent, ReactiveFormsModule],
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  private formBuilder$ = inject(FormBuilder);
  private auth$ = inject(AuthService);

  loginForm = this.formBuilder$.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  loading = signal(false);
  errorResponse: WritableSignal<IApiResponseError | null> = signal(null)

  login() {
    this.errorResponse.set(null);
    const formData: IFormDataUser = this.loginForm.getRawValue();

    this.auth$.login(formData).subscribe({
      next: (event) => {
        this.loading.set(event.type === HttpEventType.Sent || event.type === HttpEventType.UploadProgress);

        if (event.type === HttpEventType.Response) {
          console.log(event.body);
          const token = event.body?.token;

          if (token) {
            this.auth$.saveToken(token);
          }
        }
      },
      error: (err) => {
        const apiError = err.error || { message: 'Error desconocido', statusCode: 500 };
        this.errorResponse.set(apiError);
      },
    });
  }
}
