import Joi from '@hapi/joi';
import { RequestHandler } from 'express';
import { validationHandler } from 'src/middleware/validation-middleware';
import { Station } from 'src/models/Station';

export const updateStationSchema = Joi.object().keys({
  _id: Joi.string().required(),
  sName: Joi.string().optional(),
  sLine: Joi.number().optional()
});

const addWrapper: RequestHandler = async (req, res) => {
  const { _id: stationId } = req.body
  const station = await Station.findOneAndUpdate(stationId, req.body);
  res.status(200).json({ success: true, data: station });
};

export const update = validationHandler(addWrapper, { body: updateStationSchema });
