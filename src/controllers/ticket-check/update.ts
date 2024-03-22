import Joi from '@hapi/joi';
import { RequestHandler } from 'express';
import { validationHandler } from 'src/middleware/validation-middleware';
import { TicketCheck } from 'src/models/TicketCheck';

export const updateTicketCheckSchema = Joi.object().keys({
  _id: Joi.string().required(),
  trNo: Joi.string().optional(),
  rName: Joi.string().optional(),
  rLine: Joi.number().optional(),
  rFrom: Joi.string().optional(),
  rTo: Joi.string().optional(),
  rStatus: Joi.number().optional(),
});

const addWrapper: RequestHandler = async (req, res) => {
  const {_id: ticketCheckId} = req.body
  const ticketCheck = await TicketCheck.findOneAndUpdate(ticketCheckId, req.body);
  res.status(200).json({success: true, data: ticketCheck});
};

export const update = validationHandler(addWrapper, { body: updateTicketCheckSchema });
