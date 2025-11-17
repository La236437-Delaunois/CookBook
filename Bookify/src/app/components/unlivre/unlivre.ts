import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-unlivre',
  imports: [],
  templateUrl: './unlivre.html',
  styleUrl: './unlivre.css',
})
export class Unlivre {
  @Input() title: string = '';
}
