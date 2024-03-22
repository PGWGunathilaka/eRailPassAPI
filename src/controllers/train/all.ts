import { RequestHandler } from 'express';
import { Train } from '../../models/Train';

const all: RequestHandler = async (req, res) => {
  const trains = await Train.find().populate(['trFrom', 'trTo']);
  res.status(200).json({success: true, data: trains});
};

export { all }
