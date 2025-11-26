import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Review, ReviewService } from '../../services/review';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user';

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

  reviews: Review[] = [];
  usernames: { [userId: number]: string } = {};
  currentUserId: number = 0;

  constructor(private reviewService: ReviewService, 
              private cookieService: CookieService, 
              private route: ActivatedRoute,
              private userService: UserService) {}

  ngOnInit(): void {
    this.currentUserId = Number(this.cookieService.get('userId'));
    this.loadReviews();
  }
  
  loadReviews(): void {
    const bookId = Number(this.route.snapshot.paramMap.get('id'));
    this.reviewService.getReviewsByBook(bookId).subscribe((reviews) => {
      this.reviews = reviews;
      
      reviews.forEach(review => {
        this.userService.getUserById(review.userId).subscribe({
          next: (user) => {
            this.usernames[review.userId] = user.username;
          },
          error: (err) => {
            console.error('Erreur:', err);
            this.usernames[review.userId] = 'Utilisateur inconnu';
          }
        });
      });
    });
  }

  createReview(ratingValue: number, titleValue: string, reviewText: string): void {
    const newReview: Review = {
      id: 0,
      bookId: Number(this.route.snapshot.paramMap.get('id')),
      userId: Number(this.cookieService.get('userId')), 
      note: ratingValue,
      titre: titleValue,
      avis: reviewText
    };
    
    this.reviewService.addReview(newReview).subscribe(() => {
      this.loadReviews();
      this.newReview = { 
        id: 0, 
        bookId: 0, 
        userId: 0, 
        note: 5, 
        titre: '', 
        avis: '' 
      };
    });
  }

  isAdmin(): boolean {
    return this.cookieService.get('username') === 'admin';
  }

  getUsernameOfReviewer(userId: number): string {
    return this.usernames[userId];
  }

  deleteReview(reviewId: number): void {
    this.reviewService.deleteReview(reviewId).subscribe(() => {
      this.loadReviews();
    });
  }
}