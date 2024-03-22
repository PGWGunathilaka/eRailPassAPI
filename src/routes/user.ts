import { Router } from 'express';

import * as UserController from '../controllers/user';


export function userRoutes(router: Router): void {
    // ADMIN ROUTES
    router.get('/admin/user/passenger-stats', UserController.passengerStats);
    router.get('/admin/user/ticket-checked-stats', UserController.ticketCheckedStats);
    router.get('/admin/user/checkers', UserController.checkers);
    router.get('/admin/user/station-masters', UserController.stationMasters);
    router.get('/admin/user/delete-station-master/:stationMasterId', UserController.deleteStationMaster);
    router.get('/admin/user/delete-checker/:checkerId', UserController.deleteChecker);
}
