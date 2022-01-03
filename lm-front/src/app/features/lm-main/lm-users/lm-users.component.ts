import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from '../../../core/services/in-app/alert.service';
import { SnackbarService } from '../../../core/services/in-app/snackbar.service';
import { Helpers } from '../../../shared/helpers/helpers';
import { User } from '../../../core/models/user';
import { UsersService } from '../../../core/services/http/users.service';
import { LmUsersModalComponent } from './lm-users-modal/lm-users-modal.component';

@Component({
  selector: 'app-lm-users',
  templateUrl: './lm-users.component.html',
  styleUrls: ['./lm-users.component.scss']
})
export class LmUsersComponent implements OnInit {

  public dataSource = new MatTableDataSource<User>();
  displayedColumns = ['firstname', 'lastname' , 'username' , 'level' , 'buttons' ];
  users : User[] = [] ;

  error = false ;
  loading = false ;

  @ViewChild(MatPaginator , {static: false}) set paginator(pager:MatPaginator) {
    if (pager) this.dataSource.paginator = pager;
  }

  constructor(private usersService: UsersService ,
              private spinnerService: SpinnerService ,
              private dialog: MatDialog,
              private alertService: AlertService,
              private snackbarService: SnackbarService ) { }

  ngOnInit() {
    this.loading = true ;
    this.spinnerService.activate()
    this.usersService.getAll().subscribe(
      res => {
        this.loading = false ;
        this.users = res ;
        this.dataSource.data = this.users
        this.spinnerService.deactivate()
      },
      error => {
        this.loading = false ;
        this.error = true ;
        this.spinnerService.deactivate()
      }
    )
  }

  openModal(item) {
    const dialogRef = this.dialog.open( LmUsersModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { item: item , array : this.users }
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.dataSource.data = this.users
      }
    );
  }

  openDeleteAlert(user: any) {
    this.alertService.showAlert(
      () => {
        this.delete(user)
      }, "voulez-vous vraiment supprimer"
    )
  }

  delete(user: User) {
    this.spinnerService.activate()
    this.usersService.delete(user.id).subscribe(
      res => {
        this.snackbarService.openSnackBar('Etudiant supprimé avec succès','success') ;
        Helpers.deleteFromArray(user , this.users)
        this.dataSource.data = this.users
        this.spinnerService.deactivate()
      },
      err => {
        this.snackbarService.openSnackBar('Erreur lors de la suppression', 'fail');
        this.spinnerService.deactivate()
      }
    )
  }

  applyFilter(filterValue: string) {
    let toFilterList = [...this.users]
    toFilterList = toFilterList.filter(
      user => {
        return user.username.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1;
      }
    )
    this.dataSource.data = toFilterList;
  }
}
