import { Document, Model, Schema, model } from "mongoose";
import { ITicketZone, SeasonType, TicketPricing, TicketType } from "./TicketPricing";
import { Station } from "./Station";
import { User } from "./User";

export interface IUserTicket extends Document {
    tType: TicketType;
    tZone: ITicketZone;
    seasonType?:SeasonType;
}
interface IUserTicketModel extends Model<IUserTicket> { }

const schema = new Schema({
    pricing: {type: Schema.Types.ObjectId,ref:TicketPricing.modelName, required:true},
    startStation:{type: Schema.Types.ObjectId,ref:Station.modelName, required:true},
    endStation:{type: Schema.Types.ObjectId,ref:Station.modelName, required:true},
    date:{type: Schema.Types.Date, required:true},
    user:{type: Schema.Types.ObjectId,ref:User.modelName, required:true},
});

export const UserTicket: IUserTicketModel = model<IUserTicket, IUserTicketModel>('UserTicket', schema);