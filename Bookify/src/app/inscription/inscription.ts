import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User, UserService } from '../services/user';


@Component({
  selector: 'app-inscription',
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

  constructor(private userService: UserService,private routeur :Router) {}
    onSubmit() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas.';
      return;
    }

    this.errorMessage = '';
    console.log('Formulaire OK :');

    const users: User = {
      name: this.name,
      username: this.username,
      email: this.email,
      passwordHash: this.password
    };
    
    this.userService.createUser(users).subscribe({
      next: (createdUser) => {
        console.log('Utilisateur créé avec succès ');
        this.routeur.navigate(['/livre/lu']);
      },
      error: (error) => {
        console.error('Erreur lors de la création de l\'utilisateur :', error);
      }
    });
  }
}
 
