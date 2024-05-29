import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  public menuItems : any;

  ngOnInit(): void {

    this.menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'))
    .map((route) => {
      // Crear una copia del objeto 'route'
      const updatedRoute = { ...route };
  
      // Concatenar 'sistherramientas/' al valor de la propiedad 'path'
      updatedRoute.path = `${environment.urlDomain}/principal/${updatedRoute.path}`;
  
      // Devolver el objeto modificado
      return updatedRoute;
    });
    console.log(this.menuItems) 
  }


}
