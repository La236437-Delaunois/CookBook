import { Component, OnInit } from '@angular/core';
import { PopupLivreModal } from '../../services/popup-livre-modal';
import { Book, BookService } from '../../services/book';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup-livre',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './popup-livre.html',
  styleUrl: './popup-livre.css',
})
export class PopupLivre implements OnInit {
  editingBook: Book | null = null;

  form = {
    title: '',
    author: '',
    isbn: '',
    price: 0,
    description: '',
    publisher: '',
    gender: ''
  };

  constructor(public modalService: PopupLivreModal, private bookService: BookService) {}

  ngOnInit(): void {
    this.modalService.editingBook$.subscribe(book => {
      this.editingBook = book;

      if (book) {
        this.form = { ...book }; // pré-remplir le formulaire
      } else {
        this.form = { title: '', author: '', price: 0, description: '', isbn: '', publisher: '', genderName: ''  }; // réinitialiser le formulaire
      }
    });
  }

  close() {
    this.modalService.closeModal();
  }

  submitForm() {
    if (this.editingBook) {
      console.log('Modifier livre', this.form);
      // appeler updateBook()
    } else {
      const newBook: Book = { ...this.form };
      this.bookService.addBook(newBook).subscribe({
        next: (addedBook) => {
          console.log('Livre ajouté avec succès:', addedBook);
          this.modalService.closeModal();
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout du livre:', error);
        }
      });
    }
    this.close();
  }
}
