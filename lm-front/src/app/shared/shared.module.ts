import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LmCopyrightComponent } from './components/lm-copyright/lm-copyright.component';
import { LmSidebarComponent } from './components/lm-sidebar/lm-sidebar.component';
import { LmErrorsComponent } from './components/lm-errors/lm-errors.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    LmCopyrightComponent,
    LmSidebarComponent,
    LmErrorsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [
    LmCopyrightComponent,
    LmSidebarComponent,
    LmErrorsComponent,
  ],
})
export class SharedModule { }
