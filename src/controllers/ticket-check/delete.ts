import { RequestHandler } from "express";
import { TicketCheck } from '../../models/TicketCheck';

const deleteOne: RequestHandler = async (req, res) => {
  const { ticketCheckId } = req.params
  const result = await TicketCheck.deleteOne({_id: ticketCheckId});
  res.status(200).json({success: true, data: result.deletedCount === 1});
};

export { deleteOne };
