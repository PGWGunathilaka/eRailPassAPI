import { Router } from 'express';

import * as StationController from '../controllers/station';


export function stationRoutes(router: Router): void {
    // PUBLIC ROUTES
    router.get('/public/station/all', StationController.all);
    router.get('/public/station/details/:stationId', StationController.details);

    // ADMIN ROUTES
    router.post('/admin/station/add', StationController.add);
    router.post('/admin/station/update', StationController.update);
    router.get('/admin/station/delete/:stationId', StationController.deleteOne);
    router.get('/admin/station/passenger-tickets-stats',StationController.passengerTicketStats)
}
