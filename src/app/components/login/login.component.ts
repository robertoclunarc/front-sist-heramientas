import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IconDirective, IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IconDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginComponent implements OnInit {

  username: string = '';
  passw: string = '';

  constructor(
    private router: Router,
    private toastr: toastrService ) {}

  ngOnInit(): void {
    
  }

  login() {

    if (this.username == '' || this.passw == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return
    }

    this.router.navigate(['/principal'])
  }

}
