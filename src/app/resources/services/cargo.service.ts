import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestCargo } from '../models/RequestCargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  url!: string;
  private readonly apiUrl = environment["apiUrl"];
  private readonly token?: string;

  constructor(
    private httpCliente: HttpClient) { 
      this.url = this.apiUrl + "cargo";
  }

  adicionar(setor: RequestCargo): Observable<RequestCargo> {
    return this.httpCliente.post<RequestCargo>(this.url, setor);
  }

  getAll(): Observable<RequestCargo[]> {
    
    return this.httpCliente.get<RequestCargo[]>(this.url);
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
}
