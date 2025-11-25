import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);
  const isConnected = cookieService.check('isConnected');
  
  console.log('Guard exécuté - Cookie isConnected:', isConnected);
  console.log('Tous les cookies:', cookieService.getAll());
  const userId = cookieService.get('userId');
  
  if (isConnected && userId && userId !== '') {
    return true;
  } else {
    console.log('Redirection vers /login');
    router.navigate(['/login']);
    return false;
  }

};

