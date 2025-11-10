import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-infos',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './infos.html',
  styleUrl: './infos.css',
})
export class Infos {
  livre = {
    titre: 'La femme de ménage',
    auteur: 'Freida McFadden',
    editeur: 'Molière',
    prix: 15,
    resume: `Chaque jour, Millie fait le ménage dans la belle maison des Winchester, une riche famille new-yorkaise. 
    Elle récupère aussi leur fille à l’école et prépare les repas avant d’aller se coucher dans sa chambre, au grenier. 
    Pour la jeune femme, ce nouveau travail est une chance inespérée. L’occasion de repartir de zéro.`
  };

  lu = false;
}
