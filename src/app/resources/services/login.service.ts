import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLogin } from '../models/RequestLogin';
import { ResponseLogin } from '../models/ResponseLogin';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly apiTokenUrl = environment["apiUrlToken"];

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
}
