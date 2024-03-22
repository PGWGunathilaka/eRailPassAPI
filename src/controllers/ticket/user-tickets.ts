import { RequestHandler } from 'express';
import { Ticket } from '../../models/Ticket';

const userTickets: RequestHandler = async (req, res) => {
  const tickets = await Ticket.find({user: req.user?._id}).sort([['date', 'desc'], ['updatedAt', 'desc']]).populate(['startStation', 'endStation']);
  res.status(200).json({success: true, data: tickets});
};

export { userTickets }
