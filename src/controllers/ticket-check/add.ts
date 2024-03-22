import Joi from '@hapi/joi';
import { RequestHandler } from 'express';
import { validationHandler } from 'src/middleware/validation-middleware';
import { TicketCheck } from 'src/models/TicketCheck';

export const addTicketCheckSchema = Joi.object().keys({
  pricing: Joi.string().required(),
  startStation: Joi.string().required(),
  endStation: Joi.string().required(),
  date: Joi.date().required(),
  user: Joi.date().required(),
});

const addWrapper: RequestHandler = async (req, res) => {
  const ticketCheck = await TicketCheck.create(req.body);
  res.status(200).json({success: true, data: ticketCheck});
};

export const add = validationHandler(addWrapper, { body: addTicketCheckSchema });
