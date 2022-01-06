import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from '../../core/services/in-app/spinner.service';
import { SnackbarService } from '../../core/services/in-app/snackbar.service';
import { UsersService } from '../../core/services/http/users.service';

@Component({
  selector: 'app-lm-register',
  templateUrl: './lm-register.component.html',
  styleUrls: ['./lm-register.component.scss']
})
export class LmRegisterComponent implements OnInit {

  form: FormGroup;
  error : string = null ;
  visibility = false ;

  constructor(private formBuilder: FormBuilder ,
              private router: Router ,
              private spinnerService: SpinnerService ,
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
    let user = {
      ...this.form.value ,
      active : true
    }
    this.spinnerService.activate()
    this.usersService.add(user).subscribe(
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

  togglePasswordVisibility() {
    this.visibility = !this.visibility ;
  }
}
