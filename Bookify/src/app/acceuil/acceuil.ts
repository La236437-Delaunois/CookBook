import { Component, OnInit } from '@angular/core';
import { CarteLivre } from '../carte-livre/carte-livre';
import { NgFor, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Book, BookService } from '../services/book';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [NgFor, AsyncPipe, CarteLivre],
  templateUrl: './acceuil.html',
  styleUrls: ['./acceuil.css'],
})
export class Acceuil implements OnInit {
  livres$!: Observable<Book[]>;
  constructor(private bookService: BookService) {}
  ngOnInit() {
    this.livres$ = this.bookService.getAllBooks();
  }
}
