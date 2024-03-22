import Joi from '@hapi/joi';
import { RequestHandler } from 'express';
import { validationHandler } from 'src/middleware/validation-middleware';
import { Station } from 'src/models/Station';
import { ITicket, Ticket } from 'src/models/Ticket';
import { TClass, TicketPricing, TicketType } from 'src/models/TicketPricing';
import { Util } from 'src/util/Util';
import { PdfUtil } from 'src/util/pdf-util';

const printTicketSchema = Joi.object().keys({
    // _id: Joi.string().allow(null).optional(),
    // user: Joi.string().allow(null).optional(),
    // status: Joi.number().optional(),
    // price: Joi.number().required(),
    // startStation: Joi.string().required(),
    // endStation: Joi.string().required(),
    // date: Joi.string().required(),
    // isPaid: Joi.boolean().required(),
    // noOfTickets: Joi.number().required(),
    // tClass: Joi.number().required(),
    // qrCode: Joi.string().allow(null).optional()
});

const addWrapper: RequestHandler = async (req, res) => {

    const count = 10;
    const startStation = await Station.findOne({ sName: "Colombo Fort" });
    const endStation = await Station.findOne({ sName: "Polgahawela" });
    const createdTickets = []
    for (let i = 0; i < count; i++) {
        const data: ITicket = {
            price: 300,
            startStation: startStation!._id,
            endStation: endStation!._id,
            date: new Date(),
            isPaid: false,
            tClass: TClass.FIRST,
            noOfTickets: 1,
            tType: TicketType.NORMAL,
        };
        const ticket = new Ticket(data);
        ticket.qrCode = await Util.generateQrCodeFromTicket(ticket)
        await ticket.save()
        createdTickets.push(ticket)
    }
    await PdfUtil.generateTicketPdf(createdTickets)
    const _id = Util.getId()
    const ticket = new Ticket({ _id, ...req.body });
    if (req.body.isPaid) {
        ticket.qrCode = await Util.generateQrCodeFromTicket(ticket)
    }
    res.status(200).json({ success: true, data: [] });
};

export const print = validationHandler(addWrapper, { body: printTicketSchema });
