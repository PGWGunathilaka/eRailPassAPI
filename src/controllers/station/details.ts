import { RequestHandler } from 'express';
import { Station } from 'src/models/Station';


const details: RequestHandler = async (req, res) => {
  const { stationId } = req.params;

  const station = await Station.findById(stationId);
  res.status(200).json({success: true, data: station?.toJSON()});
};

export { details };
