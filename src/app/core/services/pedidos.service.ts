import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedidos } from '../interfaces/interface.pedidos';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  api_uri = environment.endpoint

  constructor( private http: HttpClient ) { }

  listaPedidos(): Observable <Pedidos[]> {
    return this.http.get<Pedidos[]>(`${this.api_uri}/pedido/all`)
  }
}
