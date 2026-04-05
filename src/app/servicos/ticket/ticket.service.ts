import { Injectable } from '@angular/core';
import { Ticket } from './ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private tickets: Ticket[] = [];
  private contadorSenha: number = 0;

  constructor() {}

  gerarTicket(nome: string, descricao: string): Ticket {
    this.contadorSenha++;

    const novoTicket: Ticket = {
      id: Date.now(),
      nome,
      descricao,
      senha: this.contadorSenha,
      data: new Date()
    };

    this.tickets.push(novoTicket);

    return novoTicket;
  }

  listarTickets(): Ticket[] {
    return this.tickets;
  }

  getUltimaSenha(): number {
    return this.contadorSenha;
  }
}
