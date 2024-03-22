import * as mongoose from 'mongoose';
import seed from "./seed";
require('dotenv').config();


function getMongooseUri (): string {
    return process.env.MONGO_URL!;
}

export default async function databaseSetup() {
    try {
        await mongoose.connect(getMongooseUri(), {});
    } catch (e) {
        console.error("Database initializing error", e)
    }
}


async function runSeed () {
    await databaseSetup();

    await seed();

    await mongoose.disconnect();
}

// noinspection JSIgnoredPromiseFromCall
runSeed().catch(console.log);
