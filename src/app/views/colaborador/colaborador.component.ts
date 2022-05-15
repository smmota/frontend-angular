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
  colaboradorList!: Observable<RequestColaborador[]>;
  colaboradoresAtivos!: Observable<RequestColaborador[]>;
  cargosAtivos!: Observable<RequestCargo[]>;
  setoresAtivos!: Observable<RequestSetor[]>;

  constructor(
    private formBuilder: FormBuilder, 
    private colaboradorService: ColaboradorService,
    private cargoService: CargoService,
    private setorService: SetorService) { }

  ngOnInit(): void {
    
    this.colaboradorList = this.colaboradorService.getAll();
    this.colaboradoresAtivos = this.colaboradorService.getAtivos();
    this.cargosAtivos = this.cargoService.getAtivos();
    this.setoresAtivos = this.setorService.getAtivos()

    this.novo();

  }

  novo() {
    
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
    debugger

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
      this.colaboradorList = this.colaboradorService.getAll();
    }, httpError => {
      console.log(httpError);
      });
  }

  deletar(colaborador: RequestColaborador) {

    this.colaboradorService.deletar(colaborador).subscribe(res => {
      console.log(res);
      alert("Colaborador removido com sucesso!");
      this.colaboradorList = this.colaboradorService.getAll();
    }, httpError => {
      console.log(httpError);
    });
  }

  editar(colaborador: RequestColaborador) {
    this.colaboradorDetalhe.controls['id'].setValue(colaborador.id);
    this.colaboradorDetalhe.controls['nome'].setValue(colaborador.nome);
    this.colaboradorDetalhe.controls['cpf'].setValue(colaborador.cpf);
    this.colaboradorDetalhe.controls['endereco'].setValue(colaborador.endereco);
    this.colaboradorDetalhe.controls['idCargo'].setValue(colaborador.idCargo);
    this.colaboradorDetalhe.controls['idSetor'].setValue(colaborador.idSetor);
    this.colaboradorDetalhe.controls['idSuperiorImediato'].setValue(colaborador.idSuperiorImediato);
    this.colaboradorDetalhe.controls['ativo'].setValue(colaborador.ativo);
    this.colaboradorDetalhe.controls['dataNascimento'].setValue(colaborador.dataNascimento);
  
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
      this.colaboradorList = this.colaboradorService.getAll();
      // this.alertService.success();
    }, httpError => {
      debugger
      console.log(httpError);
      // this.alertService.error(httpError.error.message);
      });
  }

}
