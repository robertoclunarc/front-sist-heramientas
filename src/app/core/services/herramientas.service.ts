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

  agregarHerramienta(herramientas: Herramientas): Observable<void> {

    return this.http.post<void>(`${this.api_uri}/herramienta/`, herramientas);
  }
}
