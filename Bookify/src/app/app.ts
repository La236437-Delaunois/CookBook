import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageArrive } from "./page-arrive/page-arrive";
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PageArrive,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Bookify';
}
