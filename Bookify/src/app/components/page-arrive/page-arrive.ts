import {MatButtonModule} from '@angular/material/button';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-page-arrive',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './page-arrive.html',
  styleUrl: './page-arrive.css',
})
export class PageArrive {

}
