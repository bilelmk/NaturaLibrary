import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from '../../core/services/in-app/spinner.service';
import { SessionStorageService } from '../../core/services/in-app/session-storage.service';
import { SnackbarService } from '../../core/services/in-app/snackbar.service';
import {UsersService} from '../../core/services/http/users.service';

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
              private sessionStorageService: SessionStorageService ,
              private snackbarService: SnackbarService ,
              private usersService: UsersService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username   : ['', [Validators.required]],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      level: ['', Validators.required]
    });
  }

  register() {
    this.spinnerService.activate()
    this.usersService.add(this.form.value).subscribe(
      res => {
        this.spinnerService.deactivate() ;
        this.snackbarService.openSnackBar("Compte créer avec succès" , 'success')
        this.router.navigate(['/login'])
      },
      error => {
        this.snackbarService.openSnackBar("Erreur lors de création de compte" , 'fail')
        this.spinnerService.deactivate()

      }
    )
  }

  toLogin() {
    this.router.navigate(['/login'])
  }
}
