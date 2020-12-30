import { AuthService } from './../services/auth.service';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { AuthSelectors } from './../store/auth.selectors';
import { AppState } from './../../store/state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AppState>, private authService: AuthService) {}

  canActivate(): Observable<boolean> {
    return this.store.select(AuthSelectors.isAuthenticated).pipe(
      map(isAuth => {
        if (!isAuth) {
          this.router.navigate(['/login']);
        }
        return isAuth;
      })
    );
  }
}
