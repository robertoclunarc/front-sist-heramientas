import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
//import { SidebarmenuComponent } from '../../shared/sidebarmenu/sidebarmenu.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})

export default class PrincipalComponent {}