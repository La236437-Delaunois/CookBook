import { Component } from '@angular/core';
import { Navbar } from "../../navbar/navbar";
import { BoutonRecherche } from "../bouton-recherche/bouton-recherche";
import { AjouterLivre } from "../ajouter-livre/ajouter-livre";
import { Unlivre } from '../unlivre/unlivre';

@Component({
  selector: 'app-page-livre',
  imports: [Navbar, BoutonRecherche, AjouterLivre, Unlivre],
  templateUrl: './page-livre.html',
  styleUrl: './page-livre.css',
})
export class PageLivre {

}
