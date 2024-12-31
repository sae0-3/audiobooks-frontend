import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { ILoginResponse } from '../models/api-response.interface';
import { IFormDataUser } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly baseURL = 'https://audiobooks-backend-production.up.railway.app/api';
  private http = inject(HttpClient);

  login(user: IFormDataUser) {
    return this.http.post<ILoginResponse>(`${this.baseURL}/auth/login`, user, {
      reportProgress: true,
      observe: 'events',
    });
  }

  register(newUser: IFormDataUser) {
    return this.http.post(`${this.baseURL}/users/register`, newUser, {
      reportProgress: true,
      observe: 'events',
    });
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }
}
