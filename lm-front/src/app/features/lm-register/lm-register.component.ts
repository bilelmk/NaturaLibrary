import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from '../../core/services/in-app/spinner.service';
import { AuthenticationService } from '../../core/services/http/authentication.service';
import { SessionStorageService } from '../../core/services/in-app/session-storage.service';
import { SnackbarService } from '../../core/services/in-app/snackbar.service';

@Component({
  selector: 'app-lm-register',
  templateUrl: './lm-register.component.html',
  styleUrls: ['./lm-register.component.scss']
})
export class LmRegisterComponent implements OnInit {

  form: FormGroup;
  error : string = null ;

  constructor(private formBuilder: FormBuilder ,
              private router: Router ,
              private spinnerService: SpinnerService ,
              private authenticationService: AuthenticationService ,
              private sessionStorageService: SessionStorageService ,
              private snackbarService: SnackbarService) {}

  ngOnInit(): void
  {
    this.form = this.formBuilder.group({
      username   : ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  register() {
    this.spinnerService.activate()
    let authRequest = {
      username: this.form.value.username,
      password: this.form.value.password
    }
    this.authenticationService.login(authRequest).subscribe(
      res => {
        this.sessionStorageService.save(res.token) ;
        this.spinnerService.deactivate() ;
        this.snackbarService.openSnackBar("Connecté avec succès" , 'success')
        this.router.navigate(['/main'])
      },
      error => {
        this.snackbarService.openSnackBar(error.error.message , 'fail')
        this.spinnerService.deactivate()

      }
    )
  }

}
