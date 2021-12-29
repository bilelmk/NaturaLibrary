import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LmProfilComponent } from './lm-profil.component';

const routes: Routes = [
  {
    path: '',
    component: LmProfilComponent
  },
];

@NgModule({
  declarations: [
    LmProfilComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})

export class LmProfilModule { }
