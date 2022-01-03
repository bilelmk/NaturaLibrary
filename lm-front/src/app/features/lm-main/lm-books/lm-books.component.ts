import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {SpinnerService} from '../../../core/services/in-app/spinner.service';
import {MatDialog} from '@angular/material/dialog';
import {AlertService} from '../../../core/services/in-app/alert.service';
import {SnackbarService} from '../../../core/services/in-app/snackbar.service';
import {Book} from '../../../core/models/book';
import {BooksService} from '../../../core/services/http/books.service';
import {LmBooksModalComponent} from './lm-books-modal/lm-books-modal.component';

@Component({
  selector: 'app-lm-books',
  templateUrl: './lm-books.component.html',
  styleUrls: ['./lm-books.component.scss']
})
export class LmBooksComponent implements OnInit {

  public dataSource = new MatTableDataSource<Book>();
  displayedColumns = ['name', 'description' , 'image' , 'isAvailable' ,'buttons' ];
  books : Book[] = [] ;

  error = false ;
  loading = false ;

  @ViewChild(MatPaginator , {static: false}) set paginator(pager:MatPaginator) {
    if (pager) this.dataSource.paginator = pager;
  }

  constructor(private booksService: BooksService ,
              private spinnerService: SpinnerService ,
              private dialog: MatDialog,
              private alertService: AlertService,
              private snackbarService: SnackbarService ) { }

  ngOnInit() {
    // this.loading = true ;
    // this.spinnerService.activate()
    // this.adminsService.getAll().subscribe(
    //   res => {
    //     this.loading = false ;
    //     this.admins = res ;
    //     this.dataSource.data = this.admins
    //     this.spinnerService.deactivate()
    //   },
    //   error => {
    //     this.loading = false ;
    //     this.error = true ;
    //     this.spinnerService.deactivate()
    //   }
    // )
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

  // openDeleteAlert(admin: any) {
  //   this.alertService.showAlert(
  //     () => {
  //       this.delete(admin)
  //     }, "voulez-vous vraiment supprimer"
  //   )
  // }
  //
  // delete(admin: Admin) {
  //   this.spinnerService.activate()
  //   this.adminsService.delete(admin.id).subscribe(
  //     res => {
  //       this.snackbarService.openSnackBar('Admin supprimé avec succès','success') ;
  //       Helpers.deleteFromArray(admin , this.admins)
  //       this.dataSource.data = this.admins
  //       this.spinnerService.deactivate()
  //     },
  //     err => {
  //       this.snackbarService.openSnackBar('Erreur lors de la suppression', 'fail');
  //       this.spinnerService.deactivate()
  //     }
  //   )
  // }

  applyFilter(filterValue: string) {
    let toFilterList = [...this.books]
    toFilterList = toFilterList.filter(
      book => {
        return book.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1;
      }
    )
    this.dataSource.data = toFilterList;
  }

}
