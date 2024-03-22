import Joi from '@hapi/joi';
import { RequestHandler } from 'express';
import { validationHandler } from 'src/middleware/validation-middleware';
import { ApprovalStatus, User } from '../../models/User';
import { Util } from 'src/util/Util';

export const addUserSchema = Joi.object().keys({
  title: Joi.string().allow(null).optional(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().allow(null).optional(),
  role: Joi.number().required(),
  approvalStatus: Joi.number().allow(null).optional(),
});

const registerWrapper: RequestHandler = async (req, res) => {
  const {
    email, password, firstName, lastName, title, role
  } = req.body;

  const existingUser = await User.findOne({ email })
  if (existingUser) {
    res.status(200).json({ success: false, message: "Email already exists" });
    return
  }

  const approvalStatus = ApprovalStatus.PENDING

  const user = new User({
    email, firstName, lastName, createdOn: Date.now(), title, role, approvalStatus
  });
  user.password = user.encryptPassword(password);

  await user.save();

  const token = Util.jwtSign({userId: user._id});

  res.status(201).json({success: true, data: token});
};

export const register = validationHandler(registerWrapper, { body: addUserSchema });
