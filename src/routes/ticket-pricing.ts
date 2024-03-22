import { Router } from 'express';

import * as TicketPricingController from '../controllers/ticket-pricing';


export function ticketPricingRoutes(router: Router): void {
    // ADMIN ROUTES
    router.get('/public/ticket-pricing/all', TicketPricingController.all);
    router.get('/public/ticket-pricing/details/:ticketPricingId', TicketPricingController.details);
    router.post('/admin/ticket-pricing/add', TicketPricingController.add);
    router.post('/admin/ticket-pricing/update', TicketPricingController.update);
    router.get('/admin/ticket-pricing/delete', TicketPricingController.deleteOne);
}
