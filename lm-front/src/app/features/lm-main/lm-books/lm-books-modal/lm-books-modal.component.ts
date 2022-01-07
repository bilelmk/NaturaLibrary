import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../../../core/services/in-app/snackbar.service';
import { BooksService } from '../../../../core/services/http/books.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Helpers } from '../../../../shared/helpers/helpers';

@Component({
  selector: 'app-lm-books-modal',
  templateUrl: './lm-books-modal.component.html',
  styleUrls: ['./lm-books-modal.component.scss']
})
export class LmBooksModalComponent {

  form: FormGroup;
  imageChangedEvent: any = '';
  croppedImage: any = null;
  request ;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<LmBooksModalComponent>,
              private snackbarService: SnackbarService ,
              private booksService: BooksService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    if(!this.data.edit) {
      this.form = new FormGroup({
        name: new FormControl("", Validators.required),
        description:  new FormControl("", Validators.required),
        author: new FormControl("", Validators.required),
        publishingDate: new FormControl(null, Validators.required),
      });
    }
    else {
      this.form = new FormGroup({
        name: new FormControl(this.data.item.name, Validators.required),
        description:  new FormControl(this.data.item.description, Validators.required),
        author: new FormControl(this.data.item.author, Validators.required),
        publishingDate: new FormControl(this.data.item.publishingDate, Validators.required),
      });
    }
  }


  onPickImage(event : any){
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.request = new FormData();
    // Preview
    this.croppedImage = event.base64;
    let fileToReturn = Helpers.base64ToFile(
      event.base64,
      this.imageChangedEvent.target.files[0].name,
    )
    this.request.append('image' ,   fileToReturn ) ;
  }

  add() {
    this.spinnerService.activate() ;

    let book = {
      ...this.form.value ,
      active: true
    }
    const blob = new Blob([JSON.stringify(book)], {type: 'application/json'});
    this.request.append('book', blob);

    this.booksService.add(this.request).subscribe(
      res => {
        Helpers.addToArray(res , this.data.array)
        this.snackbarService.openSnackBar('Livre ajouté avec succès', 'success');
        this.spinnerService.deactivate();
        this.matDialogRef.close();
      },
      error => {
        this.snackbarService.openSnackBar('Erreur lors de l\'ajout', 'fail');
        this.spinnerService.deactivate();
      }
    )
  }

  update() {
    this.spinnerService.activate() ;
    let book = {
      ...this.form.value ,
      id: this.data.item.id
    }
    const blob = new Blob([JSON.stringify(book)], {type: 'application/json'});
    if(!this.request) {
      this.request = new FormData();
      this.request.append('image' ,   null ) ;
    }
    this.request.append('book', blob);

    this.booksService.update(this.request).subscribe(
      res => {
        Helpers.updateFields(res , this.data.item)
        this.snackbarService.openSnackBar('Livre modifié avec succès', 'success');
        this.spinnerService.deactivate();
        this.matDialogRef.close();
      },
      error => {
        this.snackbarService.openSnackBar('Erreur lors de la modification', 'fail');
        this.spinnerService.deactivate();
      }
    )
  }


}
