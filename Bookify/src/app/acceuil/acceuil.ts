import { Component } from '@angular/core';
import { CarteLivre } from '../carte-livre/carte-livre';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [NgFor,CarteLivre],
  templateUrl: './acceuil.html',
  styleUrl: './acceuil.css',
})
export class Acceuil {
 livres = [
  {
    title: "La belle au bois dormant",
    genres: ["Fantasy", "Roman"]
  },
  {
    title: "Fahrenheit 451",
    genres: ["Sci-fi", "Roman"]
  },
  {
    title: "La femme de ménage",
    genres: ["Thriller", "Policier"]
  }
];

}
