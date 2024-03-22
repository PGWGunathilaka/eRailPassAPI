import { Role, User } from "./User";

const mongoose = require('mongoose');

const stationMasterSchema = new mongoose.Schema({
    
});

export const StationMaster = User.discriminator(Role.STATION_MASTER, stationMasterSchema);
