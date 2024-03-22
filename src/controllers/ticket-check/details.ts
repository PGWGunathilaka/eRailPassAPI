import { RequestHandler } from 'express';
import { TicketCheck } from 'src/models/TicketCheck';


const details: RequestHandler = async (req, res) => {
  const { ticketCheckId } = req.params;

  const ticketCheck = await TicketCheck.findById(ticketCheckId);
  res.status(200).json({success: true, data: ticketCheck?.toJSON()});
};

export { details };
