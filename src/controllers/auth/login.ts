import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../../models/User';
import { Util } from 'src/util/Util';

const login: RequestHandler = async (req, res) => {
  const { email = undefined, password = undefined } = req.body;

  const user = await User.findOne({ email });

  if (user && user.validPassword(password)) {
    const token = Util.jwtSign({userId: user._id});
    return res.status(200).json({ success: true, data: token });
  }

  return res.status(200).json({ success: false, message: 'Auth failed'});
};

export { login };
