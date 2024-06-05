import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Devoluciones } from '../interfaces/interface.devoluciones';

@Injectable({
  providedIn: 'root'
})
export class DevolucionesService {

  api_uri = environment.endpoint

  constructor(private http: HttpClient) { }

  listaDevoluciones(): Observable <Devoluciones[]> {
    return this.http.get<Devoluciones[]>(`${this.api_uri}/devoluciones/all`);
  }
}
