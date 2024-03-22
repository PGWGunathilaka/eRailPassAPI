import { IUser, ApprovalStatus, Role, User, encryptPassword } from "src/models/User";


export const adminEmail = `admin@erailpass.com`;
export const smEmail = `sm@erailpass.com`;
export const checkerEmail = `checker@erailpass.com`;

export default async function seedUsers() {

    const existingUsers = await User.find()
    if ((existingUsers).length) {
        console.log("Users Already Exists")
        return existingUsers
    }
    const admin: IUser = {
        password: encryptPassword("111111"),
        firstName: `Super Admin`,
        lastName: '',
        email: adminEmail,
        role: Role.SUPER_ADMIN,
    };
    
    const user1 = await User.create(admin);

    const sm: IUser = {
        password: encryptPassword("111111"),
        firstName: `Station Master`,
        lastName: '',
        email: smEmail,
        role: Role.STATION_MASTER,
        approvalStatus: ApprovalStatus.APPROVED,
    };
    const user2 = await User.create(sm);


    const checker: IUser = {
        password: encryptPassword("111111"),
        firstName: `Checker`,
        lastName: '',
        email: checkerEmail,
        role: Role.CHECKER,
        approvalStatus: ApprovalStatus.APPROVED,
    };
    const user3 = await User.create(checker);

    console.log("Users Added")
    return [user1, user2, user3];
}
