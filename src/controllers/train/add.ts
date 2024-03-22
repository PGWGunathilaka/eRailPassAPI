import Joi from '@hapi/joi';
import { RequestHandler } from 'express';
import { validationHandler } from 'src/middleware/validation-middleware';
import { Train } from 'src/models/Train';

export const addTrainSchema = Joi.object().keys({
  trNo: Joi.string().required(),
  rName: Joi.string().required(),
  rLine: Joi.number().required(),
  rFrom: Joi.string().required(),
  rTo: Joi.string().required(),
  rStatus: Joi.number().required(),
});

const addWrapper: RequestHandler = async (req, res) => {
  const train = await Train.create(req.body);
  res.status(200).json({success: true, data: train});
};

export const add = validationHandler(addWrapper, { body: addTrainSchema });
