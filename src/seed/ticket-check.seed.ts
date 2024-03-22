import dayjs from "dayjs";
import { ITicket } from "src/models/Ticket";
import { ITicketCheck, TicketCheck } from "src/models/TicketCheck";
import { IUser } from "src/models/User";
import { RandUtil } from "./rand-util";

export default async function seedTicketChecks(tickets: ITicket[], checkers: IUser[]) {
    const existingTicketChecks = await TicketCheck.find();
    if (existingTicketChecks.length > 0) {
        console.log("TicketChecks Already Exists")
        return existingTicketChecks;
    }
    const ticketChecks: ITicketCheck[] = []

    for (let i = 0; i < 100; i++) {
        const checker = RandUtil.getRandElement(checkers);
        const ticket = RandUtil.getRandElement(tickets);
        const startDate = dayjs().subtract(1,"year"); // Today's date
        const futureDate = dayjs();
        const newDate = RandUtil.randomDate(startDate.toDate(), futureDate.toDate()); // Generate random date within the range
        const isFined = RandUtil.getRandElement([true,true,false]);
        const fine = isFined ? 5000 + (2 * ticket.price) : 0;

        const ticketCheck: ITicketCheck = {
            ticket: ticket._id!,
            checker: checker._id!,
            isFined: isFined,
            fine: fine,
            checkedAt: newDate,
        }
        ticketChecks.push(ticketCheck)
    }
    const ticketChecksSaved = await TicketCheck.insertMany(ticketChecks);


    console.log(`${ticketChecksSaved.length} TicketChecks Added`)
    return ticketChecksSaved;
}
