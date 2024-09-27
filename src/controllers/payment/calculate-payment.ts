import { RequestHandler } from 'express';
import { ApplicationError } from 'src/errors';
import { validationHandler } from 'src/middleware/validation-middleware';
import { Station } from 'src/models/Station';
import { ITicket, Ticket } from 'src/models/Ticket';
import { TicketPricing } from 'src/models/TicketPricing';
import { TicketPricing as TicketPricingHandler } from 'src/util/TicketPricing';
import { stripe } from '.';
import { addTicketSchema } from '../ticket/add';

const addWrapper: RequestHandler = async (req, res) => {
  
  const data = req.body as ITicket;
  const startStation = await Station.findById(data.startStation)
  const endStation = await Station.findById(data.endStation)
  if (!startStation || !endStation) {
   throw new ApplicationError("Starting or Ending Station not found")
  }
  
  const prices = await TicketPricing.find()
  const distance = Math.abs(endStation.position - startStation.position)
  const price = TicketPricingHandler.calculateNormalPricing(prices, distance, data.tClass)



  res.status(200).json({
    success: true,
    data: price});
};

export const calculatePayment = validationHandler(addWrapper, { body: addTicketSchema });
