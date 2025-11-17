import { Component } from '@angular/core';
import { Navbar } from '../../navbar/navbar';
import { BoutonRecherche } from '../bouton-recherche/bouton-recherche';
import { AjouterLivre } from '../ajouter-livre/ajouter-livre';
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
    {
      id: 1,
      title: 'La belle au bois dormant',
      author: 'Freida McFadden',
      isbn: '978-1234567890',
      publisher: 'Molière',
      price: '15€',
      summary:
        "Chaque jour, Millie fait le ménage dans la belle maison des Winchester, une riche famille new-yorkaise. Elle récupère aussi leur fille à l'école et prépare les repas avant d'aller se coucher dans sa chambre, au grenier. Pour la jeune femme, ce nouveau travail est une chance inespérée. L'occasion de repartir de zéro.",
      gender: 'Roman',
    },
    {
      id: 2,
      title: 'Fahrenheit 451',
      author: 'Ray Bradbury',
      isbn: '978-1451673319',
      publisher: 'Ballantine Books',
      price: '12€',
      summary:
        'Dans une société future, les livres sont interdits et brûlés par les pompiers. Montag, l’un d’eux, commence à remettre en question ce système oppressif, découvrant la puissance des mots et de la liberté intellectuelle.',
      gender: 'Science-fiction',
      },
    {
      id: 3,
      title: 'La femme de ménage',
      author: 'Sara Blaedel',
      isbn: '978-2709644561',
      publisher: 'JC Lattès',
      price: '18€',
      summary:
        'Louise découvre que sa mère, femme de ménage, menait une vie secrète. En enquêtant sur son passé, elle déterre des vérités dangereuses qui la mettent elle-même en péril.',
      gender: 'Thriller',
      },
    {
      id: 4,
      title: '1984',
      author: 'George Orwell',
      isbn: '978-0451524935',
      publisher: 'Secker & Warburg',
      price: '14€',
      summary:
        'Dans un monde totalitaire, Winston Smith tente de se rebeller contre Big Brother et une société où la liberté de pensée n’existe plus.',
      gender: 'Dystopie',
      },
    {
      id: 5,
      title: 'Le Petit Prince',
      author: 'Antoine de Saint-Exupéry',
      isbn: '978-0156012195',
      publisher: 'Gallimard',
      price: '10€',
      summary:
        'Un aviateur rencontre un petit prince venu d’une autre planète. Une fable poétique sur l’amitié, l’amour et la perte.',
      gender: 'Conte philosophique',
      },
  ];
}
