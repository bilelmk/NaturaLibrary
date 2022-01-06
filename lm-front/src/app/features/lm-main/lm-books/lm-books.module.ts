import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LmBooksComponent } from './lm-books.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '../../../shared/shared.module';
import { LmBooksModalComponent } from './lm-books-modal/lm-books-modal.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: LmBooksComponent
  },
];

@NgModule({
  declarations: [
    LmBooksComponent,
    LmBooksModalComponent
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
    SharedModule,
    ImageCropperModule,
    MatCardModule
  ],
  entryComponents: [
    LmBooksModalComponent
  ]
})
export class LmBooksModule { }
