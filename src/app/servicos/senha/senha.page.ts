import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket/ticket.service';

@Component({
  selector: 'app-senha',
  templateUrl: './senha.page.html',
  styleUrls: ['./senha.page.scss'],
})
export class SenhaPage implements OnInit {

  senhaAtual: number = 0;

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.senhaAtual = this.ticketService.getUltimaSenha();
  }

  gerarSenha() {
    const ticket = this.ticketService.gerarTicket('Cliente', 'Atendimento geral');
    this.senhaAtual = ticket.senha;
  }

}
