import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Wishlist {
  id: number;  
  bookId: number;     
  dateAdded: string;   
}

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private apiUrl = 'https://localhost:7079/api/Wishlist';

  constructor(private http: HttpClient) {}

  getWishlist(): Observable<Wishlist[]> {
    return this.http.get<Wishlist[]>(this.apiUrl);
  }

  addToWishlist(bookId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${bookId}`, {});
  }

  removeFromWishlist(bookId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${bookId}`);
  }
}