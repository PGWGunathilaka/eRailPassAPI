import {
  NextFunction,
  Request,
  RequestHandler,
  Response
} from 'express';
import jwt from 'jsonwebtoken';
import { Role, User } from 'src/models/User';
import { UnauthorizedRequest } from '../errors';
import { logger } from '../logger';

export const authMiddleware = (role?: Role): RequestHandler => (req: Request, res: Response, next: NextFunction) => {
  const tokenHeaderValue = req.headers['authorization'];
  if (tokenHeaderValue) {
    const token = tokenHeaderValue.replace('Bearer ', '').replace('Bearer', '')
    // eslint-disable-next-line consistent-return
    jwt.verify(token, process.env.SECRET!, (err, decoded) => {
      if (!err) {
        const data = jwt.decode(token)
        User.findById((data as any)?.userId).then((user) => {
          if (user) {
            req.user = user;
            if (role && req.user?.role !== role) {
              logger.log({
                level: 'info',
                message: 'Role Validation Failed'
              });
              return next(new UnauthorizedRequest('Permission Denied'));
            } else {
              next()
            }
          } else {
            return next(new UnauthorizedRequest('User not found'));
          }
        }).catch(next)
      } else {
        logger.log({
          level: 'info',
          message: 'Token Validation Failed'
        });
        return next(new UnauthorizedRequest());
      }
    });
  } else {
    logger.log({
      level: 'info',
      message: 'Auth token is not supplied'
    });
    return next(new UnauthorizedRequest('Auth token is not supplied'));
  }
};
