import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./features/lm-login/lm-login.module').then(m => m.LmLoginModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./features/lm-main/lm-main.module').then(m => m.LmMainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
