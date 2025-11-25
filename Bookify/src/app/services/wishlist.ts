import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gender } from './gender';
import { CookieService } from 'ngx-cookie-service';

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

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getWishlist(): Observable<Wishlist[]> {
    const userId = this.cookieService.get('userId');
    console.log('UserId récupéré du cookie:', userId); // ✅ Debug
    console.log('Tous les cookies:', this.cookieService.getAll()); // ✅ Debug
    
    if (!userId || userId === '') {
      console.error('Aucun userId trouvé dans les cookies');
      throw new Error('Utilisateur non connecté');
    }
    
    const url = `${this.apiUrl}/${userId}`;
    console.log('URL de la requête:', url); // ✅ Debug
    
    return this.http.get<Wishlist[]>(url);
  }

  addToWishlist(bookId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${bookId}`, {});
  }

  removeFromWishlist(bookId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${bookId}`);
  }
}