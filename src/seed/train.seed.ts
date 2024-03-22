import { IStop, ITrain, Train } from "src/models/Train";
import { trains as trainData } from "./data/train-data";
import { IStation } from "src/models/Station";
import { Util } from "src/util/Util";

export default async function seedTrains(stations: IStation[]): Promise<ITrain[]> {
    const existingTrains = await Train.find();
    if (existingTrains.length) {
        console.log("Trains Already Exists")
        return existingTrains;
    }

    const trainDataUpdated = trainData.map(train => {
        const trFrom = stations.find(s => s.sName === train.trFrom)!._id
        const trTo = stations.find(s => s.sName === train.trTo)!._id

        if (!trFrom || !trTo) {
            throw new Error(`invalid stations from: ${train.trFrom}, to: ${train.trTo}`)
        }
        const stops: (IStop | null)[] = train.stops.map((stop): (IStop | null) => {
            const st = stations.find(s => s.sName === stop.station.trim())!._id
            if (!st) {
                console.error(`Station not found for : ${stop.station}`)
            } else {
                const {day, hour, minute} = Util.parseTrainStopTime(stop.time)
                return { station: st, time: stop.time, day, hour, minute}
            }
            return null;
        })

        return {
            ...train,
            trFrom,
            trTo,
            stops: stops.filter(s => s !== null) as IStop[],
        }
    })

    const trainsSaved = await Train.insertMany(trainDataUpdated);


    console.log(`${trainsSaved.length} Trains Added`)
    return trainsSaved;
}
