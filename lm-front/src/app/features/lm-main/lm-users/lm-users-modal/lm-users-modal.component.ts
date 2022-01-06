import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../../../core/services/in-app/snackbar.service';
import { Helpers } from '../../../../shared/helpers/helpers';
import { UsersService } from '../../../../core/services/http/users.service';

@Component({
  selector: 'app-lm-users-modal',
  templateUrl: './lm-users-modal.component.html',
  styleUrls: ['./lm-users-modal.component.scss']
})
export class LmUsersModalComponent {

  form: FormGroup;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<LmUsersModalComponent>,
              private snackbarService: SnackbarService ,
              private usersService: UsersService,
              @Inject(MAT_DIALOG_DATA) public data: any) {

      this.form = new FormGroup({
        firstName: new FormControl(this.data.item.firstName, Validators.required),
        lastName:  new FormControl(this.data.item.lastName, Validators.required),
        level: new FormControl(this.data.item.level, Validators.required),
        username: new FormControl(this.data.item.username, Validators.required),
      });
  }

  update() {
    let user = {
      ...this.form.value ,
      id: this.data.item.id
    }
    this.spinnerService.activate();
    this.usersService.update(user).subscribe(
      (res) => {
        Helpers.updateFields(this.form.value ,this.data.item )
        this.snackbarService.openSnackBar("L'étudiant a été modifié avec succès", 'success');
        this.spinnerService.deactivate();
        this.matDialogRef.close();
      },
      err => {
        this.snackbarService.openSnackBar('Erreur lors de la modification', 'fail');
        this.spinnerService.deactivate();
      }
    );
  }

}
