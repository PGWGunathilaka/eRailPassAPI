import { RequestHandler } from 'express';
import { Role, User } from '../../models/User';
import { PopulateOptions } from 'mongoose';

const stationMasters: RequestHandler = async (req, res) => {
  const options: PopulateOptions = {path: 'station', select: 'sName'}
  const users = await User.find({role: Role.STATION_MASTER}).populate(options);
  res.send({ success: true, data: users });
};

export { stationMasters };
