import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-herramientas',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './herramientas.component.html',
  styleUrl: './herramientas.component.css'
})
export default class HerramientasComponent implements OnInit {

  constructor(private fb: FormBuilder, public formHerramientas:FormGroup) { }

  ngOnInit(): void {

    this.formHerramientas=this.fb.group({

      idherramienta: [''],
      fecha: ['', Validators.required],
      nombre: ['', Validators.required],
      marca: ['', Validators.required],
      stock: ['', Validators.required],
      status: ['', Validators.required],
      descripcion:['', Validators.required],
      observaciones: ['', Validators.required]
    })

    this.nuevaHerramienta(),
    this.modificarHerramienta(),
    this.eliminarHerramienta()

  }

  nuevaHerramienta() {

    console.log('nuevaHerramienta')
  }

  modificarHerramienta() {

    console.log('modificarHerramienta');
    
  }

  eliminarHerramienta() {

    console.log('eliminarHerramienta');
    
  }
  
}
