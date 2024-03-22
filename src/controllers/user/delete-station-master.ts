import { RequestHandler } from "express";
import { StationMaster } from "src/models/StationMaster";

const deleteStationMaster: RequestHandler = async (req, res) => {
  const { stationMasterId } = req.params
  const result = await StationMaster.deleteOne({_id: stationMasterId});
  res.status(200).json({success: true, data: result.deletedCount === 1});
};

export { deleteStationMaster };
