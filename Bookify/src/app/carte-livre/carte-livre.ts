import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-carte-livre',
  imports: [NgFor],
  standalone: true,
  templateUrl: './carte-livre.html',
  styleUrl: './carte-livre.css',
})
export class CarteLivre {
    @Input() title = '';
    @Input() genres: string[] = [];

}
