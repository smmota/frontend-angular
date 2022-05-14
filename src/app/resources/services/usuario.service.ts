import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestUsuario } from '../models/RequestUsuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url!: string;
  private readonly apiUrl = environment["apiUrl"];
  private readonly token?: string;

  constructor(
    private httpCliente: HttpClient) { 
      this.url = this.apiUrl + "usuario";
  }

  adicionar(requestUsuario: RequestUsuario): Observable<RequestUsuario> {
    return this.httpCliente.post<RequestUsuario>(this.url, requestUsuario);
  }

  getAll(): Observable<RequestUsuario[]> {
    
    return this.httpCliente.get<RequestUsuario[]>(this.url);
  }

  atualizar(requestUsuario: RequestUsuario): Observable<RequestUsuario> {

    return this.httpCliente.put<RequestUsuario>(this.url, requestUsuario);    
  }

  deletar(requestUsuario: RequestUsuario): Observable<RequestUsuario> {
    return this.httpCliente.delete<RequestUsuario>(this.url + '/' + requestUsuario.id);    
  }
}
