import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './store/state';
import { AuthActions } from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidenav') sidenav: ElementRef;
  navCollapse = false;

  constructor(private store: Store<AppState>) {}

  ngAfterViewInit(): void {
    this.store.dispatch(AuthActions.InitAction());
  }

  sideNavToggle(e): void {
    this.navCollapse = !this.navCollapse;
  }
}
