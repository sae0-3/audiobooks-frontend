import { HttpEventType } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, tap } from 'rxjs';

import { IApiResponseError } from '../../core/models/api-response.interface';
import { IFormDataUser } from '../../core/models/types';
import { AuthService } from '../../core/services/auth.service';
import { BackComponent } from '../../shared/components/back.component';

@Component({
  imports: [BackComponent, ReactiveFormsModule],
  templateUrl: 'register.component.html',
})
export class RegisterComponent {
  private formBuilder$ = inject(FormBuilder);
  private auth$ = inject(AuthService);
  private router$ = inject(Router);

  registerForm = this.formBuilder$.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  loading = signal(false);
  errorResponse: WritableSignal<IApiResponseError | null> = signal(null);

  register() {
    this.errorResponse.set(null);
    const formData: IFormDataUser = this.registerForm.getRawValue();

    this.auth$.register(formData).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Sent || event.type === HttpEventType.UploadProgress) {
          this.loading.set(true);
        }
      }),
      finalize(() => { this.loading.set(false); })
    ).subscribe({
      next: () => {
        this.router$.navigate(['/login']);
      },
      error: (err) => {
        const apiError = err.error || { message: 'Error desconocido', statusCode: 500 };
        this.errorResponse.set(apiError);
      }
    });
  }
}
