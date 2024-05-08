import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavbarComponent {

  public menuItems = routes
  .map(route => route.children ??[])
  .flat()

}
 