import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './core/guards/authentication.guard';

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
    path: 'register',
    loadChildren: () => import('./features/lm-register/lm-register.module').then(m => m.LmRegisterModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./features/lm-main/lm-main.module').then(m => m.LmMainModule),
    canActivate: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
