import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLogin } from '../models/RequestLogin';
import { ResponseLogin } from '../models/ResponseLogin';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { RequestCargo } from '../models/RequestCargo';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly apiTokenUrl = environment["apiUrlToken"];
  // private readonly apiUrl = environment["apiUrl"];

  constructor(
    private httpCliente: HttpClient,
    public authService: AuthService
    ) { }

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.httpCliente.post<ResponseLogin>(
      this.apiTokenUrl, 
      requestLogin)
      .pipe(
          tap((loginResponse) => (this.authService.loginResponse = loginResponse) )
      );
  }

  // public listarCargos(responseLogin: ResponseLogin) {
  //   return this.httpCliente.get<Object>(this.apiUrl + "cargo", {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       "Authorization": `Bearer ${responseLogin.token}`
  //     })
  //   })
  // }

  // public inserirCargo(responseLogin: ResponseLogin) {
  //   return this.httpCliente.post<RequestCargo>(this.apiUrl + "cargo", {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       "Authorization": `Bearer ${responseLogin.token}`
  //     })
  //   })
  // }
}
