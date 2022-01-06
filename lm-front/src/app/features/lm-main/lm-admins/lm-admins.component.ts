import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Admin } from '../../../core/models/admin';
import { MatPaginator } from '@angular/material/paginator';
import { AdminsService } from '../../../core/services/http/admins.service';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from '../../../core/services/in-app/alert.service';
import { Helpers } from '../../../shared/helpers/helpers';
import { LmAdminsModalComponent } from './lm-admins-modal/lm-admins-modal.component';
import { SnackbarService } from '../../../core/services/in-app/snackbar.service';

@Component({
  selector: 'app-lm-admins',
  templateUrl: './lm-admins.component.html',
  styleUrls: ['./lm-admins.component.scss']
})
export class LmAdminsComponent implements OnInit {

  public dataSource = new MatTableDataSource<Admin>();
  displayedColumns = ['firstname', 'lastname' , 'username' , 'buttons' ];
  admins : Admin[] = [] ;

  error = false ;
  loading = false ;

  @ViewChild(MatPaginator , {static: false}) set paginator(pager:MatPaginator) {
    if (pager) this.dataSource.paginator = pager;
  }

  constructor(private adminsService: AdminsService ,
              private spinnerService: SpinnerService ,
              private dialog: MatDialog,
              private alertService: AlertService,
              private snackbarService: SnackbarService ) { }

  ngOnInit() {
    this.loading = true ;
    this.spinnerService.activate()
    this.adminsService.getAll().subscribe(
      res => {
        this.loading = false ;
        this.admins = res ;
        this.dataSource.data = this.admins
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
    const dialogRef = this.dialog.open( LmAdminsModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { item: item , array : this.admins , edit: isEditMode}
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.dataSource.data = this.admins
      }
    );
  }

  openDeleteAlert(admin: any) {
    this.alertService.showAlert(
      () => {
        this.delete(admin)
      }, "voulez-vous vraiment supprimer"
    )
  }

  delete(admin: Admin) {
    this.spinnerService.activate()
    this.adminsService.delete(admin.id).subscribe(
      res => {
        this.snackbarService.openSnackBar('Admin supprimé avec succès','success') ;
        Helpers.deleteFromArray(admin , this.admins)
        this.dataSource.data = this.admins
        this.spinnerService.deactivate()
      },
        err => {
          this.snackbarService.openSnackBar('Erreur lors de la suppression', 'fail');
          this.spinnerService.deactivate()
      }
    )
  }

  applyFilter(filterValue: string) {
    let toFilterList = [...this.admins]
    toFilterList = toFilterList.filter(
      admin => {
        return admin.username.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1 ||
        admin.firstName.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1 ||
        admin.lastName.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1 ;
      }
    )
    this.dataSource.data = toFilterList;
  }

}
