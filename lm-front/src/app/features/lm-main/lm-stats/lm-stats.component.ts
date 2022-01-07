import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { UsersService } from '../../../core/services/http/users.service';
import { BooksService } from '../../../core/services/http/books.service';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import { HistoryService } from '../../../core/services/http/history.service';

@Component({
  selector: 'app-lm-stats',
  templateUrl: './lm-stats.component.html',
  styleUrls: ['./lm-stats.component.scss']
})
export class LmStatsComponent implements OnInit {

  usersNumber = 0 ;
  booksNumber = 0 ;
  borrowedBooksNumber = 0 ;
  noneBorrowedBooksNumber = 0 ;
  borrowerUserNumber = 0 ;
  noneBorrowerUserNumber = 0 ;
  borrowedBookPerUser = 0 ;

  stats ;

  error = false ;
  loading = false ;

  // Pie Charts
  public pieChartOptions: ChartOptions = {responsive: true,};
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors: Color[] = [{
    backgroundColor: ['rgba(96,179,47,0.3)', 'green'],
    borderColor: ['green' , 'green']
  }];
  public userPieChartLabels: Label[] = ['Nombre des étudiants qui ont empruntés des livres',
                                      "Nombre des étudiants qui n'ont pas empruntés des livres"];
  public userPieChartData: SingleDataSet = [this.borrowerUserNumber, this.noneBorrowerUserNumber];
  public bookPieChartLabels: Label[] = ['Livres Empruntés', 'Livres Non Empruntés'];
  public bookPieChartData: SingleDataSet = [this.borrowedBooksNumber, this.noneBorrowedBooksNumber];

  // line charts
  public lineChartData: ChartDataSets[] = [{ data: [], label: 'Livre emprunté par jour' },];
  public lineChartLabels: Label[] = [];
  public lineChartColors: Color[] = [
    {
      borderColor: 'green',
      backgroundColor: 'rgba(96,179,47,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor(private usersService: UsersService ,
              private booksService: BooksService ,
              private spinnerService: SpinnerService ,
              private historyService: HistoryService) { }

  ngOnInit(): void {
    this.spinnerService.activate() ;
    forkJoin({
      users :this.usersService.getAll() ,
      books :this.booksService.getAll() ,
      stats :this.historyService.getStats()
    }).subscribe(
      res => {
        this.usersNumber = res.users.length ;
        this.booksNumber = res.books.length ;
        this.stats = res.stats ;
        // get borrowed books number
        let borrowedBooks = res.books.filter(book => {return book.borrowerUser != null;}) ;

        this.borrowedBooksNumber = borrowedBooks.length ;
        this.noneBorrowedBooksNumber = this.booksNumber - this.borrowedBooksNumber

        // get Borrower user
        let borrowerUser = borrowedBooks.map(book => {return book.borrowerUser.id;})
        this.borrowerUserNumber = new Set(borrowerUser).size
        this.noneBorrowerUserNumber = this.usersNumber - this.borrowerUserNumber ;

        this.borrowedBookPerUser = this.borrowedBooksNumber/this.usersNumber

        this.constructCharts()
        this.spinnerService.deactivate() ;
      },
      error => {
        this.spinnerService.deactivate() ;
        this.loading = false ;
        this.error = true ;
      }
    )
  }


  constructCharts(){
    this.userPieChartData = [this.borrowerUserNumber, this.noneBorrowerUserNumber];
    this.bookPieChartData = [this.borrowedBooksNumber, this.noneBorrowedBooksNumber];

    for(let stat of this.stats){
      this.lineChartData[0].data.push(stat[1])
      this.lineChartLabels.push(stat[0])
    }
  }

}
