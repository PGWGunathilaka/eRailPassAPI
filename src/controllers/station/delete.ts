import { RequestHandler } from "express";
import { Station } from '../../models/Station';


const deleteOne: RequestHandler = async (req, res) => {
  const { stationId } = req.params
  const result = await Station.deleteOne({ _id: stationId });
  res.status(200).json({ success: true, data: result.deletedCount === 1 });
};

export { deleteOne };
