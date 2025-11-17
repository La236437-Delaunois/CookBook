import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  passwordHash: string;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class User {
  apiUrl = "http://localhost:8080/api/users";

  constructor(private http: HttpClient) { }

  login(login: string, password: string){
    return this.http.post<any>(this.apiUrl,{login,password});
  }

  getAllUsers(): Observable<User> {
    return this.http.get<User>(this.apiUrl);
  }

  getUserById(userId: number): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/${userId}`);
  }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(userId: number, user: User): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${userId}`, user);
  }
  
  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${userId}`);
  }

}
