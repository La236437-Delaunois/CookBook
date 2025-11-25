import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gender } from './gender';

export interface Wishlist {
  id: number;  
  userId: number;
  bookId: number;   
  title: string;
  author: string;
  isbn: string;
  description: string;
  genre: Gender;
  price: number;
  publisher: string;  
  dateAdded: string;   
}

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private apiUrl = 'http://localhost:5211/api/Wishlist';

  constructor(private http: HttpClient) {}

  getWishlist(): Observable<Wishlist[]> {
    return this.http.get<Wishlist[]>(`${this.apiUrl}/${1}`);
  }

  addToWishlist(bookId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${bookId}`, {});
  }

  removeFromWishlist(bookId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${bookId}`);
  }
}