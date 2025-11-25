import { Component } from '@angular/core';
import { BoutonRecherche } from '../bouton-recherche/bouton-recherche';
import { AjouterLivre } from '../ajouter-livre/ajouter-livre';
import { Unlivre } from '../unlivre/unlivre';
import { CommonModule } from '@angular/common';
import { Book, BookService } from '../../services/book';
import { PopupLivreModal } from '../../services/popup-livre-modal';
import { PopupLivre } from '../popup-livre/popup-livre';

@Component({
  selector: 'app-page-livre',
  imports: [BoutonRecherche, AjouterLivre, Unlivre, CommonModule, PopupLivre],
  templateUrl: './page-livre.html',
  styleUrl: './page-livre.css',
})
export class PageLivre {
  books: Book[] = [];
  selectedBookForEdit: Book | null = null;

  constructor(
    private bookService: BookService,
    private popupLivre: PopupLivreModal
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getAllBooks().subscribe({
      next: (data) => {
        this.books = data;
        console.log('Books loaded:', this.books);
      },
      error: (error) => {
        console.error('Error loading books:', error);
      },
    });
  }

  reloadBooks() {
    this.bookService.getAllBooks().subscribe({
      next: (data) => {
        this.books = data;
        console.log('Books reloaded:', this.books);
      },
      error: (error) => {
        console.error('Error reloading books:', error);
      },
    });
  }

  editBook(book: Book) {
    this.popupLivre.openModal(book);
  }

  deleteBook(book: Book) {
    this.bookService.deleteBook(book.id).subscribe({
      next: () => {
        console.log('Livre supprimé avec succès');
        this.reloadBooks();
      },
      error: (error) => {
        console.error('Erreur lors de la suppression:', error);
        alert('Erreur lors de la suppression du livre');
      },
    });
  }
}
