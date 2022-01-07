import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../../dtos/login-request';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URL = "http://localhost:8082/user-service/api/users" ;

  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post<any>(this.URL + '/login' , loginRequest);
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.URL);
  }

  add(user: User): Observable<User> {
    return this.http.post<User>(this.URL , user);
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(this.URL , user);
  }

  delete(id: number) {
    return this.http.delete(this.URL + "/" + id);
  }
}
