require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongo_URL = process.env.MONGO_URL;
const cors = require("cors");
const Exercise = require("./Models/exercise");
const Workout = require("./Models/workout");
const exercise = require('./Models/exercise');


app.use(cors({
    origin: "http://localhost:5173"
}));
async function main() {
    await mongoose.connect(mongo_URL);
    console.log("Database Connected!");
    app.listen(process.env.PORT, () => {
        console.log("Server is listening to port");
    })
}
main().catch((err) => {
    console.log(err);
})

app.get("/test", async (req, res) => {
    const sample=await Workout.find({}).populate("exercises");
    console.log(sample);
    console.log(JSON.stringify(sample, null, 2));
    res.send("Done!");
});