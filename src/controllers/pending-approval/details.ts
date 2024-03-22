import { RequestHandler } from 'express';
import { User } from 'src/models/User';


const details: RequestHandler = async (req, res) => {
    const { userId } = req.params;

    const pendingApproval = await User.findById(userId);
    res.status(200).json({success: true, data: pendingApproval?.toJSON()});
};

export { details };
