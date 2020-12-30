import { map, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { AppState } from './../../store/state';
import * as FromAuth from './../store';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthModuleGuard implements CanLoad {
  constructor(private router: Router, private store: Store<AppState>) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.store.select(FromAuth.AuthSelectors.selectAuthUser).pipe(
      take(1),
      map(user => {
        if (user && user.role > 0) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
