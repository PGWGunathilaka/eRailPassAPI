import bodyParser from 'body-parser';
import compression from 'compression';
import path from 'path';
import express, { Request, Response, NextFunction } from 'express';
import { ApplicationError } from './errors/application-error';
import { router } from './routes';
import cors from 'cors';
import { logger } from './middleware/log-middleware';
import { authMiddleware } from './middleware/auth-middleware';
import { Role } from './models/User';
import * as PaymentController from './controllers/payment';

export const app = express();

require('express-async-errors');


app.use(cors())
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this route should not pass through json middleware
app.post('/api/public/stripe_webhooks', PaymentController.paymentWebhook)


app.use(express.json({ limit: "20mb" }));
app.use(logger);
app.use('/api/auth', authMiddleware())
// app.use('/api/admin', authMiddleware(Role.SUPER_ADMIN))
app.use('/api/sm', authMiddleware(Role.STATION_MASTER))
app.use('/api/checker', authMiddleware(Role.CHECKER))

app.set('port', process.env.PORT ?? 3000);

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

app.use('/api', router);

app.use((err: ApplicationError, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    next(err);
    return
  }

  return res.status(err.status || 500).json({
    error: process.env.NODE_ENV === 'development' ? err : undefined,
    message: err.message
  });
});

