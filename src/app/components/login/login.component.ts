import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { IconDirective, IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IconDirective
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginComponent implements OnInit {

  username!: string;
  passw!: string

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  login() {

    this.router.navigate(['/principal'])
  }

}
