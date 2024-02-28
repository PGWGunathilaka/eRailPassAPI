import { Document, Model, Schema, model } from "mongoose";

export interface ITicketClass {
}
const ticketClassSchema = new Schema({
});
export interface ITicketZone {
    minDistance:number;
    maxDistance:number;
    price:number;
    ceilTo:number;
    minPrice:number;
}
const ticketZoneSchema = new Schema({
    minDistance: {type: Schema.Types.Number, required:true},
    maxDistance: {type: Schema.Types.Number, required:true},
    price: {type: Schema.Types.Number, required:true},
    ceilTo: {type: Schema.Types.Number, required:true},
    minPrice: {type: Schema.Types.Number, required:true},
});


export enum TicketType {
    NORMAL,
    RETURN,
    BOOKING,
    INTERCITY,
    SEASON,
}
export enum SeasonType {
    PRIVATE,
    GOVT,
    SCHOOL,
}
export enum TClass {
    FIRST,
    SECOND,
    THIRD,
}
export interface ITicketPricing extends Document {
    tType: TicketType;
    tZones: ITicketZone[];
    seasonType?:SeasonType;
}
export interface ITicketPricingModel extends Model<ITicketPricing> { }

const ticketPricingSchema = new Schema({
    tType: {type: Schema.Types.String, enum:TicketType, required:true},
    tZones: {type: [ticketZoneSchema], required:true},
    tClass:{type:Schema.Types.Number,enum:TClass, required:true},
    seasonType:{type: Schema.Types.String, enum:SeasonType, required:true},
});

export const TicketPricing: ITicketPricingModel = model<ITicketPricing, ITicketPricingModel>('Station', ticketPricingSchema);