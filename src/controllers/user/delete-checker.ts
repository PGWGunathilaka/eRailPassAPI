import { RequestHandler } from "express";
import { Checker } from "src/models/Checker";

const deleteChecker: RequestHandler = async (req, res) => {
  const { checkerId } = req.params
  const result = await Checker.deleteOne({_id: checkerId});
  res.status(200).json({success: true, data: result.deletedCount === 1});
};

export { deleteChecker };
