import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  URL = "http://localhost:8082/book-service/api/books" ;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.URL);
  }

  getAllByUser(id): Observable<Book[]> {
    return this.http.get<Book[]>(this.URL + "/user/" + id);
  }

  add(book: any): Observable<Book> {
    return this.http.post<Book>(this.URL , book);
  }

  update(user: Book): Observable<Book> {
    return this.http.put<Book>(this.URL , user);
  }

  delete(id: number) {
    return this.http.delete(this.URL + "/" + id);
  }

  borrowBook(request) {
    return this.http.post(this.URL + "/borrow" , request);
  }

  returnBook(request) {
    return this.http.post(this.URL + "/return" , request);
  }
}
