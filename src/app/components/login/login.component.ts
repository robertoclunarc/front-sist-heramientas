import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Usuario } from '../../core/interfaces/interface.login';
import { UsuariosService } from '../../core/services/usuarios.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [UsuariosService]
})

export class LoginComponent implements OnInit {

  username: string = '';
  passw: string = '';
  currentUser: Usuario = {};
  constructor(
    private router: Router,
    private _usuariosService: UsuariosService,
    ) {}

  ngOnInit(): void {
    
  }

  async login() {
    try {
      if (this.username === '' || this.passw === '') {
        alert('Todos los campos son requeridos');
        return;
      }

      const usuario = {
        user: this.username,
        passw: this.passw
      };

      const response = await this._usuariosService.login(usuario).toPromise();
      
      if (response.status == 'OK') {
        console.log(response.usuario);
        this.currentUser = response.usuario;
        
        this.router.navigate(['sistherramientas/principal'])
      } else {
        alert(response.msj);
      }

    } catch (error) {
      console.error('Hubo un error durante el login:', error);
      alert('Hubo un problema durante el login. Por favor, intenta nuevamente más tarde.');
    }
  }
}
