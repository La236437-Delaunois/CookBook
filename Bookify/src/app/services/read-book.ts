import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LivreLu {
  id: number;
  bookId: number;
  dateLu: string;
}


@Injectable({
  providedIn: 'root',
})
export class ReadBookService {
  private apiUrl = 'https://localhost:7079/api/LivreLu';

  constructor(private http: HttpClient) {}

  getReadBooks(): Observable<LivreLu[]> {
    return this.http.get<LivreLu[]>(this.apiUrl);
  }

  addReadBook(bookId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${bookId}`, {});
  }

  removeReadBook(bookId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${bookId}`);
  }
}
