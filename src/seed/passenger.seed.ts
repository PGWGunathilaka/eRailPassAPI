import { IUser, Role, User, encryptPassword } from "src/models/User";
import { passengers as data } from "./data/passenger-data";
import dayjs from "dayjs";
import { RandUtil } from "./rand-util";

export default async function seedPassengers() {
    const existingPassengers = await User.find({role: Role.PASSENGER});
    if (1 < existingPassengers.length) {
        console.log("Passengers Already Exists")
        return existingPassengers;
    }

    const passengers: IUser[] = data.map((p, i): IUser => {
        const nameParts = p.split(" ")

        const startDate = dayjs(); // Today's date
        const futureDate = dayjs().add(30, 'day');
        const newDate = RandUtil.randomDate(startDate.toDate(), futureDate.toDate()); // Generate random date within the range

        return {
            firstName: nameParts[0],
            lastName: nameParts[1],
            email: `passenger${i}@erailpass.com`,
            password: encryptPassword('111111'),
            role: Role.PASSENGER,
            createdAt: newDate
        }
    })

    const passengersSaved = await User.insertMany(passengers);


    console.log(`${passengersSaved.length} Passengers Added`)
    return passengersSaved;
}
