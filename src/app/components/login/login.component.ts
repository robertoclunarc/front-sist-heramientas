import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { IUsuarios } from '../../models/servicio-medico/usuarios.model';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  providers: [LoginService],  
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  model: any = {};
  user: IUsuarios = {};
  error: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: LoginService,
  ) { }

  ngOnInit(): void {
    this.authenticationService.logout();
  }
  
  loguear() {
    
		this.authenticationService.loguear(this.model.login , this.model.passw)
			.toPromise()
			.then(results => {
				
					this.user = results; 
          if (this.user && this.user.estatus != 'ACTIVO') {
            
            this.loading = false;
            this.error = 'Usuario Inactivo';
            return;
          }
          const currentUser = sessionStorage.getItem('currentUser');
          
          if (!currentUser) {
              this.loading = false;
              this.error = 'Usuario no Autenticado';
              return;
          }
          sessionStorage.setItem('sistemaActual', 'Sistema de Herramientas');
          this.router.navigate(['principal']);
				
			})
			.catch(err => { 
        this.error = err;
        this.loading = false;
        console.log(err) });
	}

}
