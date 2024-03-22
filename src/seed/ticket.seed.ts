import dayjs from 'dayjs';
import { IStation } from "src/models/Station";
import { ITicket, Ticket } from "src/models/Ticket";
import { ITicketPricing, TClass, TicketType } from "src/models/TicketPricing";
import { ITrain } from "src/models/Train";
import { IUser } from "src/models/User";
import { TicketPricing } from "src/util/TicketPricing";
import { RandUtil } from "./rand-util";
import { Util } from 'src/util/Util';

export default async function seedTickets(stations: IStation[], passengers: IUser[], trains: ITrain[], pricing: ITicketPricing[]) {
    const existingTickets = await Ticket.find();
    if (existingTickets.length) {
        console.log("Tickets Already Exists")
        return existingTickets;
    }
    const tickets: ITicket[] = []

    for (let i = 0; i < 1000; i++) {
        try {
            const tClass = RandUtil.getRandElement([TClass.FIRST, TClass.SECOND, TClass.THIRD])// Pick class
            const train = RandUtil.getRandElement(trains) // Pick random train
            const filteredStations = stations.filter(station => station.sLine === train.trLine);
            const startStation = RandUtil.getRandElement(filteredStations)// Pick random station from same line 
            const remainingStationsWithoutStart = filteredStations.filter(station => station._id !== startStation._id); // Remove the start station from the remaining stations
            const endStation = RandUtil.getRandElement(remainingStationsWithoutStart); // Pick another random station from the remaining stations
            const distance = Math.abs(startStation.position - endStation.position);
            const price = TicketPricing.calculateNormalPricing(pricing, distance, tClass);// calculate distance and pricing
            const user = RandUtil.getRandElement(passengers); // Pick random passenger
            const startDate = dayjs().subtract(30, 'day'); // 30 days before
            const futureDate = dayjs(); // Today's date
            const newDate = RandUtil.randomDate(startDate.toDate(), futureDate.toDate()); // Generate random date within the range
            const paymentStatus = RandUtil.getRandElement([true, false])// Pick class
            const ticketCount = RandUtil.getRandElement([1, 1, 1, 2, 3, 4])// Pick class

            const data: ITicket = {
                price: price,
                startStation: startStation._id!,
                endStation: endStation._id!,
                date: newDate,
                user: user,
                isPaid: paymentStatus,
                tClass: tClass,
                noOfTickets: ticketCount,
                tType: TicketType.NORMAL,
            }
            const ticket = await Ticket.create(data)
            ticket.qrCode = await Util.generateQrCodeFromTicket(ticket)
            await ticket.save()
            tickets.push(ticket)
        } catch (e) {
            console.log("Error Creating Ticket", e)
        }
    }

    console.log(`${tickets.length} Tickets Added`)
    return tickets;
}
