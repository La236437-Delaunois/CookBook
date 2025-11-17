import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user';
import { BookService } from './book';

export interface Review{
  id: number;
  bookId: number;
  book?: BookService;
  userId: number;
  user?: UserService;
  note: number;
  titre?: string;
  avis: string;  
}

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  apiUrl = "http://localhost:7079/api/reviews";

  constructor(private http: HttpClient) {}

  addReview(review: Review): Observable<Review> {
    return this.http.post<Review>(this.apiUrl, review);
  }

  updateReview(id: number, review: Review): Observable<Review> {
    return this.http.put<Review>(`${this.apiUrl}/${id}`, review);
  }

  deleteReview(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
