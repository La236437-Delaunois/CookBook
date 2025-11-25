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
  @Input() book:any;
  @Output() editBookRequested = new EventEmitter<Book>();

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  editBook() {
    this.editBookRequested.emit(this.book);
  }
}
