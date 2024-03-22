import { Model, Schema, Types, model } from "mongoose";
import { User } from "./User";
/* spellchecker: disable */
export enum TrainLine {
    MAIN_LINE = 5,
    MATALE_LINE = 7,
    PUTTALAM_LINE = 10,
    NORTHERN_LINE = 9,
    BATTICOLOA_LINE = 1,
    COASTAL_LINE = 2,
    KV_LINE = 3,
    TRINCOMALEE_LINE = 11,
    TALAIMANNAR_LINE = 6,
}

export interface IStation {
    _id?: Types.ObjectId;
    sName: string;
    sLine: TrainLine;
    sm?: string;
    position: number
}

type IStationModel = Model<IStation>

const schema = new Schema<IStation, IStationModel>({
    sName: {
        type: Schema.Types.String,
        required: true
    },
    sLine: {
        type: Schema.Types.Number,
        enum: TrainLine,
        required: true
    },
    sm: {
        type: Schema.Types.ObjectId,
        ref: User.modelName,
        required: false
    },
    position: {
        type: Schema.Types.Number,
        required: true
    },
});

export const Station: IStationModel = model<IStation, IStationModel>('Station', schema);
