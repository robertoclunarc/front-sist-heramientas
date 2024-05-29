import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Herramientas } from '../interfaces/interface.herramientas';

@Injectable({
  providedIn: 'root'
})
export class HerramientasService {

  api_uri = environment.endpoint

  constructor(private http: HttpClient) { }

  listaHerramienta(): Observable<Herramientas[]> {
    return this.http.get<Herramientas[]>(`${this.api_uri}/herramienta/all`);
  }

  agregarHerramienta(herramientas: Herramientas): Observable<void> {

    return this.http.post<void>(`${this.api_uri}/herramienta/insertar`, herramientas);
  }

  getIdHerramienta(id: number): Observable<Herramientas> {
    return this.http.get<Herramientas>(`${this.api_uri}/herramienta/getid/${id}`)
  }

  editarHerramienta(id: number, herramienta: Herramientas): Observable<void> {
    return this.http.put<void>(`${this.api_uri}/update${id}`, herramienta)
  }
}
