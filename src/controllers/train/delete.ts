import { RequestHandler } from "express";
import { Train } from '../../models/Train';

const deleteOne: RequestHandler = async (req, res) => {
  const { trainId } = req.params
  const result = await Train.deleteOne({_id: trainId});
  res.status(200).json({success: true, data: result.deletedCount === 1});
};

export { deleteOne };
