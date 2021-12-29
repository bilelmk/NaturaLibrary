import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LmAdminsComponent } from './lm-admins.component';

const routes: Routes = [
  {
    path: '',
    component: LmAdminsComponent
  },
];

@NgModule({
  declarations: [
    LmAdminsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LmAdminsModule { }
