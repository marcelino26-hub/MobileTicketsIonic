import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket/ticket.service';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.page.html',
  styleUrls: ['./atendimento.page.scss'],
})
export class AtendimentoPage implements OnInit {

  nome: string = '';
  mensagem: string = '';

  constructor(private ticketService: TicketService) {}

  ngOnInit() {}

  enviar() {
    if (!this.nome || !this.mensagem) {
      alert('Preencha todos os campos!');
      return;
    }

    const ticket = this.ticketService.gerarTicket(this.nome, this.mensagem);
    alert(` Senha gerada com sucesso!\n\nSenha: ${ticket.senha}\nNome: ${ticket.nome}\nDescrição: ${ticket.descricao}`);

    this.nome = '';
    this.mensagem = '';
  }
}
