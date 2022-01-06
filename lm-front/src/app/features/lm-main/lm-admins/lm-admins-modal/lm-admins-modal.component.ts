import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../../../core/services/in-app/snackbar.service';
import { AdminsService } from '../../../../core/services/http/admins.service';
import { Helpers } from '../../../../shared/helpers/helpers';

@Component({
  selector: 'app-lm-admins-modal',
  templateUrl: './lm-admins-modal.component.html',
  styleUrls: ['./lm-admins-modal.component.scss']
})
export class LmAdminsModalComponent {

  form: FormGroup;
  visibility = false;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<LmAdminsModalComponent>,
              private snackbarService: SnackbarService ,
              private adminService: AdminsService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    if(!this.data.edit) {
      this.form = new FormGroup({
        firstName: new FormControl("", Validators.required),
        lastName:  new FormControl("", Validators.required),
        password: new FormControl("", Validators.required),
        username: new FormControl("", Validators.required),
      });
    }
    else {
      this.form = new FormGroup({
        firstName: new FormControl(data.item.firstName, Validators.required),
        lastName:  new FormControl(data.item.lastName, Validators.required),
        username: new FormControl(data.item.username, Validators.required),
      });
    }

  }

  add() {
    this.spinnerService.activate();
    this.adminService.add(this.form.value).subscribe(
      (res) => {
        Helpers.addToArray(res , this.data.array)
        this.snackbarService.openSnackBar('Administrateur ajouté avec succès', 'success');
        this.spinnerService.deactivate();
        this.matDialogRef.close();
      },
      err => {
        this.snackbarService.openSnackBar('Erreur lors de l\'ajout de l\'administrateur', 'fail');
        this.spinnerService.deactivate();
      }
    );
  }

  update() {
    let admin = {
      ...this.form.value ,
      id: this.data.item.id
    }
    this.spinnerService.activate();
    this.adminService.update(admin).subscribe(
      (res) => {
        Helpers.updateFields(this.form.value ,this.data.item )
        this.snackbarService.openSnackBar("L'administrateur a été modifié avec succès", 'success');
        this.spinnerService.deactivate();
        this.matDialogRef.close();
      },
      err => {
        this.snackbarService.openSnackBar('Erreur lors de la modification de l\'administrateur', 'fail');
        this.spinnerService.deactivate();
      }
    );
  }

  togglePasswordVisibility() {
    this.visibility = !this.visibility ;
  }
}
