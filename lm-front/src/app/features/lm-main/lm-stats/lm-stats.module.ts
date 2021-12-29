import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LmStatsComponent } from './lm-stats.component';

const routes: Routes = [
  {
    path: '',
    component: LmStatsComponent
  },
];

@NgModule({
  declarations: [
    LmStatsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})

export class LmStatsModule { }
