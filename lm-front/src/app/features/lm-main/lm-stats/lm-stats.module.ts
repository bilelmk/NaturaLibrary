import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LmStatsComponent } from './lm-stats.component';
import { ChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';

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
    ChartsModule,
    MatCardModule
  ]
})

export class LmStatsModule { }
