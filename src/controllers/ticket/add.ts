import Joi from '@hapi/joi';
import { RequestHandler } from 'express';
import { validationHandler } from 'src/middleware/validation-middleware';
import { Ticket } from 'src/models/Ticket';
import { Util } from 'src/util/Util';

export const addTicketSchema = Joi.object().keys({
    _id: Joi.string().allow(null).optional(),
    user: Joi.string().allow(null).optional(),
    status: Joi.number().optional(),
    price: Joi.number().required(),
    startStation: Joi.string().required(),
    endStation: Joi.string().required(),
    date: Joi.string().required(),
    isPaid: Joi.boolean().required(),
    noOfTickets: Joi.number().required(),
    tClass: Joi.number().required(),
    qrCode: Joi.string().allow(null).optional()
});

const addWrapper: RequestHandler = async (req, res) => {

    const _id = Util.getId()
    const ticket = new Ticket({ _id, ...req.body });
    if (req.body.isPaid) {
        ticket.qrCode = await Util.generateQrCodeFromTicket(ticket)
    }
    await ticket.save()
    res.status(200).json({ success: true, data: ticket });
};

export const add = validationHandler(addWrapper, { body: addTicketSchema });
