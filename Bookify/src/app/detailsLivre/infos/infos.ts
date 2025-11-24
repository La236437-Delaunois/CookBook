import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReadBookService } from '../../services/read-book';
import { WishlistService } from '../../services/wishlist';
import { BookService, Book } from '../../services/book';

@Component({
  selector: 'app-infos',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './infos.html',
  styleUrl: './infos.css',
})
export class Infos implements OnInit {
  lu: boolean = false;
  userId: number = 1;
  livre: Book = {
    id: 0,
    title: '',
    author: '',
    publisher: '',
    price: 0,
    description: '',
    isbn: '',
    genderId: 0
  };
  isInWishlist: boolean = false;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private readBookService: ReadBookService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit() {
    const livreId = Number(this.route.snapshot.paramMap.get('id'));
    
    if (livreId) {
      this.chargerLivre(livreId);
      this.verifierStatutLecture(livreId);
    }
  }

  chargerLivre(id: number) {
    this.bookService.getBookById(id).subscribe({
      next: (data) => {
        this.livre = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement du livre:', err);
        this.isLoading = false;
      }
    });
  }

  verifierStatutLecture(bookId: number) {
    this.readBookService.getReadBooks(this.userId).subscribe({
      next: (livresLus) => {
        this.lu = livresLus.some(livre => livre.bookId === bookId);
      },
      error: (err) => console.error('Erreur vérification lecture:', err)
    });
  }

  verifierWishlist(bookId: number) {
    this.wishlistService.getWishlist().subscribe({
      next: (wishlist) => {
        this.isInWishlist = wishlist.some(item => item.bookId === bookId);
      },
      error: (err) => console.error('Erreur vérification wishlist:', err)
    });
  }

  ajouterWishlist() {
    if (!this.livre.id) return;

    if (this.isInWishlist) {
      this.wishlistService.removeFromWishlist(this.livre.id).subscribe({
        next: () => {
          this.isInWishlist = false;
          console.log('Livre retiré de la wishlist');
        },
        error: (err) => console.error('Erreur lors du retrait de la wishlist:', err)
      });
    } else {
      // Ajouter à la wishlist
      this.wishlistService.addToWishlist(this.livre.id).subscribe({
        next: () => {
          this.isInWishlist = true;
          console.log('Livre ajouté à la wishlist');
        },
        error: (err) => console.error('Erreur lors de l\'ajout à la wishlist:', err)
      });
    }
  }

  onLuChange() {
    if (!this.livre.id) return;

    if (this.lu) {
      this.readBookService.addReadBook(this.livre.id, this.userId).subscribe({
        next: () => console.log('Livre ajouté aux livres lus'),
        error: (err) => {
          console.error('Erreur lors de l\'ajout aux livres lus:', err);
          this.lu = false; 
        }
      });
    } else {
      this.readBookService.removeReadBook(this.livre.id, this.userId).subscribe({
        next: () => console.log('Livre retiré des livres lus'),
        error: (err) => {
          console.error('Erreur lors du retrait des livres lus:', err);
          this.lu = true; 
        }
      });
    }
  }
}