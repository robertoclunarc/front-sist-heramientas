import { Component} from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ConsultasService } from '../../services/servicio_medico/consultas.service';
import { MedicosService } from '../../services/servicio_medico/medicos.service';
import { MenusService } from '../../services/servicio_medico/menu_serviciomedico.service';
import { IUsuarios } from '../../models/servicio-medico/usuarios.model';
import { ItotalAtenciones } from '../../models/servicio-medico/medicos.model';
import { environment } from '../../../environments/environment';
 
@Component({
  selector: 'app-layout-sistema',
  templateUrl: 'layout-sistema.component.html'
})
export class LayoutSistemaComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  public totalAtenciones: any;
  sistemaActual: string;
  private user: IUsuarios={};
  soportesUser: IUsuarios[]=[];
  nroMensajes: number=0;
  claseMensaje: string;
  imagenUser: string="";
  totalesAtenciones: ItotalAtenciones[]=[];
  totalGlobalAtenciones: number;
  modoOscuro: boolean;
  nameSistem: string;
  constructor(
    private router: Router,
    private srvLoginService: LoginService,
    private srvConsultaMedica: ConsultasService, 
    private srvMedicos: MedicosService,
    private srvMenu: MenusService,
    ) {
        this.nameSistem = environment.nameSistema;
        if (this.nroMensajes>0)
          this.claseMensaje="badge badge-pill badge-danger";
        else
          this.claseMensaje="badge badge-pill badge-info";

        if (sessionStorage.currentUser){ 
          this.user=JSON.parse(sessionStorage.currentUser);
          
          srvConsultaMedica.consultasCount(this.user.login).toPromise().then(resutl => { this.totalAtenciones=resutl});        
          this.sistemaActual=sessionStorage.sistemaActual;        
          
          this.imagenUser= this.user.login ? `assets/img/avatars/${this.user.login}.bmp` : "";
          
          if (this.imagenUser!=="")
            if (this.imageExists(this.imagenUser)==false)
              this.imagenUser= 'assets/img/avatars/desconocido.png';

          this.srvMedicos.contadorAtenciones()
          .toPromise()
          .then( result => {
            
            this.totalesAtenciones = result; 
            
            this.srvMedicos.contadorTotalAtenciones().toPromise().then(resutl => { this.totalGlobalAtenciones=resutl});

            this.srvLoginService.usuariosFiltrados(61).toPromise().then(resutl => { this.soportesUser=resutl});
            
          });
          
        }else{
          this.router.navigate(["/"]);
        }        
      }

  ngOnInit(): void {
    this.navItems = [];
    
    if (sessionStorage.modoOscuro==undefined || sessionStorage.modoOscuro=='Off'){
      sessionStorage.setItem('modoOscuro', "Off");
      sessionStorage.setItem('classTable', "table table-striped");
      this.modoOscuro=false;
    }
    else {
      sessionStorage.setItem('modoOscuro', "On");
      sessionStorage.setItem('classTable', "table table-striped table-dark");
      this.modoOscuro=true;
    }     
    
    this.menusUsuario(this.user.login);
           
  }  
    
  private async menusUsuario(user: string) {    
		return await this.srvMenu.menusUser(user)
			.toPromise()
      .then(results => {
				this.navItems = results;
			})
			.catch(err => { console.log(err) });
	}

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }   

  cambioClase(){
    
    if (this.modoOscuro){
      sessionStorage.setItem('modoOscuro', "On")
      sessionStorage.setItem('classTable', "table table-striped table-dark")
    }
    else{
      sessionStorage.setItem('modoOscuro', "Off")
      sessionStorage.setItem('classTable', "table table-striped")
    }
    setTimeout(() => {
      this.reloadCurrentRoute();
    }, 1000);
    
  }  

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        //console.log(currentUrl);
    });
  }

  Logout(){
    this.srvLoginService.logout();
    this.router.navigate(["login"]);
  }

  imageExists(url): boolean {
    let http = new XMLHttpRequest(); 
    http.open('HEAD', url, false); 
    http.send(); 
    //console.log(http.status);
    if (http.status!=404)
      return true;
    else
      return false;
  }
}
