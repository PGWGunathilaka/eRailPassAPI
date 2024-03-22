import { Model, Schema, Types, model } from "mongoose";
import { Station } from "./Station";
import { TClass, TicketPricing, TicketType } from "./TicketPricing";
import { IUser, User } from "./User";

export interface ITicket {
    _id?: Types.ObjectId,
    price: number;
    startStation: Types.ObjectId;
    endStation: Types.ObjectId;
    date: Date,
    user?: IUser,
    isPaid: boolean,
    tClass: TClass,
    noOfTickets: number,
    paymentId?: string
    qrCode?: string
    tType: TicketType,
}

type ITicketModel = Model<ITicket>

const schema = new Schema<ITicket, ITicketModel>({
    price: {
        type: Schema.Types.Number,
        ref: TicketPricing.modelName,
        required: true
    },
    startStation: {
        type: Schema.Types.ObjectId,
        ref: Station.modelName,
        required: true
    },
    endStation: {
        type: Schema.Types.ObjectId,
        ref: Station.modelName,
        required: true
    },
    date: {
        type: Schema.Types.Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: User.modelName,
        required: false
    },
    isPaid: {
        type: Schema.Types.Boolean,
        default: false,
    },
    tClass: {
        type: Schema.Types.Number,
        required: true,
        enum: TClass,
    },
    noOfTickets: {
        type: Schema.Types.Number,
        required: true,
    },
    paymentId: {
        type: Schema.Types.String,
        required: false,
    },
    qrCode: {
        type: Schema.Types.String,
        required: false,
    },
    tType:{
        type: Schema.Types.Number,
        required: true,
        enum: TicketType,
    }
}, {
    timestamps: true
});

export const Ticket = model<ITicket, ITicketModel>('Ticket', schema);
