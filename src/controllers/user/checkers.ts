import { RequestHandler } from 'express';
import { Role, User } from '../../models/User';
import { PopulateOptions } from 'mongoose';

const checkers: RequestHandler = async (req, res) => {
  const users = await User.find({role: Role.CHECKER});
  res.send({ success: true, data: users });
};

export { checkers };
