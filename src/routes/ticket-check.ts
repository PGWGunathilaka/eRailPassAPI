import { Router } from 'express';

import * as TicketCheckController from '../controllers/ticket-check';


export function ticketCheckRoutes(router: Router): void {
    // CHECKER ROUTES
    router.get('/checker/ticket-check/all', TicketCheckController.checkerAll);
    router.post('/checker/ticket-check/add', TicketCheckController.add);
    router.get('/checker/ticket-check/details/update', TicketCheckController.update);

    // ADMIN ROUTES
    router.get('/admin/ticket-check/all', TicketCheckController.checkerAll);

}
