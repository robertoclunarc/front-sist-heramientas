import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HerramientasService } from '../../../core/services/herramientas.service';
import { Herramientas } from '../../../core/interfaces/interface.herramientas';
import { CommonModule } from '@angular/common';

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
  mostrarBotones = false

  constructor(
    private fb: FormBuilder, private _herramientasService: HerramientasService) { }

  ngOnInit(): void {

    this.listaHerramientas();
    
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

    console.log(this.listaHerramientas)
  }

  listaHerramientas() {

    this._herramientasService.listaHerramienta().subscribe((data) => {
      this._listaherramientas = data;
    })
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

    this._herramientasService.agregarHerramienta(herramientas).subscribe(() => {
      console.log('Herramienta Agregada');
    })

    this.limpiar();
  }

  modificarHerramienta() {
    console.log('modificarHerramienta');
  }

  limpiar() {
    this.formHerramientas.reset();
  }

}