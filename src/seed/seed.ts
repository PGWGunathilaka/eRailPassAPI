/* eslint-disable @typescript-eslint/no-unused-vars */
import seedCheckers from "./checker.seed";
import seedPassengers from "./passenger.seed";
import seedStationMasters from "./station-master.seed";
import seedStations from "./station.seed";
import seedTicketChecks from "./ticket-check.seed";
import seedTicketPricing from "./ticket-pricing-seed";
import seedTickets from "./ticket.seed";
import seedTrains from "./train.seed";
import seedUsers from "./user.seed";

export default async function seed () {
    const users = await seedUsers();
    const stations = await seedStations()
    const ticketPricing = await seedTicketPricing()
    const passengers = await seedPassengers()
    const stationMasters = await seedStationMasters()
    const checkers = await seedCheckers()
    const trains = await seedTrains(stations)
    const tickets = await seedTickets(stations, passengers, trains, ticketPricing)
    const ticketChecks = await seedTicketChecks(tickets, checkers)
}
