import { Component, OnInit } from '@angular/core';
import { PopupLivreModal } from '../../services/popup-livre-modal';
import { Book, BookService, BookCreateDto } from '../../services/book';
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
    genderId: 0
  };

  constructor(
    public modalService: PopupLivreModal,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.modalService.editingBook$.subscribe(book => {
      this.editingBook = book;

      if (book) {
        this.form = {
          title: book.title,
          author: book.author,
          isbn: book.isbn,
          price: book.price,
          description: book.description,
          publisher: book.publisher,
          genderId: book.genderId
        };
      } else {
        this.form = {
          title: '',
          author: '',
          isbn: '',
          price: 0,
          description: '',
          publisher: '',
          genderId: 0
        };
      }
    });
  }

  close() {
    this.modalService.closeModal();
  }

  submitForm() {
    if (this.editingBook) {
      console.log('Modifier livre', this.form);
      // TODO: updateBook()
    } else {
      const newBook: BookCreateDto = { ...this.form };

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
