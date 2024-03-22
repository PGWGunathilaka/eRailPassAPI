import { RequestHandler } from 'express';
import { Checker } from 'src/models/Checker';
import { TicketCheck } from 'src/models/TicketCheck';

const ticketCheckedStats: RequestHandler = async (req, res) => {

  const users = await TicketCheck.aggregate(
    [
      {
        $project: {
          ymd: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: "$checkedAt",
            },
          },
          _id: 1,
          ticket: 1,
          isFined: 1,
          date: 1,
          checker: "$checker",
          fine: 1,
        },
      },
      {
        $group: {
          _id: { ymd: "$ymd", checker: "$checker" },
          count: {
            $sum: 1,
          },
          isFined: {
            $sum: {
              $cond: {
                if: {
                  $eq: ["$isFined", true],
                },
                then: 1,
                else: 0,
              },
            },
          },
          // Count documents where isFined is true
          fineTotal: {
            $sum: "$fine",
          },

        },

      },
    ]
  ); // all passengers
  await Checker.populate(users, {path: "_id.checker"});
  res.send({ success: true, data: users });
};

export { ticketCheckedStats };
