import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {
@Input() nome: string;
@Input() produtos = [];

  constructor() { }

  ngOnInit(): void {
  }

}
