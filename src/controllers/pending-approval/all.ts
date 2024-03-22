import { RequestHandler } from 'express';
import { Role, User } from 'src/models/User';

const all: RequestHandler = async (req, res) => {
  const pendingApprovals = await User
    .find({ role: { $in: [Role.STATION_MASTER, Role.CHECKER] } })
    .sort([['isApproved', 'asc'], ['createdAt', 'desc']])
  res.status(200).json({success: true, data: pendingApprovals});
};

export { all };

