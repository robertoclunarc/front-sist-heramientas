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

  //GET
  _listaherramientas: Herramientas[] = [];
  formHerramientas!: FormGroup;
  id: number;
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
      this.herramientaPorId(this.id);
    }
    
    console.log(this.listaHerramientas)
  }

  listaHerramientas() {

    this._herramientasService.listaHerramienta().subscribe((data) => {
      this._listaherramientas = data;
    })
  }

  herramientaPorId(id: number) {
    this._herramientasService.getIdHerramienta(id).subscribe((data: Herramientas) => {
      this.formHerramientas.patchValue({

        _idherramienta: data.idherramienta,
        _fecha: data.fecha,
        _nombre: data.nombre,
        _marca: data.marca,
        _stock: data.stock,
        _ubicacion: data.ubicacion,
        _preciopedido: data.preciopedido,

      })
    });
  }

  agregarHerramienta() {

    const herramientas: Herramientas = {
      idherramienta: this.formHerramientas.value.idherramienta,
      fecha: this.formHerramientas.value.fecha,
      nombre: this.formHerramientas.value.nombre,
      marca: this.formHerramientas.value.marca,
      stock: this.formHerramientas.value.stock,
      ubicacion: this.formHerramientas.value.ubicacion,
      preciopedido: this.formHerramientas.value.precioPedido

    };

    if(this.id !== 0) {

      //Editar Herramienta
      herramientas.idherramienta = this.id;
      this._herramientasService.editarHerramienta(this.id, herramientas).subscribe(() => {
        console.log('Herramienta Actualizada');

      });

    } else {

      //Agregar Herramienta
      this._herramientasService.agregarHerramienta(herramientas).subscribe(() => {
        console.log('Herramienta Agregada');
      })
    }
    this.formHerramientas.reset();
  }

}