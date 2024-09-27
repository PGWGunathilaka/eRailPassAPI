import Joi from '@hapi/joi';
import { RequestHandler } from 'express';
import { validationHandler } from 'src/middleware/validation-middleware';
import { Ticket } from 'src/models/Ticket';
import { Util } from 'src/util/Util';

export const addTicketSchema = Joi.object().keys({
    _id: Joi.string().required(),
});

const addWrapper: RequestHandler = async (req, res) => {

    const ticket = await Ticket.findById(req.body._id);

    if (ticket) {
        ticket.isPaid = true;
        ticket.qrCode = await Util.generateQrCodeFromTicket(ticket)
        await ticket.save()
        res.status(200).json({ success: true, data: null });
    } else {
        res.status(200).json({ success: false, message: "Ticket not found to update" });
    }
};

export const markPaid = validationHandler(addWrapper, { body: addTicketSchema });
