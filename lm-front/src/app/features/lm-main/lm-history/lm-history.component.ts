import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from '../../../core/services/in-app/alert.service';
import { SnackbarService } from '../../../core/services/in-app/snackbar.service';
import { History } from '../../../core/models/history';
import { HistoryService } from '../../../core/services/http/history.service';

@Component({
  selector: 'app-lm-history',
  templateUrl: './lm-history.component.html',
  styleUrls: ['./lm-history.component.scss']
})
export class LmHistoryComponent implements OnInit {

  public dataSource = new MatTableDataSource<History>();
  displayedColumns = [ 'user' , 'book' , 'type', 'date' ];
  histories : History[] = [] ;

  error = false ;
  loading = false ;

  @ViewChild(MatPaginator , {static: false}) set paginator(pager:MatPaginator) {
    if (pager) this.dataSource.paginator = pager;
  }

  constructor(private historyService: HistoryService ,
              private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.loading = true ;
    this.spinnerService.activate()
    this.historyService.getAll().subscribe(
      res => {
        this.loading = false ;
        this.histories = res ;
        this.dataSource.data = this.histories
        this.spinnerService.deactivate()
      },
      error => {
        this.loading = false ;
        this.error = true ;
        this.spinnerService.deactivate()
      }
    )
  }

  applyFilter(filterValue: string) {
    let toFilterList = [...this.histories]
    toFilterList = toFilterList.filter(
      history => {
        return history.date.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1 ||
          history.type.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1 ||
          history.book.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1 ||
          history.user.username.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1;
      }
    )
    this.dataSource.data = toFilterList;
  }


}
