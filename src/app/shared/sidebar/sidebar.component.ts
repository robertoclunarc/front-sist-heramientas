import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public menuItems : any;

  ngOnInit(): void {
    /*
    this.menuItems = routes
   .map((route) => route.children ??[])
    .flat()
    .filter((route) => route && route.path )
    .filter((route) => !route.path?.includes(':'));
    console.log(this.menuItems)*/
  }
}
