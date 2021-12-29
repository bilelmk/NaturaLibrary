import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LmRequestComponent } from './lm-request.component';

const routes: Routes = [
  {
    path: '',
    component: LmRequestComponent
  },
];

@NgModule({
  declarations: [
    LmRequestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})

export class LmRequestModule { }
