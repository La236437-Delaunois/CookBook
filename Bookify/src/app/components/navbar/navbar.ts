import { Component, HostListener } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
import { LivresLu } from '../livres-lu/livres-lu';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isOpen = false;
  toggleMenu(force?: boolean){ this.isOpen = force ?? !this.isOpen; }

   showLogout = false;

  constructor(private router: Router,private cookieService: CookieService) {}

  onLogout() {
        this.cookieService.set('isConnected','0');
        this.router.navigate(['/login']);
}
}
