import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent} from './principal.component';


const routes: Routes = [
  {
    path: 'serviciomedico',
    component: PrincipalComponent,
    data: {
      title: 'Principal',

    }
  },
  {
    path: '',
    component: PrincipalComponent,
    data: {
      title: 'Principal',

    }
  },
  {
    path: 'sistema-herramientas/principal',
    component: PrincipalComponent,
    data: {
      title: 'Principal',

    }
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalServicioMedicoRouting {}