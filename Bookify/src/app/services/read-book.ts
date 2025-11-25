import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

export interface ReadBook {
  id: number;
  bookId: number;
  title: string;
  author: string;
  isbn: string;
  price: number;
  publisher: string;
  dateLu: string;
  userName: string;
}

@Injectable({
  providedIn: 'root',
})
export class ReadBookService {
  private apiUrl = 'http://localhost:5211/api/LivreLu';

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getReadBooks(): Observable<ReadBook[]> {
    const userId = this.cookieService.get('userId');
    return this.http.get<ReadBook[]>(`${this.apiUrl}/${userId}`);
  }

  addReadBook(bookId: number): Observable<any> {
    const userId = this.cookieService.get('userId');
    return this.http.post(`${this.apiUrl}/${bookId}/${userId}`, {});
  }

  removeReadBook(bookId: number): Observable<any> {
    const userId = this.cookieService.get('userId');
    return this.http.delete(`${this.apiUrl}/${bookId}/${userId}`);
  }

}
