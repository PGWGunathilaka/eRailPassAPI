import dayjs from 'dayjs';
import * as fs from 'fs';
import jwt, { SignOptions } from 'jsonwebtoken';
import { HydratedDocument } from 'mongoose';
import QRCode from 'qrcode';
import { Station } from 'src/models/Station';
import { ITicket } from 'src/models/Ticket';
import { v4 as uuidv4 } from 'uuid';


export class Util {

    public static getId(): string {
        return uuidv4();
    }

    public static qrJwtPrivateKey(): string {
        return fs.readFileSync('./qr_jwt_private.key', 'utf8');
    }

    public static qrJwtPublicKey(): string {
        return fs.readFileSync('./qr_jwt_public.key', 'utf8');
    }

    public static dateToString(date: Date): string {
        return dayjs(date).format("YYYY-MM-DD")
    }

    public static async generateQrCodeFromTicket(ticket: HydratedDocument<ITicket>): Promise<string> {
        const startStation = await Station.findById(ticket.startStation);
        const endStation = await Station.findById(ticket.endStation);
        const payload = {
            _id: ticket._id.toHexString(),
            date: this.dateToString(ticket.date),
            from: startStation?.sName,
            to: endStation?.sName,
            tClass: ticket.tClass,
            isPaid: ticket.isPaid,
            noOfTickets: ticket.noOfTickets,
        }
        const privateKey = this.qrJwtPrivateKey()
        const signOptions: SignOptions = {
            issuer: 'eRailPass',
            expiresIn: "365d",
            algorithm: "RS256" // RSASSA [ "RS256", "RS384", "RS512" ]
        };
        const token = jwt.sign(payload, privateKey, signOptions);
        // console.log("Token :" + token);

        return await QRCode.toDataURL(token)
    }

    public static jwtSign(data: Record<string, any>): string {
        return jwt.sign(
            data,
            process.env.SECRET!,
            { expiresIn: '30d' }
        );
    }

    public static parseTrainStopTime(timeStr: string) {
        const matches = /^(?:([0-9]{0,2}):)?([0-9]{1,2}):([0-9]{1,2})$/.exec(timeStr)!;
        const day = parseInt(matches[1] || "0")
        const hour = parseInt(matches[2] || "0")
        const minute = parseInt(matches[3] || "0")
        return {day, hour, minute}
    }
}
