import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) {}

  getReadBooks(userId: number): Observable<ReadBook[]> {
    return this.http.get<ReadBook[]>(`${this.apiUrl}/${userId}`);
  }

  addReadBook(bookId: number, userId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${bookId}/${userId}`, {});
  }

  removeReadBook(bookId: number, userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${bookId}/${userId}`);
  }

}
