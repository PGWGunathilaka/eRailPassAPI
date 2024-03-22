import { Model, Schema, Types, model } from "mongoose";
import { Ticket } from "./Ticket";
import { User } from "./User";

export interface ITicketCheck {
    ticket: Types.ObjectId;
    checker: Types.ObjectId,
    isFined: boolean,
    fine: number,
    checkedAt: Date,
}

type ITicketCheckModel = Model<ITicketCheck>

const ticketCheckSchema = new Schema<ITicketCheck, ITicketCheckModel>({
    ticket: {
        type: Schema.Types.ObjectId,
        ref: Ticket.modelName,
        required: true
    },
    checker: {
        type: Schema.Types.ObjectId,
        ref: User.modelName,
        required: true
    },
    isFined: {
        type: Schema.Types.Boolean,
        required: true
    },
    fine: {
        type: Schema.Types.Number,
        required: false
    },
    checkedAt: {
        type: Schema.Types.Date,
        required: true
    },
});

export const TicketCheck: ITicketCheckModel = model<ITicketCheck, ITicketCheckModel>('TicketCheck', ticketCheckSchema);

