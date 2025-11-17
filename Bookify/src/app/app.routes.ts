import { Routes } from '@angular/router';
import { Login } from './login/login';
import { PageArrive } from './page-arrive/page-arrive';
import { LivresLu } from './livres-lu/livres-lu';
import { DetailsLivre } from './details-livre/details-livre';
import { Navbar } from './navbar/navbar';

export const routes: Routes = [
    {path:'bienvenue', component: PageArrive},
    {path:'tempo', component: Navbar},
    {path:'login', component: Login},
    {path:'livre/details', component: DetailsLivre},
    {path:'livre/lu', component: LivresLu},
    {path: '', pathMatch:'full', redirectTo: 'bienvenue'}
];
