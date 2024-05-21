import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SidebarComponent, RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  public menuItems : any;

  ngOnInit(): void {
    
    this.menuItems = routes
   .map((route) => route.children ??[])
    .flat()
    .filter((route) => route && route.path )
    .filter((route) => !route.path?.includes(':'));
    console.log(this.menuItems)
  }


}
