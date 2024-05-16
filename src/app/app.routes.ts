import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },    
    {
        path: 'sistherramientas/login', 
        component: LoginComponent
    },
    {
        path: 'sistherramientas', 
        component: LoginComponent
    },
];
