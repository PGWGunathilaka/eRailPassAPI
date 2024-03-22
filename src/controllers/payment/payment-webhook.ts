import { RequestHandler } from "express";
import { stripe } from '.';
import { Ticket } from "src/models/Ticket";
import { Util } from "src/util/Util";


const paymentWebhook: RequestHandler = async (req, res) => {
    // const sig = req.headers['stripe-signature'];
    const body = req.body;

    const event = req.body;
    console.log("Payment response body", body)

    // TODO this needs to be fixed - this works, but insecure
    // try {
    //     event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_ENDPOINT_SECRET!);
    // } catch (err) {
    //     console.log("invalid signature:", err);
    //     res.status(400).end();
    //     return;
    // }

    let intent = null;
    switch (event.type) {
        case 'payment_intent.succeeded': {
            intent = event.data.object;
            console.log("Succeeded:", intent.id);

            const ticket = await Ticket.findOne({ paymentId: intent.id })
            if (!ticket) {
                console.log("Ticket not found for paymentId", intent.id)
            } else {
                ticket.isPaid = true
                ticket.qrCode = await Util.generateQrCodeFromTicket(ticket)
                await ticket.save()
                console.log("Ticket updated:", intent.id);
            }
            break;
        }
        case 'payment_intent.payment_failed': {
            intent = event.data.object;
            const message = intent.last_payment_error?.message;
            console.log('Failed:', intent.id, message);
            break;
        }
    }
    res.sendStatus(200);
};

export { paymentWebhook }
