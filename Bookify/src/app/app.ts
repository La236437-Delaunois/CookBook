import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageArrive } from "./page-arrive/page-arrive";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PageArrive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Bookify';
}
