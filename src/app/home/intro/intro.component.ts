import { CreateQuoteComponent } from './../../shared/dialogs/create-quote/create-quote.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  constructor(private router: Router, private matDialog: MatDialog) { }

  ngOnInit() {}

  buyAngland() {
    window.open('');
  }

  getNGLanding() {
    window.open('');
  }

  getQuote() {
    const dialogConfig = new MatDialogConfig();
        dialogConfig.position = { top: '8%' };
        dialogConfig.hasBackdrop = true;
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.closeOnNavigation = true;
        dialogConfig.minWidth = '650px';
        dialogConfig.maxWidth = '750px';
        dialogConfig.panelClass = 'qtr-dialog'

        const dialogRef = this.matDialog.open(CreateQuoteComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(data => {
            if (data) {
              this.router.navigateByUrl('/register');
            }
        });
  }

  createRequest() {}
}
