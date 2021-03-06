import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from '../../core/services/in-app/spinner.service';
import { SnackbarService } from '../../core/services/in-app/snackbar.service';
import { AdminsService } from '../../core/services/http/admins.service';
import { UsersService } from '../../core/services/http/users.service';

@Component({
  selector: 'app-lm-login',
  templateUrl: './lm-login.component.html',
  styleUrls: ['./lm-login.component.scss']
})
export class LmLoginComponent implements OnInit {

  loginForm: FormGroup;
  error : string = null ;
  visibility = false;

  constructor(private formBuilder: FormBuilder ,
              private router: Router ,
              private spinnerService: SpinnerService ,
              private adminService: AdminsService ,
              private snackbarService: SnackbarService,
              private usersService: UsersService) {}

  ngOnInit(): void
  {
    this.loginForm = this.formBuilder.group({
      username   : ['', [Validators.required]],
      password: ['', Validators.required],
      type: ['user', Validators.required]
    });
  }

  onLogin() {
    this.spinnerService.activate()
    let authRequest = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }

    if(this.loginForm.value.type == 'user') {
      this.usersService.login(authRequest).subscribe(
        res => {
          sessionStorage.setItem('user', JSON.stringify(res.user))
          sessionStorage.setItem('token' , res.token) ;
          sessionStorage.setItem('role' , 'USER') ;
          this.spinnerService.deactivate() ;
          this.snackbarService.openSnackBar("Connecté avec succès" , 'success')
          this.router.navigate(['/main'])
        },
        error => {
          this.snackbarService.openSnackBar("Nom d'utilisateur ou mot de passe incorrect" , 'fail')
          this.spinnerService.deactivate()
        }
      )
    }
    else {
      this.adminService.login(authRequest).subscribe(
        res => {
          console.log(res);
          sessionStorage.setItem('user', JSON.stringify(res.user))
          sessionStorage.setItem('token' , res.token) ;
          sessionStorage.setItem('role' , 'ADMIN') ;
          this.spinnerService.deactivate() ;
          this.snackbarService.openSnackBar("Connecté avec succès" , 'success')
          this.router.navigate(['/main'])
        },
        error => {
          this.snackbarService.openSnackBar("Nom d'utilisateur ou mot de passe incorrect" , 'fail')
          this.spinnerService.deactivate()
        }
      )
    }

  }

  toRegister() {
    this.router.navigate(['/register'])
  }

  togglePasswordVisibility() {
    this.visibility = !this.visibility ;
  }
}
