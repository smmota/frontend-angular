import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseLogin } from '../models/ResponseLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginResponse!: ResponseLogin;

  public clear(): void {
    this.loginResponse.token = undefined;
  }

  public isAuthenticated(): boolean {    
    return Boolean(this.loginResponse?.token);
  }
}
