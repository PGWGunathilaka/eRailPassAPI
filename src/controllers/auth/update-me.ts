import { RequestHandler } from 'express';

const updateMe: RequestHandler = async (req, res) => {
  // TODO handle user update
  res.status(200).json({success: true, data: req.user});
};

export { updateMe }
