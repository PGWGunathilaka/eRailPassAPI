import { RequestHandler } from 'express';
import { Ticket } from 'src/models/Ticket';


const details: RequestHandler = async (req, res) => {
  const { ticketId } = req.params;

  const ticket = await Ticket.findById(ticketId);
  res.status(200).json({success: true, data: ticket?.toJSON()});
};

export { details };
