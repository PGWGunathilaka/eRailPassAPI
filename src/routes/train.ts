import { Router } from 'express';

import * as TrainController from '../controllers/train';


export function trainRoutes(router: Router): void {
    // PUBLIC ROUTES
    router.post('/public/train/search', TrainController.search);
    router.get('/public/train/details/:trainId', TrainController.details);

    // ADMIN ROUTES
    router.get('/admin/train/all', TrainController.all);
    router.post('/admin/train/add', TrainController.add);
    router.post('/admin/train/update', TrainController.update);
    router.get('/admin/train/delete/:trainId', TrainController.deleteOne);
}
