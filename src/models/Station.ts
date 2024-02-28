import { Document, Model, Schema, model } from "mongoose";

export enum SLine {
    MAIN_LINE,
    MATALE_LINE,
    PUTTALAM_LINE,
    NORTHER_LINE,
    BATTICOLOA_LINE,
    COAST_LINE,
    KV_LINE,
    TRINCOMALEE_LINE,
    TALAIMANNAR_LINE,
}

export interface IStation extends Document {
    sId:string;
    sName: string;
    sLine:SLine;
    smId: string;
    stationMasterName: string;
}

interface IStationModel extends Model<IStation> { }

const schema = new Schema({
    sId:{ type: Schema.Types.String, required: true },
    sName: { type: Schema.Types.String, required: true },
    sLine:{type: Schema.Types.String, enum:SLine, required:true},
    smId: { type: Schema.Types.String, required: true },
    stationMasterName: { type: Schema.Types.String, required: true },
  name: { type: Schema.Types.String, required: true },
  author: { type: Schema.Types.String, required: true }
});

export const Station: IStationModel = model<IStation, IStationModel>('Station', schema);