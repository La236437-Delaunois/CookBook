import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livres-lu',
  imports: [CommonModule],
  templateUrl: './livres-lu.html',
  styleUrl: './livres-lu.css',
})
export class LivresLu {
   livres = [
    { titre: 'La belle au bois dormant', note: 4 },
    { titre: 'Fahrenheit 451', note: 3 },
    { titre: 'La femme de ménage', note: 2 }
  ];

}
