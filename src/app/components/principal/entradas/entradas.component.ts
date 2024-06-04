import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Entradas } from '../../../core/interfaces/interface.entradas';
import { CommonModule, formatDate } from '@angular/common';
import { EntradasService } from '../../../core/services/entradas.service';

@Component({
  selector: 'app-entradas',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './entradas.component.html',
  styleUrl: './entradas.component.css'
})
export default class EntradasComponent implements OnInit{

  _listaentradas: Entradas [] = [];
  entradas: Entradas [] = [];

  formEntrada!: FormGroup;

  currentDate: string = '';

  constructor( 
    private fb: FormBuilder,
    private _entradaService: EntradasService
  ) {
    this.currentDate = formatDate( new Date(), 'yyyy-MM-dd', 'es-VE');
    this.formEntrada = this.fb.group({
      identrada: [undefined],
      codigoentradaant:['', Validators.required],
      fecha: [this.currentDate, Validators.required],
      codigoherramienta: ['', Validators.required],
      descripcion: ['', Validators.required],
      cantidad: ['', Validators.required],
      notaentrega: ['', Validators.required],
      ordencompra: ['', Validators.required],
      observacion: ['', Validators.required],
      estatus: ['', Validators.required],
      totalstock: ['', Validators.required],
      ingresado: ['', Validators.required],
      provedor: ['', Validators.required],
      preciopedido: ['',Validators.required],
      precioestandar: ['', Validators.required],
      hora: ['', Validators.required],
      usuarioreg: ['', Validators.required],
      fechareg: ['', Validators.required],
      usuariomod: ['', Validators.required],
      fechamod: ['', Validators.required]

    })
      
  }

  ngOnInit(): void {

    this.listaEntradas();
    
  }

  async listaEntradas() {
    await this._entradaService.listaEntradas().subscribe(data => {
      this._listaentradas = data;
      console.log(this._listaentradas);
    })
  }
}
