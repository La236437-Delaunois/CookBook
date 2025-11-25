import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Book } from '../../services/book';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-unlivre',
  imports: [CommonModule],
  templateUrl: './unlivre.html',
  styleUrl: './unlivre.css',
})
export class Unlivre {
  @Input() book: any;
  @Input() showEditButton = true;
  @Input() showDeleteButton = true;
  @Input() deleteButtonText = 'Supprimer';
  @Input() deleteConfirmMessage?: string;

  @Output() editBookRequested = new EventEmitter<Book>();
  @Output() deleteBookRequested = new EventEmitter<Book>();
  @Output() removeFromWishlistRequested = new EventEmitter<Book>();

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  editBook() {
    this.editBookRequested.emit(this.book);
  }

  deleteBook() {
    const message = this.deleteConfirmMessage || 
                   `Êtes-vous sûr de vouloir supprimer "${this.book.title}" ?`;
    
    if (confirm(message)) {
      if (this.deleteButtonText === 'Retirer de la wishlist') {
        this.removeFromWishlistRequested.emit(this.book);
      } else {
        this.deleteBookRequested.emit(this.book);
      }
    }
  }

  getGenreName(): string {
    if (this.book.genderName) {
      return this.book.genderName;
    }
    
    if (this.book.genre?.name) {
      return this.book.genre.name;
    }
    
    return 'Genre non défini';
  }
}
