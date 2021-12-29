import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LmUsersComponent } from './lm-users.component';

const routes: Routes = [
  {
    path: '',
    component: LmUsersComponent
  },
];

@NgModule({
  declarations: [
    LmUsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})

export class LmUsersModule { }
