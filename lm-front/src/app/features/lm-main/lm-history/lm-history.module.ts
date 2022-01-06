import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LmHistoryComponent } from './lm-history.component';

const routes: Routes = [
  {
    path: '',
    component: LmHistoryComponent
  },
];


@NgModule({
  declarations: [
    LmHistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LmHistoryModule { }
