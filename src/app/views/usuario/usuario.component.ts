import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RequestUsuario } from 'src/app/resources/models/RequestUsuario';
import { UsuarioService } from 'src/app/resources/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuarioDetalhe!: FormGroup;
  requestUsuario: RequestUsuario = new RequestUsuario()
  usuarioList: RequestUsuario[] = [];
  
  constructor(
    private formBuilder: FormBuilder, 
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {

    this.getAll();

    this.usuarioDetalhe = this.formBuilder.group({
      id : [''],
      nome : [''],
      loginUser: [''],
      senha: [''],
      ativo: true
    }); 

  }

  adicionar() {
    console.log(this.usuarioDetalhe);
    this.requestUsuario.id = 0;
    this.requestUsuario.nome = this.usuarioDetalhe.value.nome;
    this.requestUsuario.loginUser = this.usuarioDetalhe.value.loginUser;
    this.requestUsuario.senha = this.usuarioDetalhe.value.senha;
    this.requestUsuario.ativo = this.usuarioDetalhe.value.ativo;      
    this.usuarioService.adicionar(this.requestUsuario).subscribe(res => {
      console.log(res);
      this.getAll();
    }, httpError => {
      console.log(httpError);
      });
}

  getAll() {
    this.usuarioService.getAll().subscribe(res => {      
    this.usuarioList = res; 

  }, httpError => {
    console.log("Erro ao obter os setores")
    // this.alertService.error(httpError.error.message);
  })
}

deletar(usuarioRequest: RequestUsuario) {
  debugger
  this.usuarioService.deletar(usuarioRequest).subscribe(res => {
    console.log(res);
    alert("Usuario removido com sucesso!");
    this.getAll();
  }, httpError => {
    console.log(httpError);
  });
}

editar(usuarioRequest: RequestUsuario) {
  this.usuarioDetalhe.controls['id'].setValue(usuarioRequest.id);
  this.usuarioDetalhe.controls['nome'].setValue(usuarioRequest.nome);
  this.usuarioDetalhe.controls['loginUser'].setValue(usuarioRequest.loginUser);
  this.usuarioDetalhe.controls['senha'].setValue(usuarioRequest.senha);
  this.usuarioDetalhe.controls['ativo'].setValue(usuarioRequest.ativo);
}

atualizar() {
  this.requestUsuario.id = this.usuarioDetalhe.value.id;
  this.requestUsuario.nome = this.usuarioDetalhe.value.nome;
  this.requestUsuario.loginUser = this.usuarioDetalhe.value.loginUser;
  this.requestUsuario.senha = this.usuarioDetalhe.value.senha;
  this.requestUsuario.ativo = this.usuarioDetalhe.value.ativo;
  
  this.usuarioService.atualizar(this.requestUsuario).subscribe(res => {
    console.log(res);      
    this.getAll();
    // this.alertService.success();
  }, httpError => {
    debugger
    console.log(httpError);
    // this.alertService.error(httpError.error.message);
    });
}

}
