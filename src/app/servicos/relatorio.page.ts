import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.page.html',
  styleUrls: ['./relatorio.page.scss'],
})
export class RelatorioPage implements OnInit {

  atendimentos = [
    { nome: 'João', mensagem: 'Problema no sistema' },
    { nome: 'Maria', mensagem: 'Dúvida sobre cadastro' }
  ];

  constructor() { }

  ngOnInit() {}

}
