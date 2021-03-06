import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LmMainComponent } from './lm-main.component';

const routes: Routes = [
  {
    path: '',
    component: LmMainComponent,
    children: [
      {
        path: '',
        redirectTo : 'books' ,
        pathMatch: 'full',
      },
      {
        path: 'admins',
        loadChildren: () => import('./lm-admins/lm-admins.module').then(m => m.LmAdminsModule) ,
      },
      {
        path: 'users',
        loadChildren: () => import('./lm-users/lm-users.module').then(m => m.LmUsersModule)
      },
      {
        path: 'books',
        loadChildren: () => import('./lm-books/lm-books.module').then(m => m.LmBooksModule)
      },
      {
        path: 'stats',
        loadChildren: () => import('./lm-stats/lm-stats.module').then(m => m.LmStatsModule)
      },
      {
        path: 'my-books',
        loadChildren: () => import('./lm-my-books/lm-my-books.module').then(m => m.LmMyBooksModule)
      },
      {
        path: 'history',
        loadChildren: () => import('./lm-history/lm-history.module').then(m => m.LmHistoryModule)
      }
    ]
  }
];

@NgModule({
  declarations: [
    LmMainComponent
  ],
  imports: [
    CommonModule,
    SharedModule ,
    RouterModule.forChild(routes),
  ]
})
export class LmMainModule { }
