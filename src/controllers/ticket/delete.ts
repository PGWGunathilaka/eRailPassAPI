import { RequestHandler } from "express";
import { Ticket } from '../../models/Ticket';

const deleteOne: RequestHandler = async (req, res) => {
    const { ticketId } = req.params
    const result = await Ticket.deleteOne({_id: ticketId});
    res.status(200).json({success: true, data: result.deletedCount === 1});
  };
  
  export { deleteOne };

