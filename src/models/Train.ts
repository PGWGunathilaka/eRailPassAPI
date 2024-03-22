import { Model, Schema, Types, model } from "mongoose";
import { Station, TrainLine } from "./Station";

export enum TrainStatus {
  RUNNING = 'Running',
  IN_MAINTENANCE = 'in Maintenance',
  NO_SERVICE = 'out of service'
}
export interface IStop {
  station: Types.ObjectId
  time: string
  day: number
  hour: number
  minute: number
}

export interface ITrain {
  trNo: number;
  trName: string;
  trLine: TrainLine;
  trFrom: Types.ObjectId;
  trTo: Types.ObjectId;
  trStatus: TrainStatus;
  stops: IStop[];
}

type ITrainModel = Model<ITrain>

const stopSchema = new Schema<IStop>({
  station: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Station.modelName,
  },
  time: {
    type: Schema.Types.String,
    required: true
  },
  day: {
    type: Schema.Types.Number,
    required: true
  },
  hour: {
    type: Schema.Types.Number,
    required: true
  },
  minute: {
    type: Schema.Types.Number,
    required: true
  },
})

const schema = new Schema<ITrain, ITrainModel>({
  trNo: {
    type: Schema.Types.Number,
    required: true
  },
  trName: {
    type: Schema.Types.String,
    required: true
  },
  trLine: {
    type: Schema.Types.Number,
    enum: TrainLine,
    required: true
  },
  trFrom: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Station.modelName
  },
  trTo: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Station.modelName
  },
  trStatus: {
    type: Schema.Types.String,
    enum: TrainStatus,
    required: true
  },
  stops: [
    stopSchema
  ]
});

export const Train: ITrainModel = model<ITrain, ITrainModel>('Train', schema);
