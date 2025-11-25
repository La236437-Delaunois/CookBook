import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from './review';
import { Gender } from './gender';

export interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  price: number;
  description: string;
  publisher: string;
  genderId: number;
  gender?: Gender;
  reviews?: Review[];
}

export interface BookCreateDto {
  title: string;
  author: string;
  isbn: string;
  price: number;
  description: string;
  publisher: string;
  genderId: number;
}

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'https://localhost:7079/api/Book';

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  addBook(book: BookCreateDto): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  updateBook(id: number, book: BookCreateDto): Observable<Book> {
    const updateData = { id, ...book };
    return this.http.put<Book>(`${this.apiUrl}/${id}`, updateData);
  }
}
