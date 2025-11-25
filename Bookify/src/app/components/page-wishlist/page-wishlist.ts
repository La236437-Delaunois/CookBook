import { Component, OnInit } from '@angular/core';
import { Unlivre } from '../unlivre/unlivre';
import { WishlistService, Wishlist } from '../../services/wishlist';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-page-wishlist',
  imports: [Unlivre, CommonModule],
  templateUrl: './page-wishlist.html',
  styleUrl: './page-wishlist.css',
})
export class PageWishlist implements OnInit {
  wishlistBooks: Wishlist[] = [];
  username: string = '';

  constructor(private wishlistService: WishlistService, private cookieService: CookieService){}

  ngOnInit() {
    this.loadWishlist();
    this.username = this.cookieService.get('username');
  }

  loadWishlist() {
    this.wishlistService.getWishlist().subscribe({
      next: (data) => {
        this.wishlistBooks = data;
        console.log('Wishlist loaded:', data);
      },
      error: (error) => {
        console.error('Error loading wishlist:', error);
      }
    });
  }

  removeFromWishlist(book: Wishlist) {
    this.wishlistService.removeFromWishlist(book.bookId).subscribe({
      next: () => {
        console.log('Livre retiré de la wishlist');
        this.loadWishlist(); 
      },
      error: (error) => {
        console.error('Erreur:', error);
      }
    });
  }
}
