import { RequestHandler } from 'express';

const me: RequestHandler = async (req, res) => {
  res.status(200).json({success: true, data: req.user});
};

export { me }
