import { ITicketPricing, TClass, TicketPricing, TicketType } from "src/models/TicketPricing";

export default async function seedTicketPricing() {
    const docs = await TicketPricing.find();
    if (docs.length) {
        console.log("TicketPricing Already Exists")
        return docs;
    }

    const INF = Number.POSITIVE_INFINITY

    const pricingEntries: ITicketPricing[] = [
        {
            tType: TicketType.NORMAL,
            tClass: TClass.FIRST,
            minPrice: 100,
            ceilTo: 50,
            tZones: [
                { minDistance: 0, maxDistance: 10, pricePerKm: 10.40 },
                { minDistance: 10, maxDistance: 50, pricePerKm: 9.60 },
                { minDistance: 50, maxDistance: 100, pricePerKm: 6.80 },
                { minDistance: 100, maxDistance: 200, pricePerKm: 5.60 },
                { minDistance: 200, maxDistance: INF, pricePerKm: 4.40 },
            ]
        },
        {
            tType: TicketType.NORMAL,
            tClass: TClass.SECOND,
            minPrice: 50,
            ceilTo: 50,
            tZones: [
                { minDistance: 0, maxDistance: 10, pricePerKm: 5.20 },
                { minDistance: 10, maxDistance: 50, pricePerKm: 4.50 },
                { minDistance: 50, maxDistance: 100, pricePerKm: 3.40 },
                { minDistance: 100, maxDistance: 200, pricePerKm: 2.80 },
                { minDistance: 200, maxDistance: INF, pricePerKm: 2.20 },
            ]
        },
        {
            tType: TicketType.NORMAL,
            tClass: TClass.THIRD,
            minPrice: 100,
            ceilTo: 50,
            tZones: [
                { minDistance: 0, maxDistance: 10, pricePerKm: 2.60 },
                { minDistance: 10, maxDistance: 50, pricePerKm: 2.40 },
                { minDistance: 50, maxDistance: 100, pricePerKm: 1.70 },
                { minDistance: 100, maxDistance: 200, pricePerKm: 1.40 },
                { minDistance: 200, maxDistance: INF, pricePerKm: 1.10 },
            ]
        },
    ]

    const pricingEntriesSaved = await TicketPricing.insertMany(pricingEntries)

    console.log(`${pricingEntriesSaved.length} TicketPricing Added`)
    return pricingEntriesSaved;
}
