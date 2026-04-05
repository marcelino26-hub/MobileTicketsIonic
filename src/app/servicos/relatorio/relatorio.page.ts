import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket/ticket.service';
import { Ticket } from '../ticket/ticket.model';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.page.html',
  styleUrls: ['./relatorio.page.scss'],
})
export class RelatorioPage implements OnInit {

  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.tickets = this.ticketService.listarTickets();
  }

}
