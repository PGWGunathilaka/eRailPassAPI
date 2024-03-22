import { Types } from 'mongoose';
import { IStation, Station, TrainLine } from '../../src/models/Station';

const mockingoose = require("mockingoose");

describe('test mongoose Station model', () => {

  test('should return the doc with findById', () => {
    const returnValue: IStation = {
      _id: new Types.ObjectId("507f191e810c19729de860ea"),
      sName: 'Maradana',
      sLine: TrainLine.MAIN_LINE,
      position: 12,
    };

    mockingoose(Station).toReturn(returnValue, 'findOne');

    return Station.findById({ _id: '507f191e810c19729de860ea' }).then(doc => {
      expect(JSON.parse(JSON.stringify(doc))).toMatchObject(returnValue);
    });
  });

});
