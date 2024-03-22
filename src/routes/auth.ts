import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import apiSpec from '../../swagger-doc.json';

import * as AuthController from '../controllers/auth';

export function authRoutes(router: Router): void {
    // Public routes
    router.post('/public/login', AuthController.login);
    router.post('/public/register', AuthController.register);

    // Auth routes
    router.get('/auth/me', AuthController.me);
    router.post('/auth/me/update', AuthController.updateMe);

    if (process.env.NODE_ENV === 'development') {
        router.use('/dev/api-docs', swaggerUi.serve);
        router.get('/dev/api-docs', swaggerUi.setup(apiSpec));
    }
}
