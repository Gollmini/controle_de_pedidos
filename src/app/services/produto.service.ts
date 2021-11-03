import { Injectable } from '@angular/core';

export interface Produtos {
  nome: string;

}


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  public produtos: Produtos[] = [{
    nome: 'produto 1'
  },
  {
    nome: 'produto 2'
  },
  {
    nome: 'produto 3'
  },
  {
    nome: 'produto 4'
  }
  ]

  constructor() { }
  public novoProduto = null;
  public todosProdutos() {
    return this.produtos;
  }