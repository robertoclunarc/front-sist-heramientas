import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterOutlet,CommonModule, NavbarComponent,],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit {

  constructor( ) {
    console.log('Inicializo principal.component');
    
  }

  ngOnInit(): void {
    console.log('Inicio');
    
  }
}
