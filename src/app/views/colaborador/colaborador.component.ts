import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { RequestCargo } from 'src/app/resources/models/RequestCargo';
import { RequestColaborador } from 'src/app/resources/models/RequestColaborador';
import { RequestSetor } from 'src/app/resources/models/RequestSetor';
import { CargoService } from 'src/app/resources/services/cargo.service';
import { ColaboradorService } from 'src/app/resources/services/colaborador.service';
import { SetorService } from 'src/app/resources/services/setor.service';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.scss']
})
export class ColaboradorComponent implements OnInit {

  colaboradorDetalhe!: FormGroup;
  requestColaborador: RequestColaborador = new RequestColaborador()
  colaboradorList: RequestColaborador[] = [];
  colaboradoresAtivos!: Observable<RequestColaborador[]>;
  cargosAtivos!: Observable<RequestCargo[]>;
  setoresAtivos!: Observable<RequestSetor[]>;

  constructor(
    private formBuilder: FormBuilder, 
    private colaboradorService: ColaboradorService,
    private cargoService: CargoService,
    private setorService: SetorService) { }

  ngOnInit(): void {
    
    this.colaboradoresAtivos = this.colaboradorService.getAtivos();
    this.cargosAtivos = this.cargoService.getAtivos();
    this.setoresAtivos = this.setorService.getAtivos();

    // this.getColaboradoresAtivos();    
    // this.getCargosAtivos();
    // this.getSetoresAtivos();
    this.getAll();

    this.colaboradorDetalhe = this.formBuilder.group({
      id : [''],
      nome : [''],
      cpf: [''],
      dataNascimento: [''],
      endereco: [''],
      idSetor: [''],
      idCargo: [''],
      idSuperiorImediato: [''],
      ativo: true
    });   

  }

  adicionar() {
    console.log(this.colaboradorDetalhe);
    this.requestColaborador.id = 0;    
    this.requestColaborador.nome   = this.colaboradorDetalhe.value.nome;
    this.requestColaborador.cpf = this.colaboradorDetalhe.value.cpf;
    this.requestColaborador.endereco = this.colaboradorDetalhe.value.endereco;
    this.requestColaborador.dataNascimento = this.colaboradorDetalhe.value.dataNascimento;
    this.requestColaborador.idSetor = this.colaboradorDetalhe.value.idSetor;
    this.requestColaborador.idCargo = this.colaboradorDetalhe.value.idCargo;
    this.requestColaborador.idSuperiorImediato = this.colaboradorDetalhe.value.idSuperiorImediato;
    this.requestColaborador.ativo = this.colaboradorDetalhe.value.ativo;

    this.colaboradorService.adicionar(this.requestColaborador).subscribe(res => {
      console.log(res);
      this.getAll();
    }, httpError => {
      console.log(httpError);
      });
}

  getAll() {
    this.colaboradorService.getAll().subscribe(res => {      
    this.colaboradorList = res; 
      debugger
  }, httpError => {
    console.log("Erro ao obter os colaboradores")
    // this.alertService.error(httpError.error.message);
  })
}

deletar(colaborador: RequestColaborador) {
  debugger
  this.colaboradorService.deletar(colaborador).subscribe(res => {
    console.log(res);
    alert("Colaborador removido com sucesso!");
    this.getAll();
  }, httpError => {
    console.log(httpError);
  });
}

editar(colaborador: RequestColaborador) {
  this.colaboradorDetalhe.controls['id'].setValue(colaborador.id);
  this.colaboradorDetalhe.controls['nome'].setValue(colaborador.nome);
  this.colaboradorDetalhe.controls['cpf'].setValue(colaborador.cpf);
  this.colaboradorDetalhe.controls['endereco'].setValue(colaborador.endereco);
  this.colaboradorDetalhe.controls['dataNascimento'].setValue(colaborador.dataNascimento);
  this.colaboradorDetalhe.controls['idCargo'].setValue(colaborador.idCargo);
  this.colaboradorDetalhe.controls['idSetor'].setValue(colaborador.idSetor);
  this.colaboradorDetalhe.controls['idSuperiorImediato'].setValue(colaborador.idSuperiorImediato);
  this.colaboradorDetalhe.controls['ativo'].setValue(colaborador.ativo);
}

atualizar() {
  this.requestColaborador.id = this.colaboradorDetalhe.value.id;
  this.requestColaborador.nome   = this.colaboradorDetalhe.value.nome;
  this.requestColaborador.cpf = this.colaboradorDetalhe.value.cpf;
  this.requestColaborador.endereco = this.colaboradorDetalhe.value.endereco;
  this.requestColaborador.dataNascimento = this.colaboradorDetalhe.value.dataNascimento;
  this.requestColaborador.idSetor = this.colaboradorDetalhe.value.idSetor;
  this.requestColaborador.idCargo = this.colaboradorDetalhe.value.idCargo;
  this.requestColaborador.idSuperiorImediato = this.colaboradorDetalhe.value.idSuperiorImediato;
  this.requestColaborador.ativo = this.colaboradorDetalhe.value.ativo;
  
  this.colaboradorService.atualizar(this.requestColaborador).subscribe(res => {
    console.log(res);      
    this.getAll();
    // this.alertService.success();
  }, httpError => {
    debugger
    console.log(httpError);
    // this.alertService.error(httpError.error.message);
    });
}

getColaboradoresAtivos() {
  this.colaboradoresAtivos = this.colaboradorService.getAtivos();
}

getCargosAtivos() {
  this.cargosAtivos = this.cargoService.getAtivos();
}

getSetoresAtivos() {
  this.setoresAtivos = this.setorService.getAtivos();
 }

}
