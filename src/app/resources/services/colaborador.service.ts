import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestColaborador } from '../models/RequestColaborador';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  url!: string;
  private readonly apiUrl = environment["apiUrl"];
  private readonly token?: string;

  constructor(
    private httpCliente: HttpClient) { 
      this.url = this.apiUrl + "colaborador";
  }

  adicionar(colaborador: RequestColaborador): Observable<RequestColaborador> {
    return this.httpCliente.post<RequestColaborador>(this.url, colaborador);
  }

  getAll(): Observable<RequestColaborador[]> {
    
    return this.httpCliente.get<RequestColaborador[]>(this.url);
  }

  getAtivos(): Observable<RequestColaborador[]> {
    
    return this.httpCliente.get<RequestColaborador[]>(this.url + "/ativos");
  }

  atualizar(requestColaborador: RequestColaborador): Observable<RequestColaborador> {

    return this.httpCliente.put<RequestColaborador>(this.url, requestColaborador);    
  }

  deletar(requestColaborador: RequestColaborador): Observable<RequestColaborador> {
    return this.httpCliente.delete<RequestColaborador>(this.url + '/' + requestColaborador.id);    
  }

}
