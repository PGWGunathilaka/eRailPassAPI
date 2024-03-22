import Joi from '@hapi/joi';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { BadRequest } from '../errors';
import { logger } from '../logger';

const getMessageFromJoiError = (error: Joi.ValidationError): string | undefined => {
  if (!error.details && error.message) {
    return error.message;
  }
  return error.details && error.details.length > 0 && error.details[0].message ?
    `PATH: [${error.details[0].path}] ;; MESSAGE: ${error.details[0].message}` :
    undefined;
};

interface HandlerOptions {
  body?: Joi.ObjectSchema
};

export const validationHandler = (
  handler: RequestHandler,
  validator?: HandlerOptions,
): RequestHandler => async (req: Request, res: Response, next: NextFunction) => {
  logger.log({ level: 'info', message: req.url, request: req.body});
  if (validator?.body) {
    const { error } = validator?.body.validate(req.body);
    if (error != null) {
      const message = getMessageFromJoiError(error)
      logger.log({ level: 'error', message: message ?? "" });
      next(new BadRequest(message));
      return;
    }
  }
  try {
    handler(req, res, next);
  } catch (e) {
    logger.log({ level: 'error', message: e });
    next()
  }
};

