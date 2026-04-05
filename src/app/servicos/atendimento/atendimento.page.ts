import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.page.html',
  styleUrls: ['./atendimento.page.scss'],
})
export class AtendimentoPage implements OnInit {

  nome: string = '';
  mensagem: string = '';

  constructor() { }

  ngOnInit() {}

  enviar() {
    if (this.nome && this.mensagem) {
      alert(`Mensagem enviada por ${this.nome}`);
    } else {
      alert('Preencha todos os campos!');
    }
  }
}
