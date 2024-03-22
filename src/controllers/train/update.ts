import Joi from '@hapi/joi';
import { RequestHandler } from 'express';
import { validationHandler } from 'src/middleware/validation-middleware';
import { Train } from 'src/models/Train';

export const updateTrainSchema = Joi.object().keys({
  _id: Joi.string().required(),
  trNo: Joi.string().optional(),
  rName: Joi.string().optional(),
  rLine: Joi.number().optional(),
  rFrom: Joi.string().optional(),
  rTo: Joi.string().optional(),
  rStatus: Joi.number().optional(),
});

const addWrapper: RequestHandler = async (req, res) => {
  const { _id: trainId } = req.body
  const train = await Train.findOneAndUpdate(trainId, req.body);
  res.status(200).json({success: true, data: train});
};

export const update = validationHandler(addWrapper, { body: updateTrainSchema });
