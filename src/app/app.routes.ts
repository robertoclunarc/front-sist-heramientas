import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import PrincipalComponent from './components/principal/principal.component';

export const routes: Routes = [

    {path: '', 
    redirectTo: 'login', 
    pathMatch: 'full'},
    
    {path: 'login', 
    component: LoginComponent},

    {path: 'principal', component: PrincipalComponent,
    children: [
        
    {path: 'consultas',
    title: 'Consultas',
    loadComponent: () => import('./components/principal/consultas/consultas.component')},

    {path: 'herramientas',
    title: 'Herramientas',
    loadComponent: () => import('./components/principal/herramientas/herramientas.component')},

    {path: 'entradas',
    title: 'Entradas',
    loadComponent: () => import('./components/principal/entradas/entradas.component')},

    {path: 'solicitante',
    title: 'Solicitante',
    loadComponent: () => import('./components/principal/solicitantes/solicitantes.component')},

    {path: 'prestamos',
    title: 'Prestamos',
    loadComponent: () => import('./components/principal/prestamos/prestamos.component')},

    {path: 'devoluciones',
    title: 'Devoluciones',
    loadComponent: () => import('./components/principal/devoluciones/devoluciones.component')}

    ]}
];
