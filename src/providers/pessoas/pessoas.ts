import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PessoasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PessoasProvider {

  public pessoas: any;
  public apiUrl: string = "https://randomuser.me/api/?nat=br&results=15&seed=abc";

  constructor(public http: HttpClient) {
    console.log('Hello PessoasProvider Provider');
  }

  //obtem dos dados do rest
  public load() {

    //impede que eu faça requisições http adicionais desnecessárias
    if(this.pessoas) {
      return Promise.resolve(this.pessoas);
    }
    //promisse trabalha com chamadas assincronas
    return new Promise(resolve => {
      this.http.get<any>(this.apiUrl).subscribe(data => {

        //se pegar o results direto da pau...coloco uma variavel antes (pessoas)
        // ai para de dar erro
        //ou coloco any
        this.pessoas = data.results;
        resolve(this.pessoas)
      }, err => {
        console.log(err)
      });
    });
  }

    loadByEmail(email: string): any {
      for(let pessoa of this.pessoas) {
        if(pessoa.email == email) {
          return pessoa;
        }
      }
    }
}
