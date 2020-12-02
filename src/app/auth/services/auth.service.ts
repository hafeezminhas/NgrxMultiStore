import { AppState } from './../../store/state';
import { AuthActions } from './../store/auth.actions';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of, Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

import { User, Credentials } from './../models/user';
import { AuthResponse } from './../models/response';
import { Store } from '@ngrx/store';


const TOKEN_KEY = 'token';
const API_PREFIX = 'api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<AppState>
  ) {
      const token = this.getToken();
      if (token && !this.isTokenExpired(token)) {
        localStorage.setItem('token', token);
        this.store.dispatch(AuthActions.UpdateProfileAction({ user: this.getUserFromToken() }));
        this.router.navigateByUrl('/customers');
      } else {
        this.logout();
      }
  }

  login(cred: Credentials): Observable<any> {
    if (cred.email === '' && cred.password === '') {
      return of({ success: false, message: 'please fill in the form' });
    }
    return this.http.post(`${API_PREFIX}/auth`, cred);
  }

  refreshToken(token: string): Observable<any> {
    return this.http.post(`${API_PREFIX}/auth/refresh`, token);
  }

  logout(): void {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  getUserFromToken(): User {
    const token = localStorage.getItem(TOKEN_KEY);
    const decoded: any = jwt_decode(token);

    return decoded;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      token = this.getToken();
    }
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  }
}
