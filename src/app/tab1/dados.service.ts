import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor() { }

  private dados: any = [];

  guardar(index: string, dados:any): boolean{
    if(index){
      this.dados[index] = dados;
      return true;
    }
    else{
      return false
    }
  }

  pegar(index: string):any{
    if(index){
      return this.dados[index];
    }
    else{
      return null;
    }
  }

  deletar(index: string): boolean{
    return delete this.dados[index];
  }
}