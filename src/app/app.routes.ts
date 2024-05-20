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
    }, 
];
