const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PositionSchema = new Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

const Positions = mongoose.model("Positions", PositionSchema);

module.exports = Positions;