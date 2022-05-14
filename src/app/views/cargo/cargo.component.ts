import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { RequestCargo } from 'src/app/resources/models/RequestCargo';
import { CargoService } from 'src/app/resources/services/cargo.service';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.scss']
})
export class CargoComponent implements OnInit {

  cargoDetalhe!: FormGroup;
  requestCargo: RequestCargo = new RequestCargo()
  cargoList: RequestCargo[] = [];

  constructor(
    private formBuilder: FormBuilder, 
    private cargoService: CargoService
  ) { }

  ngOnInit(): void {

    this.getAll();

    this.cargoDetalhe = this.formBuilder.group({
      id : [''],
      descricao : [''],
      atividade: [''],
      ativo: true
    });    
  }

  adicionar() {
      console.log(this.cargoDetalhe);
      this.requestCargo.id = 0;
      this.requestCargo.descricao = this.cargoDetalhe.value.descricao;
      this.requestCargo.atividade = this.cargoDetalhe.value.atividade;
      this.requestCargo.ativo = this.cargoDetalhe.value.ativo;      
      this.cargoService.adicionar(this.requestCargo).subscribe(res => {
        console.log(res);
        this.getAll();
      }, httpError => {
        console.log(httpError);
        });
  }

    getAll() {
      this.cargoService.getAll().subscribe(res => {      
      this.cargoList = res; 

    }, httpError => {
      console.log("Erro ao obter os cargos")
      // this.alertService.error(httpError.error.message);
    })
  }

  deletar(cargo: RequestCargo) {
    debugger
    this.cargoService.deletar(cargo).subscribe(res => {
      console.log(res);
      alert("Setor removido com sucesso!");
      this.getAll();
    }, httpError => {
      console.log(httpError);
    });
  }

  editar(cargo: RequestCargo) {
    this.cargoDetalhe.controls['id'].setValue(cargo.id);
    this.cargoDetalhe.controls['descricao'].setValue(cargo.descricao);
    this.cargoDetalhe.controls['atividade'].setValue(cargo.atividade);
    this.cargoDetalhe.controls['ativo'].setValue(cargo.ativo);
  }

  atualizar() {
    this.requestCargo.id = this.cargoDetalhe.value.id;
    this.requestCargo.descricao = this.cargoDetalhe.value.descricao;
    this.requestCargo.atividade = this.cargoDetalhe.value.atividade;
    this.requestCargo.ativo = this.cargoDetalhe.value.ativo;
    
    this.cargoService.atualizar(this.requestCargo).subscribe(res => {
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
