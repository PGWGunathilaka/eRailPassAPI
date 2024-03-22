import { IStation, Station } from "src/models/Station";
import { stationData } from "./data/station-data";

export default async function seedStations(): Promise<IStation[]> {
    const existingStations = await Station.find();
    if (existingStations.length) {
        console.log("Stations Already Exists")
        return existingStations;
    }

    const stations = await Station.insertMany(stationData);


    console.log(`${stations.length} Stations Added`)
    return stations;
}
