import { ITicket } from "src/models/Ticket";
import PDFDocument from 'pdfkit'
import fs from 'fs'


export class PdfUtil {

    public static async generateTicketPdf(tickets: ITicket[]) {

        // Create a document
        const doc = new PDFDocument({ size: 'A4' });

        doc.pipe(fs.createWriteStream('example.pdf'));


        const qrImageSize = 250
        const margin = 20
        // Adding an image in the pdf.

        const width = doc.page.width;
        const height = doc.page.height;
        console.log({ width, height })

        const pageCount = Math.ceil(tickets.length / 6)
        console.log({len: tickets.length, pageCount})

        for (let i = 0; i < pageCount; i++) {
            if (0 < i) {
                doc.addPage()
            }
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 2; k++) {
                    const index = (i * 6) + (j * 2) + k
                    console.log(index, i, j, k);
                    if (index < tickets.length) {
                        const x = ((k + 1) * margin) + (k * qrImageSize)
                        const y = ((j + 1) * margin) + (j * qrImageSize)
                        doc.image(tickets[index].qrCode!, x, y, { width: qrImageSize, height: qrImageSize });
                    }
                }
            }
        }
        doc.end();
    }

}
