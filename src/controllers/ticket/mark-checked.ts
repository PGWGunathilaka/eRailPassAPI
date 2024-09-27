import Joi from '@hapi/joi';
import { RequestHandler } from 'express';
import { validationHandler } from 'src/middleware/validation-middleware';
import { Ticket } from 'src/models/Ticket';
import { ITicketCheck, TicketCheck } from 'src/models/TicketCheck';
import { Util } from 'src/util/Util';

export const addTicketSchema = Joi.object().keys({
    _id: Joi.string().required(),
});

const addWrapper: RequestHandler = async (req, res) => {

    const ticket = await Ticket.findById(req.body._id);
    if (ticket) {
        const data: ITicketCheck = {
            ticket: ticket._id,
            checker: req.user._id,
            isFined: false,
            fine: 0,
            checkedAt: new Date()
        }
        await TicketCheck.create(data);
        res.status(200).json({ success: true, data: null });
    } else {
        res.status(200).json({ success: false, message: "Ticket not found to update" });
    }
};

export const markChecked = validationHandler(addWrapper, { body: addTicketSchema });
