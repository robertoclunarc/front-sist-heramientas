import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { environment } from '../environments/environment.development';

export const routes: Routes = [
    {
        path: '',
        redirectTo: `${environment.urlDomain}/login`,
        pathMatch: 'full'
    },
    {
        path: `${environment.urlDomain}`,
        redirectTo: `${environment.urlDomain}/login`,
        pathMatch: 'full'
    },
    {
        path: `${environment.urlDomain}/login`,
        component: LoginComponent
    },
    {
        path: `${environment.urlDomain}/principal`, 
        component: PrincipalComponent,
        children:[

            {
                path: 'home',
                title: 'Home',
                loadComponent: () => import('./components/principal/home/home.component')
            },
            {
                path: 'devoluciones',
                title: 'Devoluciones',
                loadComponent: () => import('./components/principal/devoluciones/devoluciones.component'),
            },
            {
                path: 'pedidos',
                title: 'Pedidos',
                loadComponent: () => import('./components/principal/pedidos/pedidos.component')
            },
            {
                path: 'entradas',
                title: 'Entradas',
                loadComponent: () => import('./components/principal/entradas/entradas.component')
            },
            {
                path: 'solicitantes',
                title: 'Solicitantes',
                loadComponent: () => import('./components/principal/solicitantes/solicitantes.component')
            },
            {
                path: 'herramientas',
                title: 'Herramientas',
                loadComponent: () => import('./components/principal/herramientas/herramientas.component')
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }

        ]
  }, 
        
];
