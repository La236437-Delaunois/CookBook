import { Component } from '@angular/core';
import { Navbar } from "../../navbar/navbar";
import { BoutonRecherche } from "../bouton-recherche/bouton-recherche";
import { AjouterLivre } from "../ajouter-livre/ajouter-livre";

@Component({
  selector: 'app-page-livre',
  imports: [Navbar, BoutonRecherche, AjouterLivre],
  templateUrl: './page-livre.html',
  styleUrl: './page-livre.css',
})
export class PageLivre {

}
