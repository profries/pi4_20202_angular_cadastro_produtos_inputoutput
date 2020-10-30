import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  @Output() inserir = new EventEmitter <any>();
  mensagem = '';
  produto = {id: 0, nome: '', preco: 0.0};
  constructor() { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.inserir.emit(this.produto);
    this.mensagem = this.produto.nome + ' cadastrado com sucesso';
    this.produto = {id: 0, nome: '', preco: 0.0};
  }

  // logar(event) {
  //   this.nome = event.target.value;
  // }

}
