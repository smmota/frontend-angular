import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { RequestSetor } from 'src/app/resources/models/RequestSetor';
import { AlertService } from 'src/app/resources/services/alert.service';
import { SetorService } from 'src/app/resources/services/setor.service';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.scss']
})
export class SetorComponent implements OnInit {

  setorDetalhe!: FormGroup;
  requestSetor: RequestSetor = new RequestSetor()
  setorList: RequestSetor[] = [];

  constructor(
    private formBuilder: FormBuilder, 
    private setorService: SetorService,
    private alertService: AlertService    
    ) { }

  ngOnInit(): void {

    this.getAll();
    this.novo();   
  }

  novo() {
    this.setorDetalhe = this.formBuilder.group({
      id : [''],
      descricao : [''],
      atividade: [''],
      ativo: true
    });  
  }

    adicionar() {
      console.log(this.setorDetalhe);
      this.requestSetor.id = 0;
      this.requestSetor.descricao = this.setorDetalhe.value.descricao;
      this.requestSetor.atividade = this.setorDetalhe.value.atividade;
      this.requestSetor.ativo = this.setorDetalhe.value.ativo;      
      this.setorService.adicionar(this.requestSetor).subscribe(res => {
        console.log(res);
        this.getAll();
      }, httpError => {
        console.log(httpError);
        });
  }

    getAll() {
      this.setorService.getAll().subscribe(res => {      
      this.setorList = res; 

    }, httpError => {
      console.log("Erro ao obter os setores")
      this.alertService.error(httpError.error.message);
    })
  }

  deletar(setor: RequestSetor) {
    debugger
    this.setorService.deletar(setor).subscribe(res => {
      console.log(res);
      alert("Setor removido com sucesso!");
      this.getAll();
    }, httpError => {
      console.log(httpError);
    });
  }

  editar(setor: RequestSetor) {
    this.setorDetalhe.controls['id'].setValue(setor.id);
    this.setorDetalhe.controls['descricao'].setValue(setor.descricao);
    this.setorDetalhe.controls['atividade'].setValue(setor.atividade);
    this.setorDetalhe.controls['ativo'].setValue(setor.ativo);
  }

  atualizar() {
    this.requestSetor.id = this.setorDetalhe.value.id;
    this.requestSetor.descricao = this.setorDetalhe.value.descricao;
    this.requestSetor.atividade = this.setorDetalhe.value.atividade;
    this.requestSetor.ativo = this.setorDetalhe.value.ativo;
    
    this.setorService.atualizar(this.requestSetor).subscribe(res => {
      console.log(res);      
      this.getAll();
      // this.alertService.success();
    }, httpError => {
      debugger
      console.log(httpError);
      this.alertService.error(httpError.error.message);
      });
  }

}
