import Joi from '@hapi/joi';
import { RequestHandler } from 'express';
import { validationHandler } from 'src/middleware/validation-middleware';
import { User } from 'src/models/User';

const updatePendingApprovalSchema = Joi.object().keys({
    _id: Joi.string().required(),
    status: Joi.number().required(),
  });
  
  const addWrapper: RequestHandler = async (req, res) => {
    const {_id: pendingApprovalId, status: approvalStatus} = req.body
    const pendingApproval = await User.findOneAndUpdate({_id: pendingApprovalId}, { $set: {approvalStatus} }, {new: true});
    res.status(200).json({success: true, data: pendingApproval});
  };
  
  export const update = validationHandler(addWrapper, {body: updatePendingApprovalSchema});
  
