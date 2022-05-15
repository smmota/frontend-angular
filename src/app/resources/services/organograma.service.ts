import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestColaborador } from '../models/RequestColaborador';

@Injectable({
  providedIn: 'root'
})
export class OrganogramaService {

  url!: string;
  private readonly apiUrl = environment["apiUrl"];
  private readonly token?: string;
  loading = false;
  
  constructor(
    private httpCliente: HttpClient) { 
      this.url = this.apiUrl + "organograma";
  }

  getAll(): Observable<RequestColaborador> {
    
    this.loading = true;
    return this.httpCliente.get<RequestColaborador>(this.url);

  }

}
