import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id?: number;
  name: string;
  email: string;
  passwordHash: string;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = "http://localhost:5211/api/Users";

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:5211/api/Users/login', {
      Username: username,
      Password: password
    });
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
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

}
