import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Devoluciones } from '../../../core/interfaces/interface.devoluciones';
import { DevolucionesService } from '../../../core/services/devoluciones.service';

@Component({
  selector: 'app-devoluciones',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './devoluciones.component.html',
  styleUrl: './devoluciones.component.css'
})
export default class DevolucionesComponent implements OnInit{

  _listadevoluciones: Devoluciones[] = [];
  devoluciones: Devoluciones [] = [];

  formDevoluciones!: FormGroup;
  
  currentDate: string = '';

  constructor(
    private fb: FormBuilder,
    private _devolucionesService: DevolucionesService
   ) {
    this.currentDate = formatDate( new Date(), 'yyyy-MM-dd', 'es-VE')
    this.formDevoluciones = this.fb.group({
      iddevolucion: [undefined],
      cod_dev_ant: ['', Validators.required],
      idpedido_ant: ['', Validators.required],
      idpedido: ['', Validators.required],
      codigoherramienta_ant: ['', Validators.required],
      idherramienta: ['', Validators.required],
      fecha: ['', Validators.required],
      cantidad: ['', Validators.required],
      observaciones: ['', Validators.required],
      estatus: ['', Validators.required],
      usuarioreg: ['', Validators.required],
      fechareg: ['', Validators.required],
      usuariomod: ['', Validators.required],
      fechamod: ['', Validators.required]
    })
  }

  ngOnInit(): void {
   
    this.listaDevoluciones();
    
  }

  async listaDevoluciones() {
    await this._devolucionesService.listaDevoluciones().subscribe(data => {
      this._listadevoluciones = data;
      console.log(this._listadevoluciones)
    })
  }

}
