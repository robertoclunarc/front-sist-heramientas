import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, lastValueFrom, throwError } from 'rxjs';
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

  async agregarHerramienta(herramienta: Herramientas): Promise<Herramientas> {
    try {
      return await lastValueFrom(
        this.http.post<Herramientas>(`${this.api_uri}/herramienta/insertar`, herramienta)
          .pipe(
            catchError(this.handleError)
          )
      );
    } catch (error) {
      console.error(error)
      return herramienta;      
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocurrió un error:', error.error.message);
    } else {
      console.error(`Backend retornó el código ${error.status}, cuerpo fue: ${error.error}`);
    }
    return throwError('Algo malo pasó; por favor, intenta nuevamente más tarde.');
  }


  getIdHerramienta(id: number): Observable<Herramientas> {
    return this.http.get<Herramientas>(`${this.api_uri}/herramienta/getid/${id}`)
  }

  editarHerramienta(id: number, herramienta: Herramientas) {
    return this.http.put<void>(`${this.api_uri}/herramienta/update/${id}`, herramienta).pipe()
  }
}
