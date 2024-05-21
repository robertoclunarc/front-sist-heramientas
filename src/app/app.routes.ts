import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'sistherramientas/login', 
        component: LoginComponent
    },
    {
        path: 'sistherramientas', 
        component: LoginComponent,
    },

    {
        path: 'sistherramientas/principal', 
        component: PrincipalComponent,
        children:[

            {
                path: 'home',
                title: 'Home',
                loadComponent: () => import('./components/principal/home/home.component')
            },
            {
                path: 'consultas',
                title: 'Consultas',
                loadComponent: () => import('./components/principal/consultas/consultas.component')
            },
            {
                path: 'devoluciones',
                title: 'Devoluciones',
                loadComponent: () => import('./components/principal/devoluciones/devoluciones.component'),
            },
            {
                path: 'prestamos',
                title: 'Prestamos',
                loadComponent: () => import('./components/principal/prestamos/prestamos.component')
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

        ]
  }, 
        
];
