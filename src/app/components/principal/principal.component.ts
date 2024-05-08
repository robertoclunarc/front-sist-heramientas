import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NavbarComponent,
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})

export default class PrincipalComponent {}