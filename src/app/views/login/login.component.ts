import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { AlertService } from 'src/app/resources/services/alert.service';
import { LoginService } from 'src/app/resources/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin!: RequestLogin;
  loginDetalhe!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService, 
    private alertService: AlertService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
    this.novo();
  }

  novo() {
    this.loginDetalhe = this.formBuilder.group({      
      loginUser : [''],
      senha: [''],      
    }); 
  }

  public doLogin() :void{    

    this.requestLogin.loginUser = this.loginDetalhe.value.loginUser;
    this.requestLogin.senha = this.loginDetalhe.value.senha;
    
    this.loginService.doLogin(this.requestLogin).subscribe(
      (data) => {
        this.router.navigate(['dashboard']) ;      
      },
      (httpError) => {      
        this.alertService.error(httpError.error.message);        
      }
    )
  }

}
