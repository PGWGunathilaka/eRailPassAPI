import { RequestHandler } from "express";
import { TicketPricing } from '../../models/TicketPricing';

const deleteOne: RequestHandler = async (req, res) => {
  const { ticketPricingId } = req.params
  const result = await TicketPricing.deleteOne({_id: ticketPricingId});
  res.status(200).json({success: true, data: result.deletedCount === 1});
};

export { deleteOne };
