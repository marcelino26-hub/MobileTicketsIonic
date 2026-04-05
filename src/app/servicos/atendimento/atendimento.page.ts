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
    if (this.nome && this.mensagem) {

      const ticket = this.ticketService.gerarTicket(this.nome, this.mensagem);

      alert(`Senha gerada: ${ticket.senha}`);

      this.nome = '';
      this.mensagem = '';

    } else {
      alert('Preencha todos os campos!');
    }
  }
}
