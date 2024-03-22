
import { NextFunction, Request, Response } from 'express';
import { logger as logger2 } from '../logger';

export function logger (req: Request, res: Response, next: NextFunction): void {
    logger2.log({
        level: 'info',
        message: req.url
      });
    next();
}
