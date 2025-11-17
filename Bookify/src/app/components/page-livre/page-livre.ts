import { Component } from '@angular/core';
import { Navbar } from "../../navbar/navbar";
import { BoutonRecherche } from "../bouton-recherche/bouton-recherche";
import { AjouterLivre } from "../ajouter-livre/ajouter-livre";
import { Unlivre } from '../unlivre/unlivre';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-livre',
  imports: [Navbar, BoutonRecherche, AjouterLivre, Unlivre, CommonModule],
  templateUrl: './page-livre.html',
  styleUrl: './page-livre.css',
})
export class PageLivre {
  books = [
    { id: 1, title: 'La belle au bois dormant' },
    { id: 2, title: 'Fahrenheit 451' },
    { id: 3, title: 'La femme de ménage' },
  ];
}
