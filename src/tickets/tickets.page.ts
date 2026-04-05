import { Component } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss'],
})
export class TicketsPage {

  titulo: string = '';
  descricao: string = '';
  listaTickets: any[] = [];

  criarTicket() {
    if (this.titulo && this.descricao) {
      this.listaTickets.push({
        titulo: this.titulo,
        descricao: this.descricao
      });

      this.titulo = '';
      this.descricao = '';
    } else {
      alert('Preencha todos os campos!');
    }
  }

}
