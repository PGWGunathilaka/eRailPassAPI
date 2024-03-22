import { Role, User } from "./User";

const mongoose = require('mongoose');

const passengerSchema = new mongoose.Schema({
    
});

export const Passenger = User.discriminator(Role.PASSENGER, passengerSchema);
