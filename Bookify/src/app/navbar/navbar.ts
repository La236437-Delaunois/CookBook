import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isOpen = false;
  toggleMenu(force?: boolean){ this.isOpen = force ?? !this.isOpen; }
}
