import { RequestHandler } from 'express';
import { Station } from 'src/models/Station';
import { Ticket } from 'src/models/Ticket';


const passengerTicketStats: RequestHandler = async (req, res) => {
  const users = await Ticket.aggregate([
    {
      $project: {
        ymd: {
          $dateToString: {
            format: "%Y-%m-%d",
            date: "$date"
          }
        },
        user_id: 1,
        date: 1,
        startStation: 1,
        tType: 1
      }
    },
    {
      $group: {
        _id: {
          ymd: "$ymd",
          station: "$startStation",
          type: "$tType"
        },
        count: { "$sum": 1 }
      }
    },
    {
      $group: {
        _id: {
          date: "$_id.ymd",
          station: "$_id.station"
        },
        ticketCounts: {
          $push: {
            type: "$_id.type",
            count: "$count"
          }
        }
      }
    }
  ]
  )
  await Station.populate(users, {path: "_id.station"});
  res.send({ success: true, data: users });
};

export { passengerTicketStats };
