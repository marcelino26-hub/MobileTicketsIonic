import { Injectable } from '@angular/core';

export type TicketType = 'SP' | 'SG' | 'SE';

export interface Ticket {
  id: string;
  type: TicketType;
  createdAt: Date;
  attendedAt?: Date;
  desk?: number;
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets: Ticket[] = [];
  private counter = { SP: 0, SG: 0, SE: 0 };

  generateTicket(type: TicketType): Ticket {
    const now = new Date();
    const yy = now.getFullYear().toString().slice(-2);
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    this.counter[type]++;
    const id = `${yy}${mm}${dd}-${type}${String(this.counter[type]).padStart(3, '0')}`;

    const ticket: Ticket = { id, type, createdAt: now };
    this.tickets.push(ticket);
    return ticket;
  }

  getTickets(): Ticket[] {
    return this.tickets;
  }

  attendNext(desk: number): Ticket | null {
    const next = this.tickets.find(t => !t.attendedAt && t.type === 'SP')
      || this.tickets.find(t => !t.attendedAt && t.type === 'SE')
      || this.tickets.find(t => !t.attendedAt && t.type === 'SG');

    if (next) {
      next.attendedAt = new Date();
      next.desk = desk;
    }
    return next || null;
  }
}

