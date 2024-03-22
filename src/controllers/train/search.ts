import { RequestHandler } from 'express';
import { IStop, ITrain, Train } from '../../models/Train';
import Joi from '@hapi/joi';
import { IStation, Station } from 'src/models/Station';
import { validationHandler } from 'src/middleware/validation-middleware';

const updateTrainSchema = Joi.object().keys({
  from: Joi.string().required(),
  to: Joi.string().required(),
  date: Joi.string().optional(),
});

const addWrapper: RequestHandler = async (req, res) => {
  const { from, to } = req.body
  const fromS = await Station.findOne({sName: from})
  const toS = await Station.findOne({ sName: to })
  if (!fromS || !toS) {
    return res.status(200).json({ success: false, message: "Input stations are invalid" });
  }
  const t = await Train.find({ $and: [{ stops: { $elemMatch: { station: fromS?._id } } }, { stops: { $elemMatch: { station: toS?._id } } }] })
  const trainsFinal = t.filter(t => isValidDirection(t, fromS, toS));
  if (!trainsFinal.length) {
    return res.status(200).json({ success: false, message: "No trains available" });
  }
  await Train.populate(trainsFinal, [{ path: 'trFrom' }, { path: 'trTo' }, { path: 'stops', populate: [{path: 'station'}]}])
  res.status(200).json({success: true, data: trainsFinal});
};


const isValidDirection = (train: ITrain, from: IStation, to: IStation) => {
  const fromStop = train.stops.find(s => s.station.equals(from._id));
  const toStop = train.stops.find(s => s.station.equals(to._id));
  if (!fromStop || !toStop) {
    return false
  }
  const diff = getTimeInt(toStop) - getTimeInt(fromStop)
  return 0 < diff
}

const getTimeInt = (stop: IStop) => {
  return (stop.day * 24 * 60) + (stop.hour * 60) + stop.minute
}

export const search = validationHandler(addWrapper, { body: updateTrainSchema });
