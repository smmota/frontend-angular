import { RequestCargo } from "./RequestCargo";
import { RequestSetor } from "./RequestSetor";

  export class RequestColaborador {
    public id: number = 0;
    public nome!: string;
    public dataNascimento!: string;
    public cpf!: string;
    public endereco!: string;
    public idSetor: number = 0;
    public idCargo: number = 0;
    public idSuperiorImediato: number = 0;
    public ativo!: boolean;
    public cargo!: RequestCargo
    public setor!: RequestSetor
}