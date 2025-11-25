import { Component } from '@angular/core';
import { Unlivre } from '../unlivre/unlivre';
import { WishlistService, Wishlist } from '../../services/wishlist';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-page-wishlist',
  imports: [Unlivre, CommonModule],
  templateUrl: './page-wishlist.html',
  styleUrl: './page-wishlist.css',
})
export class PageWishlist {
  wishlistBooks: Wishlist[] = [];

  constructor(private wishlistService: WishlistService){}

  ngOnInit() {
    this.loadWishlist();
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
