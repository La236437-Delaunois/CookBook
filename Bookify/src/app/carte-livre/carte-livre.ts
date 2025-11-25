import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carte-livre',
  standalone: true,
  templateUrl: './carte-livre.html',
  styleUrls: ['./carte-livre.css'], 
})
export class CarteLivre {
  @Input() title!: string;
  @Input() author!: string;
  @Input() genderName!: string;
}