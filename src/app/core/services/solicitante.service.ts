import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solicitantes } from '../interfaces/interface.solicitantes';

@Injectable({
  providedIn: 'root'
})
export class SolicitanteService {

  api_uri = environment.endpoint;

  constructor(private http: HttpClient) { }

  listaSolicitante( ): Observable <Solicitantes[]> {
    return this.http.get<Solicitantes[]>(`${this.api_uri}/solicitante/all`)
  }
}
