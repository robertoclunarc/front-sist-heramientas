import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HerramientasService } from '../../../core/services/herramientas.service';
import { Herramientas } from '../../../core/interfaces/interface.herramientas';
import { CommonModule, formatDate } from '@angular/common';
import { ActivatedRoute,} from '@angular/router';

declare const bootstrap: any;

@Component({
  selector: 'app-herramientas',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css'],
  
})
export default class HerramientasComponent implements OnInit {
 
  _listaherramientas: Herramientas[] = [];

  /*currentPage = 1;
  itemsPerPage = 10; // Adjust items per page as needed
  totalPages = 0;*/
  formHerramientas!: FormGroup;
  
  herramienta: Herramientas = {};
  operacion: string = 'Agregar Herramienta ';
  currentDate: string;


  constructor(
    private fb: FormBuilder,
    private _herramientasService: HerramientasService,
    private aRouter: ActivatedRoute,
    
    ) 
    
    { 
      this.currentDate = formatDate( new Date(), 'yyyy-MM-dd HH:mm', 'es-VE');
      this.formHerramientas = this.fb.group({
        idherramienta: [undefined],
        codigoant: ['', Validators.required],
        descripcion: ['', Validators.required],
        fecha: [this.currentDate, Validators.required],
        stock: ['', Validators.required],
        nombre: ['', Validators.required],
        marca: ['', Validators.required],
        modelo: ['', Validators.required],
        observaciones: ['', Validators.required],
        ubicacion: ['', Validators.required],
        observacioni: ['', Validators.required],
        cantidadminima: ['', Validators.required],
        estatus: ['', Validators.required],
        fcm: ['', Validators.required],
        umb: ['', Validators.required],
        numeroparte: ['', Validators.required],
        preciopedido: ['', Validators.required],
        sm: ['', Validators.required],
        cap: ['', Validators.required],
        precioestandar: ['', Validators.required],
      });

      
    }

  ngOnInit(): void {

    this.listaHerramientas();
  }

  async listaHerramientas() {

    await this._herramientasService.listaHerramienta().subscribe((data) => {
      this._listaherramientas = data;
      console.log(this._listaherramientas)
    })
    
  }

  async editar(data: Herramientas){
    await this.formHerramientas.reset();
    this.operacion="Actualizar Herramienta";
    console.log(data);
    this.herramienta = data;
    if (data.idherramienta!==undefined){
      this.formHerramientas.patchValue({
        codigoant: data.codigoant,
        descripcion: data.descripcion,
        fecha: data.fecha ? formatDate(data.fecha, 'YYYY-MM-dd', 'es-VE'): "",
        stock: data.stock,
        nombre: data.nombre,
        marca: data.marca,
        modelo: data.modelo,
        observaciones: data.observaciones,
        ubicacion: data.ubicacion,
        observacioni: data.observacioni,
        cantidadminima: data.cantidadminima,
        preciopedido: data.preciopedido,
        estatus: data.estatus
      })
    }
  }

  async agregarHerramienta() {

    const hrmta: Herramientas = this.formHerramientas.value;
    let response: any;
    
    if(this.herramienta.idherramienta != undefined && this.herramienta.idherramienta != null) {      
      await this._herramientasService.editarHerramienta(this.formHerramientas.value.idherramienta, hrmta)
      .toPromise()
      .catch(err =>{
        console.error(err);
      })

    } else {
      response = await this._herramientasService.agregarHerramienta(hrmta);      
    }
    this.listaHerramientas();
    this.cerrarModal()
;    this.formHerramientas.reset();   
    this.herramienta={};
  }

  nuevo () {
    this.formHerramientas.reset();
    this.formHerramientas.patchValue({
      fecha: this.currentDate,
    });
    this.herramienta = {};
    
  }

  cerrarModal() {
    const modalElement = document.getElementById('staticBackdrop');
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      modalInstance.hide();
    }
  }

}