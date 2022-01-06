import { Component, OnInit } from '@angular/core';
import { Book } from '../../../core/models/book';
import { BooksService } from '../../../core/services/http/books.service';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';

@Component({
  selector: 'app-lm-my-books',
  templateUrl: './lm-my-books.component.html',
  styleUrls: ['./lm-my-books.component.scss']
})
export class LmMyBooksComponent implements OnInit {

  books : Book[] = [] ;

  error = false ;
  loading = false ;

  constructor(private booksService: BooksService ,
              private spinnerService: SpinnerService ) { }

  ngOnInit() {
    let id = JSON.parse(sessionStorage.getItem('user')).id
    this.loading = true ;
    this.spinnerService.activate()
    this.booksService.getAllByUser(id).subscribe(
      res => {
        this.loading = false ;
        this.books = res ;
        this.spinnerService.deactivate()
      },
      error => {
        this.loading = false ;
        this.error = true ;
        this.spinnerService.deactivate()
      }
    )
  }
}
