import { Router } from 'express';

import * as PaymentController from '../controllers/payment';


export function paymentRoutes(router: Router): void {
    // PUBLIC ROUTES
    // router.post('/public/stripe_webhooks', PaymentController.paymentWebhook);

    // AUTH ROUTES
    router.post('/auth/payment/payment-sheet', PaymentController.paymentSheet);
    router.post('/auth/payment/calculate-payment', PaymentController.calculatePayment);
}
