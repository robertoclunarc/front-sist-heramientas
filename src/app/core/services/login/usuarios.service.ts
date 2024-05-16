import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Usuario } from '../../interfaces/interface.login';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({

  providedIn: 'root'

})

export class UsuariosService {

  api_uri = environment.endpoint

  constructor(private http: HttpClient) { }

  login(usuario: {user: string, passw: string}): Observable<any> {
    console.log(usuario);
    return this.http.post<any>(`${this.api_uri}/login/logear`, usuario)
      .pipe(
        catchError (this.handleError)
      )

  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del cliente o de la red
      console.error('Ocurrió un error:', error.error.message);
    } else {
      // El backend devolvió un código de respuesta no exitoso.
      console.error(`Backend retornó el código ${error.status}, cuerpo fue: ${error.error}`);
    }
    return throwError('Algo malo pasó; por favor, intenta nuevamente más tarde.');
  }
};
