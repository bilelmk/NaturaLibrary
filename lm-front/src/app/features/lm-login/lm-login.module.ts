import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LmLoginComponent } from './lm-login.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: LmLoginComponent
  },
];

@NgModule({
  declarations: [
    LmLoginComponent
  ],
  imports: [
      CommonModule,
      RouterModule.forChild(routes),
      MatCardModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonToggleModule,
      MatIconModule
  ]
})
export class LmLoginModule { }
