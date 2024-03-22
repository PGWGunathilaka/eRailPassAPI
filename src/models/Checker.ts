import { Role, User } from "./User";

const mongoose = require('mongoose');

const checkerSchema = new mongoose.Schema({
    
});

export const Checker = User.discriminator(Role.CHECKER, checkerSchema);
