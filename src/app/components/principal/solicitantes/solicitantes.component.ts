import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Solicitantes } from '../../../core/interfaces/interface.solicitantes';
import { SolicitanteService } from '../../../core/services/solicitante.service';

@Component({
  selector: 'app-solicitantes',
  standalone: true,
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './solicitantes.component.html',
  styleUrl: './solicitantes.component.css'
})
export default class SolicitantesComponent implements OnInit{

  _listaSolicitantes: Solicitantes [] = [];
  solicitantes: Solicitantes [] = [];

  formSolicitante!: FormGroup;

  currentDate: string = '';

  constructor(
    private fb: FormBuilder,
    private _solicitanteService: SolicitanteService
  ) {
    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'es-VE');
    this.formSolicitante = this.fb.group({
      idsolicitante: [undefined],
      idpersonalant: ['', Validators.required],
      nombre: ['', Validators.required],
      area: ['', Validators.required],
      departamento: ['', Validators.required]
    })
  }

  ngOnInit(): void {

    this.listaSolicitante();
  }

  async listaSolicitante( ) {
    await this._solicitanteService.listaSolicitante().subscribe(data => {
      this._listaSolicitantes = data;
      console.log(this._listaSolicitantes)
    })
  }

}
