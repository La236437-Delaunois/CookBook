import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LivresLu } from '../livres-lu/livres-lu';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isOpen = false;
  toggleMenu(force?: boolean){ this.isOpen = force ?? !this.isOpen; }
}
