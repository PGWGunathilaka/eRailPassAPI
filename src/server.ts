/// <reference path="global.d.ts" />
import dotenv = require('dotenv');
import * as http from "http";

const result = dotenv.config();
if (result.error) {
  dotenv.config({ path: '.env' });
}

import { app } from './app';
import MongoConnection from './mongo-connection';
import { logger } from './logger';

const mongoConnection = new MongoConnection(process.env.MONGO_URL!);

let server: http.Server;

if (process.env.MONGO_URL == null) {
  logger.log({
    level: 'error',
    message: 'MONGO_URL not specified in environment'
  });
  process.exit(1);
} else {
  mongoConnection.connect(() => {
    server = app.listen(app.get('port'), (): void => {
      console.log('\x1b[36m%s\x1b[0m', // eslint-disable-line
        `🌏 Express server started at http://localhost:${app.get('port')}   `);
    });
  });
}

// Close the Mongoose connection, when receiving SIGINT
process.on('SIGINT', () => {
  logger.info('Gracefully shutting down');
  mongoConnection.close(false);
  server.close();
});
