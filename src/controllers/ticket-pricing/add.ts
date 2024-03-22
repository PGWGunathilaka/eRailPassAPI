import Joi from '@hapi/joi';
import { RequestHandler } from 'express';
import { validationHandler } from 'src/middleware/validation-middleware';
import { TicketPricing } from 'src/models/TicketPricing';

export const addTicketPricingSchema = Joi.object().keys({
  sName: Joi.string().required(),
  sLine: Joi.number().required()
});

const addWrapper: RequestHandler = async (req, res) => {
  const ticketPricing = await TicketPricing.create(req.body);
  res.status(200).json({success: true, data: ticketPricing});
};

export const add = validationHandler(addWrapper,  { body: addTicketPricingSchema });
