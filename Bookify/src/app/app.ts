import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageArrive } from "./page-arrive/page-arrive";
import { Login } from './auth/login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PageArrive,Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Bookify';
}
