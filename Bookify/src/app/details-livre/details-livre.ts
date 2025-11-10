import { Component } from '@angular/core';
import { Commentaire } from '../detailsLivre/commentaire/commentaire';
import { Infos } from '../detailsLivre/infos/infos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details-livre',
  imports: [Commentaire, Infos, FormsModule],
  standalone: true,
  templateUrl: './details-livre.html',
  styleUrl: './details-livre.css',
})
export class DetailsLivre {

}
