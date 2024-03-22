import { IUser, ApprovalStatus, Role, User, encryptPassword } from "src/models/User";
import { checkers as data } from "./data/checker-data";

export default async function seedCheckers() {
    const existingCheckers = await User.find({role: Role.CHECKER});
    if (1 < existingCheckers.length) {
        console.log("Checkers Already Exists")
        return existingCheckers;
    }

    const checkers: IUser[] = data.map((p, i): IUser => {
        const nameParts = p.split(" ")
        return {
            firstName: nameParts[0],
            lastName: nameParts[1],
            email: `checker${i}@erailpass.com`,
            password: encryptPassword('111111'),
            role: Role.CHECKER,
            approvalStatus: ApprovalStatus.PENDING,
        }
    })

    const checkersSaved = await User.insertMany(checkers);


    console.log(`${checkersSaved.length} Checkers Added`)
    return checkersSaved;
}
