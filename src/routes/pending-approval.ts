import { Router } from 'express';

import * as PendingApprovalController from '../controllers/pending-approval';


export function pendingApprovalRoutes(router: Router): void {
    // ADMIN ROUTES
    router.get('/admin/pending-approval/all', PendingApprovalController.all);
    router.get('/admin/pending-approval/details/:userId', PendingApprovalController.details);
    router.post('/admin/pending-approval/update', PendingApprovalController.update);
}
