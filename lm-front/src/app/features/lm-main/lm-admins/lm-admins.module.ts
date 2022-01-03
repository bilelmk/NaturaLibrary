import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LmAdminsComponent } from './lm-admins.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '../../../shared/shared.module';
import { LmAdminsModalComponent } from './lm-admins-modal/lm-admins-modal.component';

const routes: Routes = [
  {
    path: '',
    component: LmAdminsComponent
  },
];

@NgModule({
  declarations: [
    LmAdminsComponent,
    LmAdminsModalComponent
  ],
  imports: [
      CommonModule,
      RouterModule.forChild(routes),
      MatIconModule,
      MatDialogModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      MatIconModule,
      MatPaginatorModule,
      SharedModule
  ],
  entryComponents: [
    LmAdminsModalComponent
  ]
})
export class LmAdminsModule { }
