import { Routes } from '@angular/router';
import { Login } from './login/login';
import { PageArrive } from './page-arrive/page-arrive';
import { LivresLu } from './livres-lu/livres-lu';
import { DetailsLivre } from './details-livre/details-livre';
import { Navbar } from './navbar/navbar';
import { PageLivre } from './components/page-livre/page-livre';
import { Inscription } from './inscription/inscription';

export const routes: Routes = [
    {path:'bienvenue', component: PageArrive},
    {path:'tempo', component: Navbar},
    {path:'login', component: Login},
    {path:'livre/details', component: DetailsLivre},
    {path: 'gestionlivre', component: PageLivre},
    {path:'livre/lu', component: LivresLu},
    {path:'inscription', component: Inscription},
    {path: '', pathMatch:'full', redirectTo: 'bienvenue'}
];
