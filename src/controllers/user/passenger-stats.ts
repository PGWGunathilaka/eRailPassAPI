import { RequestHandler } from 'express';
import { Passenger } from 'src/models/Passenger';

const passengerStats: RequestHandler = async (req, res) => {
  const users = await Passenger.aggregate(
    [
      {
        $project: {
          ymd: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          user_id: 1,
          age: 1,
          status: 1,
          date: 1
        }
      },
      {
        $group: {
          _id: "$ymd",
          count: {
            $sum: 1
          }
        }
      }
    ]
  ); // all passengers
  res.send({ success: true, data: users });
};

export { passengerStats };
