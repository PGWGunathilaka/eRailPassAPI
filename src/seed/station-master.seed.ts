import { IUser, ApprovalStatus, Role, User, encryptPassword } from "src/models/User";
import { smNames } from "./data/sm-data";
import { stationData } from "./data/station-data";
import { Station } from "src/models/Station";

export default async function seedStationMasters() {
    const existingStationMasters = await User.find({role: Role.STATION_MASTER});
    if (1 < existingStationMasters.length) {
        console.log("StationMasters Already Exists")
        return existingStationMasters;
    }

    const stationmasters: Array<Promise<IUser>> = stationData.map( async (s, i): Promise<IUser> => {
        const nameParts = smNames[i].split(" ")
        const data = {
            firstName: nameParts[0],
            lastName: nameParts[1],
            email: `sm${i}@erailpass.com`,
            password: encryptPassword('111111'),
            role: Role.STATION_MASTER,
            approvalStatus: ApprovalStatus.PENDING,
        }
        const sm = await User.create(data);
        await Station.updateOne({ sName: s.sName }, { $set: { sm: sm._id } })
        return sm
    })

    const stationmastersSaved = await Promise.all(stationmasters);


    console.log(`${stationmastersSaved.length} StationMasters Added`)
    return stationmastersSaved;
}
