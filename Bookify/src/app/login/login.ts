import { Component } from '@angular/core';
import { UserService } from '../services/user';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {
  errorMessage : string = "";
  users: any[] = [];
  constructor(private service: UserService, private router: Router, private cookieService: CookieService) {}

  login(username: string, password: string) {
    this.service.login(username, password).subscribe({
      next: () => {
        this.cookieService.set('isConnected','1');
        this.router.navigate(['/acceuil']);
      },
      error: () => {
        this.errorMessage = "Mot de passe ou nom d'utilisateur incorrect";
        this.service.getAllUsers().subscribe({
          next: (data) => {
            this.users = data;
            console.log('Utilisateurs en DB:', this.users);
          },
          error: (err) => {
            console.error('Erreur lors de la récupération des utilisateurs:', err);
          }
        });
      }
    });
  }
}
