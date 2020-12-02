import { AuthSelectors } from './../store/auth.selectors';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { AuthService } from './../services/auth.service';
import * as FromAuth from './../store';
import { first, mergeMap } from 'rxjs/operators';
const AUTH_HEADER_KEY = 'Authorization';
const AUTH_PREFIX = 'Bearer';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private store: Store<FromAuth.AuthSelectors>) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.pipe(
      select(FromAuth.AuthSelectors.token),
      first(),
      mergeMap(token => {
        const authReq = !!token ? request.clone({
          headers: request.headers.set('Authorization', `Bearer ${token}`),
          withCredentials: true
        }) : request;

        return next.handle(authReq);
      })
    );
  }
}
