import { Component, OnInit, numberAttribute } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HerramientasService } from '../../../core/services/herramientas.service';
import { Herramientas } from '../../../core/interfaces/interface.herramientas';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-herramientas',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export default class HerramientasComponent implements OnInit {

  _listaherramientas: Herramientas[] = [];
  currentPage = 1;
  itemsPerPage = 10; // Adjust items per page as needed
  totalPages = 0;
  formHerramientas!: FormGroup;
  id: number;
  herramienta: Herramientas = {};
  operacion: string = 'Agregar Herramienta '

  constructor(
    private fb: FormBuilder,
    private _herramientasService: HerramientasService,
    private aRouter: ActivatedRoute,
    ) 
    
    { 
      this.formHerramientas = this.fb.group({
        idherramienta: [''],
        fecha: ['', Validators.required],
        nombre: ['', Validators.required],
        marca: ['', Validators.required],
        stock: ['', Validators.required],
        ubicacion: ['', Validators.required],
        precioPedido: ['', Validators.required],
        status: ['', Validators.required], 
        descripcion: ['', Validators.required],
        observaciones: ['', Validators.required]
      });

      this.id = Number (this.aRouter.snapshot.paramMap.get('idherramienta'));
    }

  ngOnInit(): void {

    this.listaHerramientas();
    
    if(this.id !== 0) {
      this.operacion = 'Editar Herramienta ';
      
    }
    
    console.log(this.listaHerramientas)
  }

  listaHerramientas() {

    this._herramientasService.listaHerramienta().subscribe((data) => {
      this._listaherramientas = data;
    })
  }

  /*herramientaPorId(id: number) {
    this._herramientasService.getIdHerramienta(id).subscribe((data: Herramientas) => {
      this.formHerramientas.patchValue({

        idherramienta: data.idherramienta,
        fecha: data.fecha,
        nombre: data.nombre,
        marca: data.marca,
        stock: data.stock,
        ubicacion: data.ubicacion,
        preciopedido: data.preciopedido,

      })
    });
  }*/

  editar(data: Herramientas){
    this.operacion="Actualizar Herramienta"
    console.log(data);
    if (data.idherramienta){
      this.formHerramientas.patchValue({

        nombre: data.nombre,
        marca: data.marca,
        stock: data.stock,
        ubicacion: data.ubicacion,
        preciopedido: data.preciopedido,

      })
    }
  }

  agregarHerramienta() {

    const herramienta: Herramientas = {
      idherramienta: this.formHerramientas.value.idherramienta,
      fecha: this.formHerramientas.value.fecha,
      nombre: this.formHerramientas.value.nombre,
      marca: this.formHerramientas.value.marca,
      stock: this.formHerramientas.value.stock,
      ubicacion: this.formHerramientas.value.ubicacion,
      preciopedido: this.formHerramientas.value.precioPedido

    };

    if(herramienta.idherramienta !== undefined) {

      //Editar Herramienta
      
      this._herramientasService.editarHerramienta(herramienta.idherramienta, herramienta).subscribe(() => {
        console.log('Herramienta Actualizada');
      this.formHerramientas.reset();

      });

    } else {

      //Agregar Herramienta
      this._herramientasService.agregarHerramienta(herramienta).subscribe(() => {
        console.log('Herramienta Agregada');
      this.formHerramientas.reset();
        
      })

    }
   
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

}