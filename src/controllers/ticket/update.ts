import Joi from '@hapi/joi';
import { RequestHandler } from 'express';
import { validationHandler } from 'src/middleware/validation-middleware';
import { Ticket } from 'src/models/Ticket';

export const updateTicketSchema = Joi.object().keys({
  _id: Joi.string().required(),
  trNo: Joi.string().optional(),
  rName: Joi.string().optional(),
  rLine: Joi.number().optional(),
  rFrom: Joi.string().optional(),
  rTo: Joi.string().optional(),
  rStatus: Joi.number().optional(),
});

const addWrapper: RequestHandler = async (req, res) => {
  const {_id: ticketId} = req.body
  const ticket = await Ticket.findOneAndUpdate(ticketId, req.body);
  res.status(200).json({success: true, data: ticket});
};

export const update = validationHandler(addWrapper, { body: updateTicketSchema });
