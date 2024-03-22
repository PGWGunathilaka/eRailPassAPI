import { RequestHandler } from 'express';
import { TicketPricing } from '../../models/TicketPricing';

const all: RequestHandler = async (req, res) => {
  const ticketPricing = await TicketPricing.find();
  res.status(200).json({success: true, data: ticketPricing});
};

export { all }
