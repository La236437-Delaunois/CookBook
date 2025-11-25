import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PopupLivreModal } from '../../services/popup-livre-modal';
import { Book, BookService, BookCreateDto } from '../../services/book';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Gender, GenderService } from '../../services/gender';

@Component({
  selector: 'app-popup-livre',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './popup-livre.html',
  styleUrl: './popup-livre.css',
})
export class PopupLivre implements OnInit {
  genders: Gender[] = [];

  editingBook: Book | null = null;

  form = {
    title: '',
    author: '',
    isbn: '',
    price: 0,
    description: '',
    publisher: '',
    genderId: 0,
  };

  @Output() bookAdded = new EventEmitter<void>();

  constructor(
    public modalService: PopupLivreModal,
    private bookService: BookService,
    private genderService: GenderService
  ) {}

  ngOnInit(): void {
    this.modalService.editingBook$.subscribe((book) => {
      this.editingBook = book;

      this.genderService.getAllGenders().subscribe({
        next: (genders: Gender[]) => {
          this.genders = genders;
        },
        error: (error: any) => {
          console.error('Erreur lors de la récupération des genres:', error);
        },
      });

      if (book) {
        this.form = {
          title: book.title,
          author: book.author,
          isbn: book.isbn,
          price: book.price,
          description: book.description,
          publisher: book.publisher,
          genderId: Number(book.genderId),
        };
      } else {
        this.form = {
          title: '',
          author: '',
          isbn: '',
          price: 0,
          description: '',
          publisher: '',
          genderId: 0,
        };
      }
    });
  }

  close() {
    this.modalService.closeModal();
  }

  submitForm() {
    if (this.form.genderId === 0 || !this.form.genderId) {
      alert('Veuillez sélectionner un genre');
      return;
    }

    console.log('Form valide:', this.form);

    if (this.editingBook) {
      console.log('Modifier livre', this.form);
      // TODO: updateBook()
    } else {
      const newBook: BookCreateDto = { ...this.form };
      this.bookService.addBook(newBook).subscribe({
        next: (addedBook) => {
          console.log('Livre ajouté avec succès:', addedBook);
          this.bookAdded.emit();
          this.modalService.closeModal();
        },
        error: (error) => {
          console.error("Erreur lors de l'ajout du livre:", error);
        },
      });
    }

    this.close();
  }
}
