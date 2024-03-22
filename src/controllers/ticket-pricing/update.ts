import Joi from '@hapi/joi';
import { RequestHandler } from 'express';
import { validationHandler } from 'src/middleware/validation-middleware';
import { TicketPricing } from 'src/models/TicketPricing';

export const updateTicketPricingSchema = Joi.object().keys({
  _id: Joi.string().required(),
  sName: Joi.string().optional(),
  sLine: Joi.number().optional()
});

const addWrapper: RequestHandler = async (req, res) => {
  const {_id: ticketPricingId} = req.body
  const ticketPricing = await TicketPricing.findOneAndUpdate(ticketPricingId, req.body);
  res.status(200).json({success: true, data: ticketPricing});
};

export const update = validationHandler(addWrapper, { body: updateTicketPricingSchema });
