import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-unlivre',
  imports: [CommonModule],
  templateUrl: './unlivre.html',
  styleUrl: './unlivre.css',
})
export class Unlivre {
  @Input() book:any;

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
