import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
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

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:5211/api/book';

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
     return this.http.get<any[]>(this.apiUrl).pipe(
      map(items =>
        items.map(b => ({
          ...b,
          gender: { id: b.genderId, name: b.genderName }, // mapping objet
        }))
      )
    );
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

}
