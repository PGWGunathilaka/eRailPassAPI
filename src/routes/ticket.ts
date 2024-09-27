import { Router } from 'express';

import * as TicketController from '../controllers/ticket';


export function ticketRoutes(router: Router): void {
    // AUTH ROUTES
    router.post('/auth/ticket/add', TicketController.add);
    router.get('/auth/ticket/all', TicketController.userTickets);
    router.get('/auth/ticket/details/:ticketId', TicketController.details);
    // Ticket history

    // CHECKER ROUTES
    router.post('/checker/ticket/mark-checked', TicketController.markChecked);

    // SM ROUTES
    router.post('/sm/ticket/mark-paid', TicketController.markPaid);

    // ADMIN ROUTES
    router.get('/admin/ticket/all', TicketController.all);
    router.get('/public/ticket/print', TicketController.print);
    router.get('/admin/ticket/delete', TicketController.deleteOne);
}
