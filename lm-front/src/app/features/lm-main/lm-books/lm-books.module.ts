import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LmBooksComponent} from './lm-books.component';

const routes: Routes = [
  {
    path: '',
    component: LmBooksComponent
  },
];

@NgModule({
  declarations: [
    LmBooksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LmBooksModule { }
