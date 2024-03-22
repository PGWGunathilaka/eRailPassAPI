import { RequestHandler } from 'express';
import { Ticket } from '../../models/Ticket';

const all: RequestHandler = async (req, res) => {
  const tickets = await Ticket.find().populate(['startStation', 'endStation']);
  res.status(200).json({success: true, data: tickets});
};

export { all }
