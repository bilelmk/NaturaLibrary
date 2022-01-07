import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LmMyBooksComponent } from './lm-my-books.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule }  from '../../../shared/shared.module';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: LmMyBooksComponent
  },
];


@NgModule({
  declarations: [LmMyBooksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatCardModule,
  ]
})
export class LmMyBooksModule { }
