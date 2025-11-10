import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl = "http://localhost:5211/api/login";

  constructor(private http: HttpClient) { }

  login(login: string, password: string){
    return this.http.post<any>(this.apiUrl,{login,password});
  }
}
