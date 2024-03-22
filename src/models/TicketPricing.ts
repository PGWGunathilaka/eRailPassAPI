import { Model, Schema, model } from "mongoose";

export interface ITicketZone {
    minDistance: number;
    maxDistance: number;
    pricePerKm: number;
}

type ITicketZoneModel = Model<ITicketZone>

const ticketZoneSchema = new Schema<ITicketZone, ITicketZoneModel>({
    minDistance: { type: Schema.Types.Number, required: true },
    maxDistance: { type: Schema.Types.Number, required: true },
    pricePerKm: { type: Schema.Types.Number, required: true },
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
    FIRST = 1,
    SECOND = 2,
    THIRD = 3,
}
export interface ITicketPricing {
    tType: TicketType;
    tZones: ITicketZone[];
    tClass: TClass
    seasonType?: SeasonType;
    minPrice: number
    ceilTo: number
}

type ITicketPricingModel = Model<ITicketPricing>

const ticketPricingSchema = new Schema<ITicketPricing, ITicketPricingModel>({
    tType: {
        type: Schema.Types.Number,
        enum: TicketType,
        required: true
    },
    tZones: {
        type: [ticketZoneSchema],
        required: true
    },
    tClass: {
        type: Schema.Types.Number,
        enum: TClass,
        required: true
    },
    seasonType: {
        type: Schema.Types.String,
        enum: SeasonType,
        required: false
    },
    minPrice: {
        type: Schema.Types.Number,
        required: true
    },
    ceilTo: {
        type: Schema.Types.Number,
        required: true
    },
});

export const TicketPricing: ITicketPricingModel = model<ITicketPricing, ITicketPricingModel>('TicketPricing', ticketPricingSchema);
