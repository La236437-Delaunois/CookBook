import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class PopupLivreModal {
  private modalState = new BehaviorSubject<boolean>(false);
  private editingBook = new BehaviorSubject<Book | null>(null);

  modalState$ = this.modalState.asObservable();
  editingBook$ = this.editingBook.asObservable();

  openModal(book: Book | null = null): void {
    this.editingBook.next(book);
    this.modalState.next(true);
  }

  closeModal(){
    this.modalState.next(false);
  }
}
