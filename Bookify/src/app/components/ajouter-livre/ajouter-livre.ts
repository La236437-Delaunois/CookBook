import { Component } from '@angular/core';
import { PopupLivreModal } from '../../services/popup-livre-modal';

@Component({
  selector: 'app-ajouter-livre',
  imports: [],
  templateUrl: './ajouter-livre.html',
  styleUrl: './ajouter-livre.css',
})
export class AjouterLivre {
  constructor(private popupLivreModal: PopupLivreModal) {}
  openModal(): void {
    this.popupLivreModal.openModal();
  }
}
