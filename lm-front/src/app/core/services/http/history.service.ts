import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { History } from '../../models/history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  URL = "http://localhost:8083/api/histories" ;

  constructor(private http: HttpClient) { }

  getAll(): Observable<History[]> {
    return this.http.get<History[]>(this.URL);
  }

}
