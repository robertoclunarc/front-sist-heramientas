import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Usuario } from '../../core/interfaces/interface.login';
import { UsuariosService } from '../../core/services/login/usuarios.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [UsuariosService]
})

export class LoginComponent implements OnInit {

  username: string = '';
  passw: string = '';

  constructor(
    private router: Router,
    private _usuariosService: UsuariosService,
    ) {}

  ngOnInit(): void {
    
  }

  /*login() {

    try {
      if(this.username == '' || this.passw == '') {
        alert('Todos los campos son requeridos')
        return;
      }
  
      const usuario= {
        user: this.username,
        passw: this.passw
      }
  
      
      this._usuariosService.login(usuario).subscribe({
      next: (data) => {
        const token = data; //this.router.navigate(['/principal'])
        localStorage.setItem('jwt_token', token);
        console.log(data);
        //this.router.navigate(['sistherramientas/principal']);
        
      }
     })
    } catch (error) {
      console.error(error)
    }

    

    //this.router.navigate(['/principal'])
  }*/

  async login() {

    try {
      if(this.username == '' || this.passw == '') {
        alert('Todos los campos son requeridos')
        return;
      }
  
      const usuario= {
        user: this.username,
        passw: this.passw
      }
  
      
     /* await this._usuariosService.login(usuario)
      .toPromise()
      .then(result => {
        console.log(result);
      })*/
      console.log(usuario);
     
    } catch (error) {
      console.error(error)
    }

    

    //this.router.navigate(['/principal'])
  }

}
