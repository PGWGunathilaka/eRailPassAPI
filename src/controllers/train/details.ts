import { RequestHandler } from 'express';
import { Train } from 'src/models/Train';


const details: RequestHandler = async (req, res) => {
  const { trainId } = req.params;

  const train = await Train.findById(trainId);
  res.status(200).json({success: true, data: train?.toJSON()});
};

export { details };
