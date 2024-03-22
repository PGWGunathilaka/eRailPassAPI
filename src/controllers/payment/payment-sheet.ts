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
  // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: '2023-10-16' }
  );
  const prices = await TicketPricing.find()
  const data = req.body as ITicket;
  const startStation = await Station.findById(data.startStation)
  const endStation = await Station.findById(data.endStation)
  if (!startStation || !endStation) {
   throw new ApplicationError("Starting or Ending Station not found")
  }
  const distance = Math.abs(endStation.position - startStation.position)
  const price = TicketPricingHandler.calculateNormalPricing(prices, distance, data.tClass)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.max(160, price) * 100,
    currency: 'lkr',
    customer: customer.id,
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter
    // is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  console.log("paymentIntent", paymentIntent)
  await Ticket.create({
    ...data,
    user: req.user,
    paymentId: paymentIntent.id
  })

  res.status(200).json({
    success: true,
    data: {
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
    }
  });
};

export const paymentSheet = validationHandler(addWrapper, { body: addTicketSchema });
