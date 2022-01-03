import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from '../../core/services/in-app/spinner.service';
import { AuthenticationService } from '../../core/services/http/authentication.service';
import { SessionStorageService } from '../../core/services/in-app/session-storage.service';
import { SnackbarService } from '../../core/services/in-app/snackbar.service';
import {AdminsService} from '../../core/services/http/admins.service';

@Component({
  selector: 'app-lm-login',
  templateUrl: './lm-login.component.html',
  styleUrls: ['./lm-login.component.scss']
})
export class LmLoginComponent implements OnInit {

  loginForm: FormGroup;
  error : string = null ;

  constructor(private formBuilder: FormBuilder ,
              private router: Router ,
              private spinnerService: SpinnerService ,
              private adminService: AdminsService ,
              private sessionStorageService: SessionStorageService ,
              private snackbarService: SnackbarService) {}

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
      this.spinnerService.deactivate() ;
    }
    else {
      this.adminService.login(authRequest).subscribe(
        res => {
          console.log(res)
          this.sessionStorageService.save(res.token) ;
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

}
