import { Component } from '@angular/core';
import { UserService } from '../../services/user';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  errorMessage: string = '';
  users: any[] = [];
  constructor(
    private service: UserService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  login(username: string, password: string) {
    this.service.login(username, password).subscribe({
      next: (response) => {
        this.cookieService.deleteAll();

        this.cookieService.set('isConnected', '1');
        this.cookieService.set('userId', response.user.id);
        this.cookieService.set('username', response.user.username);
        console.log('Nouveaux cookies définis:', this.cookieService.getAll());
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
            console.error(
              'Erreur lors de la récupération des utilisateurs:',
              err
            );
          },
        });
      },
    });
  }
}
