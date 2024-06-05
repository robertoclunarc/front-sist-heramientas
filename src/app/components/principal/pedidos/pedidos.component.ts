import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pedidos } from '../../../core/interfaces/interface.pedidos';
import { PedidosService } from '../../../core/services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export default class PedidosComponent  implements OnInit {

  _listapedidos: Pedidos [] = [];
  pedidos: Pedidos [] = [];

  formPedido!: FormGroup;

  currentDate: string = '';

  constructor(
    private fb: FormBuilder,
    private _pedidoService: PedidosService
   ) {

    this.currentDate = formatDate ( new Date(), 'yyyy,MM,dd', 'es-VE');
    this.formPedido = this.fb.group({
      idpedido: [undefined],
      idpedidoant: ['', Validators.required],
      idsolicitante: ['', Validators.required],
      idpersonalant: ['', Validators.required],
      fecha: [this.currentDate, Validators.required],
      destino: ['', Validators.required],
      despachado: ['', Validators.required],
      departamento: ['', Validators.required],
      observacion: ['', Validators.required],
      preciopedido: ['', Validators.required],
      hora: ['', Validators.required],
    })

  }

  ngOnInit(): void {
    this.listaPedidos();
  }

  async listaPedidos() {
    await this._pedidoService.listaPedidos().subscribe(data => {
      this._listapedidos = data;
      console.log(this._listapedidos)
    })
  }

}
