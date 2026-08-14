require ('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const Holdings = require("./model/HoldingSchema");
const Positions = require('./model/PositionsSchema');
const Order = require("./model/OrderSchema");

const signupRoute = require("./routes/signupRoute");
const loginRoute = require("./routes/loginRoute");


const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URI;

async function main() {
    await mongoose.connect(MONGODB_URL);
};

main()
    .then(() => {
        console.log("connected to db");
    }).catch((err) => {
        console.log(err);
    });

const allowedOrigins = [
    process.env.FRONTEND_URL || "http://localhost:5173",
    process.env.DASHBOARD_URL || "http://localhost:5174",
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps, curl, Postman)
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
}));
app.use(bodyParser.json());


app.use("/", signupRoute);
app.use("/", loginRoute);


app.get("/", (req, res) => {
    res.send("Server Connect Successfully")
});

app.get("/allHoldings", async (req, res) => {
    let allHoldings = await Holdings.find({});
    res.json(allHoldings)
});

app.get("/allPositions", async (req, res) => {
    let allPositions = await Positions.find({});
    res.json(allPositions);
});

app.post("/newOrder", (req, res) => {
    let newOrder = new Order({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode
    });

    newOrder.save();

    res.send("New Order Was Saved")
})

app.get("/allOrders", async (req, res) => {
    try {
        let allOrders = await Order.find({});
        res.json(allOrders);
    } catch (err) {
        console.log(err);
    }
});

app.listen(PORT, () => {
    console.log("Server Started");
});