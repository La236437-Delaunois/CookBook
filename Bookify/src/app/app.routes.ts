import { Routes } from '@angular/router';
import { Login } from './login/login';
import { PageArrive } from './page-arrive/page-arrive';
import { LivresLu } from './livres-lu/livres-lu';
import { DetailsLivre } from './details-livre/details-livre';
import { Navbar } from './navbar/navbar';
import { PageLivre } from './components/page-livre/page-livre';

export const routes: Routes = [
    {path:'bienvenue', component: PageArrive},
    {path:'tempo', component: Navbar},
    {path:'login', component: Login},
    {path:'livre/details', component: DetailsLivre},
    {path:'livresLu', component: LivresLu},
    {path: 'gestionlivre', component: PageLivre},
    {path: '', pathMatch:'full', redirectTo: 'bienvenue'}
];
