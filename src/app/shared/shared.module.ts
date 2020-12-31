import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from './../material/material.module';
import { CreateRequestComponent } from './dialogs/create-request/create-request.component';
import { CreateQuoteComponent } from './dialogs/create-quote/create-quote.component';
import { NgPopupsModule } from 'ng-popups';
import { RouterModule } from '@angular/router';
import { WINDOW_PROVIDERS } from './helpers/window.helper';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLoaderComponent } from './components/app-loader/app-loader.component';
import { ScrollToDirective } from './directives/scroll-to.directive';
import { FontSizeDirective } from './directives/font-size.directive';

@NgModule({
  declarations: [
    AppLoaderComponent,
    FontSizeDirective,
    ScrollToDirective,
    CreateQuoteComponent,
    CreateRequestComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgPopupsModule,
    MaterialModule
  ],
  exports: [
    AppLoaderComponent,
    FontSizeDirective,
    ScrollToDirective,

    CreateQuoteComponent,
    CreateRequestComponent
  ],
  providers: [WINDOW_PROVIDERS]
})
export class SharedModule { }
