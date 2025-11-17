import { Component } from '@angular/core';
import { UserService } from '../services/user';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {
  errorMessage : string = "";

  constructor(private service: UserService,private router: Router) {}

  login(username: string, password: string) {
    this.service.login(username, password).subscribe({
      next: (token) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/acceuil']);
      },
      error: () => {
        this.errorMessage = "Mot de passe ou nom d'utilisateur incorrect";
      }
    });
  }
}
