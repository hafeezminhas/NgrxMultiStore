import { AuthService } from './../../auth/services/auth.service';
import { Observable } from 'rxjs';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  @ViewChild('sidenav') sidenav: MatSidenav;
  @Input() collapsed: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  toggleNav(): void {
    this.sidenav.toggle();
  }
}
