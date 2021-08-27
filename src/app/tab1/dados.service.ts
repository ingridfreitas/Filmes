import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor() { }

  private dados: any = [];

  guardar(id: string, dados:any): boolean{
    if(id){
      this.dados[id] = dados;
      return true;
    }
    else{
      return false
    }
  }

  pegar(id: string):any{
    if(id){
      return this.dados[id];
    }
    else{
      return null;
    }
  }

  deletar(id: string): boolean{
    return delete this.dados[id];
  }
}