import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from '../../../core/services/in-app/alert.service';
import { SnackbarService } from '../../../core/services/in-app/snackbar.service';
import { Book } from '../../../core/models/book';
import { BooksService } from '../../../core/services/http/books.service';
import { LmBooksModalComponent } from './lm-books-modal/lm-books-modal.component';
import { LmBooksBorrowComponent } from './lm-books-borrow/lm-books-borrow.component';
import { Helpers } from '../../../shared/helpers/helpers';

@Component({
  selector: 'app-lm-books',
  templateUrl: './lm-books.component.html',
  styleUrls: ['./lm-books.component.scss']
})
export class LmBooksComponent implements OnInit {

  public dataSource = new MatTableDataSource<Book>();
  booksArray = [] ;
  displayedColumns = ['image' ,'name', 'description' , 'author', 'publishingDate' , 'available' , 'borrower','buttons' ]; //, 'image' , 'isAvailable'
  books : Book[] = [] ;

  error = false ;
  loading = false ;

  role ;

  @ViewChild(MatPaginator , {static: false}) set paginator(pager:MatPaginator) {
    if (pager) this.dataSource.paginator = pager;
  }

  constructor(private booksService: BooksService ,
              private spinnerService: SpinnerService ,
              private dialog: MatDialog,
              private alertService: AlertService,
              private snackbarService: SnackbarService ) { }

  ngOnInit() {
    this.role = sessionStorage.getItem('role')
    this.loading = true ;
    this.spinnerService.activate()
    this.booksService.getAll().subscribe(
      res => {
        this.loading = false ;
        this.books = res ;
        this.dataSource.data = this.books
        this.booksArray = this.books ;
        this.spinnerService.deactivate()
      },
      error => {
        this.loading = false ;
        this.error = true ;
        this.spinnerService.deactivate()
      }
    )
  }

  openModal(isEditMode , item) {
    const dialogRef = this.dialog.open( LmBooksModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { item: item , array : this.books , edit: isEditMode}
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.dataSource.data = this.books
      }
    );
  }

  openBorrowModal(item) {
    const dialogRef = this.dialog.open( LmBooksBorrowComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { item: item }
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.dataSource.data = this.books
      }
    );
  }

  returnBook(item){
    this.spinnerService.activate()
    this.booksService.returnBook({bookId : item.id , userId: item.borrowerUser.id}).subscribe(
      res => {
        Helpers.updateFields(res ,item )
        this.snackbarService.openSnackBar("Opération réussite", 'success');
        this.spinnerService.deactivate()
      },
      err => {
        this.snackbarService.openSnackBar("Erreur lors de l'opération", 'fail');
        this.spinnerService.deactivate()
      }
    )
  }

  openDeleteAlert(book: any) {
    this.alertService.showAlert(
      () => {
        this.delete(book)
      }, "voulez-vous vraiment supprimer"
    )
  }

  delete(book: Book) {
    this.spinnerService.activate()
    this.booksService.delete(book.id).subscribe(
      res => {
        this.snackbarService.openSnackBar('Livre supprimé avec succès','success') ;
        Helpers.deleteFromArray(book , this.books)
        this.dataSource.data = this.books
        this.spinnerService.deactivate()
      },
      err => {
        this.snackbarService.openSnackBar('Erreur lors de la suppression', 'fail');
        this.spinnerService.deactivate()
      }
    )
  }

  applyFilter(filterValue: string) {
    let toFilterList = [...this.books]
    toFilterList = toFilterList.filter(
      book => {
        return book.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
        || book.description.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
        || book.publishingDate.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
        || book.author.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
      }
    )
    this.dataSource.data = toFilterList;
    this.booksArray = toFilterList ;
  }

}
