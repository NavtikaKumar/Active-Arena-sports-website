const mongoose = require("mongoose");

const trainerSchema = mongoose.Schema({
    name: String,
    gender: String,
    age: String,
    sport: String
})

module.exports = mongoose.model('Trainer',trainerSchema, 'TrainersData');