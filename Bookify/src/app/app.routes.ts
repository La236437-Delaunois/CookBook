import { Routes } from '@angular/router';
import { authGuardGuard } from './guard/auth-guard-guard';
import { Login } from './login/login';
import { PageArrive } from './page-arrive/page-arrive';
import { LivresLu } from './livres-lu/livres-lu';
import { DetailsLivre } from './details-livre/details-livre';
import { Navbar } from './components/navbar/navbar';
import { PageLivre } from './components/page-livre/page-livre';
import { Inscription } from './components/inscription/inscription';
import { Acceuil } from './components/acceuil/acceuil';
import { AdminGuard } from './guard/admin.guard';
import { PageWishlist } from './components/page-wishlist/page-wishlist';


export const routes: Routes = [
    {path:'bienvenue', component: PageArrive},
    {path: 'gestionlivre', component: PageLivre, canActivate: [authGuardGuard,AdminGuard]},
    {path:'inscription', component: Inscription},
    {path:'tempo', component: Navbar}, //à supprimer plus tard
    {path:'login', component: Login},
    {path:'wishlist', component: PageWishlist, canActivate: [authGuardGuard]},
    {path:'livre/details/:id', component: DetailsLivre, canActivate: [authGuardGuard]},
    {path:'livre/lu', component: LivresLu, canActivate: [authGuardGuard]},
    {path:'acceuil', component: Acceuil, canActivate: [authGuardGuard]},
    {path: '', pathMatch:'full', redirectTo: 'bienvenue'}
];
