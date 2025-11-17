import { Component, OnInit } from '@angular/core';
import { PopupLivreModal } from '../../services/popup-livre-modal';
import { Book } from '../../services/book';
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
    price: 0,
    description: ''
  };

  constructor(public modalService: PopupLivreModal) {}

  ngOnInit(): void {
    this.modalService.editingBook$.subscribe(book => {
      this.editingBook = book;

      if (book) {
        this.form = { ...book }; // pré-remplir le formulaire
      } else {
        this.form = { title: '', author: '', price: 0, description: '' };
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
      console.log('Ajouter livre', this.form);
      // appeler createBook()
    }
    this.close();
  }
}
