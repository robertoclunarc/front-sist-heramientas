import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, lastValueFrom } from 'rxjs';
import { Entradas } from '../interfaces/interface.entradas';

@Injectable({
  providedIn: 'root'
})
export class EntradasService {

  api_uri = environment.endpoint

  constructor( private http: HttpClient ) { }

  listaEntradas(): Observable <Entradas[]> {
    return this.http.get<Entradas[]>(`${this.api_uri}/entrada/all`);
  }

}
