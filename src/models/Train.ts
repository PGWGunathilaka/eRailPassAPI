import { Document, Model, Schema, model } from "mongoose";

export enum TrainLine {
    MAIN_LINE ="Main Line",
    MATALE_LINE = "Matale Line",
    PUTTALAM_LINE ="Puttalam Line",
    NORTHER_LINE = "Norther Line",
    BATTICOLOA_LINE = 'Batticoloa Line',
    COAST_LINE ='Coast Line',
    KV_LINE ='Kv Line',
    TRINCOMALEE_LINE='Trincomalee line',
    TALAIMANNAR_LINE = 'Talaimannar Line',
}
export enum TrainStatus {
    RUNNING = 'Running',
    MAINTAINING = 'in Maintaining',
    NO_SERVICE = 'out of service'
}
export interface ITrain extends Document{
    trNo : number;
    trName: string;
    trLine: TrainLine;
    trFrom: string;
    trTo:string;
    trStatus: TrainStatus;
  }

  interface ITrainModel extends Model<ITrain> { }

  const schema = new Schema({
    trNo : { type: Schema.Types.String, required: true },
    trName: { type: Schema.Types.String, required: true },
    trLine: {type: Schema.Types.String, enum:TrainLine, required:true},
    trFrom: { type: Schema.Types.String, required: true },
    trTo:{ type: Schema.Types.String, required: true },
    trStatus: {type: Schema.Types.String, enum:TrainStatus, required:true},
      });
  
  export const Book: ITrainModel = model<ITrain, ITrainModel>('Book', schema);
  