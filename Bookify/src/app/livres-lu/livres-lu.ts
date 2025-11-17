import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadBookService, ReadBook } from '../services/read-book';

@Component({
  selector: 'app-livres-lu',
  imports: [CommonModule],
  templateUrl: './livres-lu.html',
  styleUrl: './livres-lu.css',
})
export class LivresLu {
  livres: ReadBook[] = [];
  errorMessage: string = "";

  userId: number = 1;

  constructor(private service: ReadBookService) {}

  ngOnInit(): void {
    this.loadReadBooks();
  }

  loadReadBooks(): void {
    this.service.getReadBooks(this.userId).subscribe({
      next: (data) => {
        this.livres = data;
      },
      error: () => {
        this.errorMessage = "Impossible de charger vos lectures.";
      }
    });
  }

  removeBook(bookId: number): void {
    this.service.removeReadBook(bookId, this.userId).subscribe({
      next: () => this.loadReadBooks(),
      error: () => this.errorMessage = "Erreur lors de la suppression du livre."
    });
  }
}
