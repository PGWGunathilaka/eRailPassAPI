import { RequestHandler } from 'express';
import { TicketCheck } from 'src/models/TicketCheck';

const all: RequestHandler = async (req, res) => {
  const ticketChecks = await TicketCheck.find();
  res.status(200).json({success: true, data: ticketChecks});
};

const checkerAll: RequestHandler = async (req, res) => {
  const user = req.user
  const ticketChecks = await TicketCheck.find({checker: user?._id});
  res.status(200).json({success: true, data: ticketChecks});
};


export { all, checkerAll };

