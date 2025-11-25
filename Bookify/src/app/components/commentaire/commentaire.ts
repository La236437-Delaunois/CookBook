import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Review, ReviewService } from '../../services/review';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-commentaire',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './commentaire.html',
  styleUrl: './commentaire.css',
})
export class Commentaire {
  newReview: Review = {
      id: 0,
      bookId: 0,
      userId: 0,
      note: 0,
      titre: '',
      avis: ''
    };

  constructor(
    private reviewService: ReviewService, private cookieService: CookieService
  ) {}
  
  createReview(ratingValue: number, titleValue: string, reviewText: string): void {
    const newReview: Review = {
      id: 0,
      bookId: Number(this.cookieService.get('bookId')),
      userId: Number(this.cookieService.get('userId')), 
      note: ratingValue,
      titre: titleValue,
      avis: reviewText
    };
    
    this.reviewService.addReview(newReview).subscribe();
  }
}
