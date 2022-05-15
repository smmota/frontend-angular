import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestCargo } from '../models/RequestCargo';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  url!: string;
  private readonly apiUrl = environment["apiUrl"];
  private readonly token?: string;

  constructor(
    private httpCliente: HttpClient,
    public authService: AuthService) { 
      this.url = this.apiUrl + "cargo";
  }

  adicionar(setor: RequestCargo): Observable<RequestCargo> {
    return this.httpCliente.post<RequestCargo>(this.url, setor);
  }

  getAll(): Observable<RequestCargo[]> {
    var token = this.authService.loginResponse.token;

    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json; charset=utf-8');    
    // headers.append('Authorization', `Bearer ${token}`);
    // debugger
    // return this.httpCliente.get<RequestCargo[]>(this.url, {headers: headers}).pipe(retry(2), catchError(this.handleError));


    return this.httpCliente.post<RequestCargo[]>(this.url, 
      {
        headers : new Headers({
          'Content-Type': 'application/json',
          "Authorization": `Bearer ` + token
        })
      });
  }

  getAtivos(): Observable<RequestCargo[]> {
    
    return this.httpCliente.get<RequestCargo[]>(this.url + "/ativos");
  }

  atualizar(requestSetor: RequestCargo): Observable<RequestCargo> {

    return this.httpCliente.put<RequestCargo>(this.url, requestSetor);    
  }

  deletar(requestSetor: RequestCargo): Observable<RequestCargo> {
    return this.httpCliente.delete<RequestCargo>(this.url + '/' + requestSetor.id);    
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
