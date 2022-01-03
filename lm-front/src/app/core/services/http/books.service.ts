import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  URL = "/api/books" ;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.URL);
  }

  add(book: Book): Observable<Book> {
    return this.http.post<Book>(this.URL , book);
  }

  update(user: Book): Observable<Book> {
    return this.http.put<Book>(this.URL , user);
  }

  delete(id: number) {
    return this.http.delete(this.URL + "/" + id);
  }
}
