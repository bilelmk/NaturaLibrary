import { Component, Inject, OnInit } from '@angular/core';
import { UsersService } from '../../../../core/services/http/users.service';
import { User } from '../../../../core/models/user';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../../../core/services/in-app/snackbar.service';
import { BooksService } from '../../../../core/services/http/books.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Helpers} from '../../../../shared/helpers/helpers';

@Component({
  selector: 'app-lm-books-borrow',
  templateUrl: './lm-books-borrow.component.html',
  styleUrls: ['./lm-books-borrow.component.scss']
})
export class LmBooksBorrowComponent implements OnInit {

  users: User[] = []
  form: FormGroup;

  constructor(private usersService: UsersService,
              private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<LmBooksBorrowComponent>,
              private snackbarService: SnackbarService ,
              private booksService: BooksService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormControl(null, Validators.required),
    });

    this.usersService.getAll().subscribe(
      res => {
        this.users = res
      },
      error => {
        console.log(error)
      }
    )
  }

  save() {
    let request = {
      userId: this.form.value.user.id ,
      bookId: this.data.item.id
    }
    this.booksService.borrowBook(request).subscribe(
      res => {
        Helpers.updateFields(res ,this.data.item )
        this.snackbarService.openSnackBar("Opération réussite", 'success');
        this.matDialogRef.close();
      },error => {
        this.snackbarService.openSnackBar("Erreur lors de l'opération", 'fail');
      }
    )
  }
}
