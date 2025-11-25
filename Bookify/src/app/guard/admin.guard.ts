import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
constructor(private cookies: CookieService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    const username = this.cookies.get('username').trim().toLowerCase();
    const isAdmin = username === 'admin';

    if (!isAdmin) {
      return this.router.parseUrl('/acceuil');
    }
    return true;
  }
  
}
