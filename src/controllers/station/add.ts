import Joi from '@hapi/joi';
import { RequestHandler } from 'express';
import { validationHandler } from 'src/middleware/validation-middleware';
import { Station } from 'src/models/Station';
export const addStationSchema = Joi.object().keys({
  sName: Joi.string().required(),
  sLine: Joi.string().required(),
  sm: Joi.string().required(),
  position: Joi.number().required(),
  user: Joi.date().required(),
});

const addWrapper: RequestHandler = async (req, res) => {
  const station = await Station.create(req.body);
  res.status(200).json({success: true, data: station});
};

export const add = validationHandler(addWrapper, { body: addStationSchema });
