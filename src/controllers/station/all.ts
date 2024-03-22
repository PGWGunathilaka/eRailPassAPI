import { RequestHandler } from 'express';
import { Station } from '../../models/Station';
import { PopulateOptions } from 'mongoose';

const all: RequestHandler = async (req, res) => {
  const options: PopulateOptions = { path: 'sm' }
  const stations = await Station.find().populate(options);
  res.status(200).json({ success: true, data: stations });
};

export { all }
