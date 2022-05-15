import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RequestSetor } from '../models/RequestSetor';
import { Observable, tap } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  url!: string;
  private readonly apiUrl = environment["apiUrl"];
  private readonly token?: string;

  constructor(
      private httpCliente: HttpClient) { 
    this.url = this.apiUrl + "setor";
  }

  adicionar(setor: RequestSetor): Observable<RequestSetor> {
    return this.httpCliente.post<RequestSetor>(this.url, setor);
  }

  getAll(): Observable<RequestSetor[]> {
    return this.httpCliente.get<RequestSetor[]>(this.url
    );
  }

  getAtivos(): Observable<RequestSetor[]> {
    return this.httpCliente.get<RequestSetor[]>(this.url + "/ativos");
  }

  atualizar(requestSetor: RequestSetor): Observable<RequestSetor> {

    return this.httpCliente.put<RequestSetor>(this.url, requestSetor);    
  }

  deletar(requestSetor: RequestSetor): Observable<RequestSetor> {
    return this.httpCliente.delete<RequestSetor>(this.url + '/' + requestSetor.id);    
  }

}
