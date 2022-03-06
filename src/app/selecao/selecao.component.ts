import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css']
})
export class SelecaoComponent {

  @Input()
  titulo:string = "";

  @Input()
  opcoes: string[] = [];

  @Input()
  escolhaAte: number = 1;

 //armazenar o estado do componente
 opcoesEscolhidas: string[] = [];

 marcaOuDermarcaOpcao(opcao: string) {
   if(this.escolhaAte > 1) {
     //ao inves de so adicionar, queremos saber se esta no array, se ja tiver 
     // no array vai tirar, se nao tiver vai adicionar
     //indexOf procura um determinado valor no array e retorna o index desse elemento
     //se o indexOf nao achar, ele retorna -1
     const idx = this.opcoesEscolhidas.indexOf(opcao);
     if(idx === -1) {
       this.opcoesEscolhidas.push(opcao);
     } else {
       this.opcoesEscolhidas.splice(idx, 1)
     }
   } else {
     //para o radio, so queremos selecionar um, e quando temos seleção unica, nao queremos colocar
     //selecao no array, queremos substituir a escolha do array pelo item que clicamos.
     //então substituimos o array por um array com um unico elemento, que é a opção que a pessoa clicou
    this.opcoesEscolhidas = [opcao];
   }
  }

  estaDesabilitada(opcao: string) {
    return this.escolhaAte > 1 &&
    this.opcoesEscolhidas.indexOf(opcao) === -1 &&
    this.opcoesEscolhidas.length >= this.escolhaAte;
  }
  // disabled, se fizermos apenas isso: opcoesEscolhidas.length >= escolhaAte ele vai desabiltar tudo depois de escolhido as 3,
  // nao conseguimos nem alterar, para isso verificamos também se o item ainda nao esta escolhido, com o 
  // opcoesEscolhidas.indexOf(opcao) === -1
  // outra verificação é que apenas tem q ser desabilitado quando for escolha multiplas.
  // e como ficou grande essa verificação, é melhor é criarmos uma função com elas e tiramos do html.

 
}
