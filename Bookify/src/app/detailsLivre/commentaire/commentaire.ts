import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-commentaire',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './commentaire.html',
  styleUrl: './commentaire.css',
})
export class Commentaire {
  note = 5;
  texte = '';
  commentaires = [
    {
      nom: 'MathildaDu77',
      note: 3,
      message: `Livre facile à lire, simple. Trop simple peut-être. Le fait quil y ait peu de détails lasse à la longue. 
      Cest à lire cependant, ce nest pas le roman du siècle mais cela divertit.`
    }
  ];

  ajouterCommentaire() {
    if (this.texte.trim() !== '') {
      this.commentaires.push({ nom: 'Utilisateur', note: this.note, message: this.texte });
      this.texte = '';
    }
  }
}
