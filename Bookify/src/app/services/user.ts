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
  apiUrl = "https://localhost:7079/api/Users";

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<string> {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    return this.http.post('https://localhost:7079/login', formData, {
      responseType: 'text'
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
  
  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${userId}`);
  }

}
