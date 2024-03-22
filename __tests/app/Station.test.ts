import request from 'supertest';
import { app } from '../../src/app';
import { IStation, Station, TrainLine } from '../../src/models/Station';
import { Types } from 'mongoose';

const mockingoose = require("mockingoose");

jest.mock('../../src/models/Station');

describe('Station Test', () => {

  test('GET /api/public/station/all should return 200', done => {
    request(app).get('/api/public/station/all').expect(200, done);
  });

  test('GET /station/details/ should return 200', done => {
    const sId = new Types.ObjectId('507f191e810c19729de860ea')
    const returnValue: IStation = {
      _id: sId,
      sName: 'Maradana',
      sLine: TrainLine.MAIN_LINE,
      position: 12
    };

    mockingoose(Station).toReturn(returnValue, 'findOne');
    request(app).get(`/api/station/details/${sId}`)
      .expect(200, done);
  });

});
