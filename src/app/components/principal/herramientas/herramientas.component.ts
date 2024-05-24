import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HerramientasService } from '../../../core/services/herramientas.service';
import { Herramientas } from '../../../core/interfaces/interface.herramientas';

@Component({
  selector: 'app-herramientas',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export default class HerramientasComponent implements OnInit {
  formHerramientas!: FormGroup;
  mostrarBotones = false

  constructor(
    private fb: FormBuilder, private _herramientasService: HerramientasService) { }

  ngOnInit(): void {
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
  }

  nuevaHerramienta() {
    console.log(this.formHerramientas);
    this.mostrarBotones = true
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

    }

    this._herramientasService.agregarHerramienta(herramientas).subscribe(() => {
      console.log('Herramienta Agregada');
      
    })
    console.log('agregarHerramienta');
    

  }

  modificarHerramienta() {
    console.log('modificarHerramienta');
  }

  eliminarHerramienta() {
    console.log('eliminarHerramienta');
  }
}