import { ITicketPricing, TClass } from "src/models/TicketPricing";

export class TicketPricing {
    public static calculateNormalPricing(prices: ITicketPricing[], distance: number, tClass: TClass): number {
        const p0 = prices.find(p => p.tClass === tClass)!
        const z0 = p0.tZones.find(z => z.maxDistance >= distance && z.minDistance < (distance || 1))!
        const y = z0.pricePerKm * distance
        const x = p0.ceilTo
        const r = y + (x - (y % x || x))
        return r
    }
}
