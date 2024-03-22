import { RequestHandler } from 'express';
import { TicketPricing } from 'src/models/TicketPricing';


const details: RequestHandler = async (req, res) => {
  const { ticketPricingId } = req.params;

  const ticketPricing = await TicketPricing.findById(ticketPricingId);
  res.status(200).json({success: true, data: ticketPricing?.toJSON()});
};

export { details };
