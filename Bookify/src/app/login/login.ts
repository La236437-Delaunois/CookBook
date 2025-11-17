import { Component } from '@angular/core';
import { User } from '../services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  errorMessage : string = "";

  constructor(private service: User,private router: Router) {}

  login(login: string, password: string){
    this.service.login(login,password).subscribe({
      next: ()=>{
        // Login OK
        this.router.navigate(['/accueil']);
      },
      error: (errorObject)=>{
        // Login KO
        this.errorMessage = errorObject.error.error;
      }
    });
  }
}
