import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';
import { User } from './user';

export interface Review {
  id: number;
  bookId: number;
  book?: Book;  
  userId: number;
  user?: User; 
  note: number;
  titre: string; 
  avis: string;  
}

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private apiUrl = "http://localhost:5211/api/Reviews";

  constructor(private http: HttpClient) {}

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl);
  }

  getReview(id: number): Observable<Review> {
    return this.http.get<Review>(`${this.apiUrl}/${id}`);
  }

  getReviewsByBook(bookId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/ByBook/${bookId}`);
  }

  addReview(review: Review): Observable<Review> {
    return this.http.post<Review>(this.apiUrl, review);
  }

  updateReview(id: number, review: Review): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, review);
  }

  deleteReview(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}