import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './inscription.html',
  styleUrl: './inscription.css',
})
export class Inscription {
  name = '';
  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';

    onSubmit() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas.';
      return;
    }

    this.errorMessage = '';
    console.log('Formulaire OK :');


  }
}
 
