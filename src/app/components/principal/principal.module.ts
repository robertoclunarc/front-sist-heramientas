import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { PrincipalComponent } from './principal.component';
import { PrincipalServicioMedicoRouting } from './principal.routing';

@NgModule({
  imports: [
    FormsModule,
    PrincipalServicioMedicoRouting,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ PrincipalComponent ]
})
export class DashboardModule { }
