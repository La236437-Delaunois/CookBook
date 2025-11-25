import { Routes } from '@angular/router';
import { authGuardGuard } from './auth-guard-guard';
import { Login } from './login/login';
import { PageArrive } from './page-arrive/page-arrive';
import { LivresLu } from './livres-lu/livres-lu';
import { DetailsLivre } from './details-livre/details-livre';
import { Navbar } from './components/navbar/navbar';
import { PageLivre } from './components/page-livre/page-livre';
import { Inscription } from './components/inscription/inscription';
import { Acceuil } from './components/acceuil/acceuil';

export const routes: Routes = [
    {path:'bienvenue', component: PageArrive},
    {path: 'gestionlivre', component: PageLivre},
    {path:'inscription', component: Inscription},
    {path:'tempo', component: Navbar}, //à supprimer plus tard
    {path:'login', component: Login},
    {path:'livre/details/:id', component: DetailsLivre, canActivate: [authGuardGuard]},
    {path:'livre/lu', component: LivresLu, canActivate: [authGuardGuard]},
    {path:'acceuil', component: Acceuil, canActivate: [authGuardGuard]},
    {path: '', pathMatch:'full', redirectTo: 'bienvenue'}
];
