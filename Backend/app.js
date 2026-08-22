require('dotenv').config();

const express = require("express");
const app = express();
app.use(express.json());
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

app.post("/workoutplan", async (req, res) => {
    try {
        const { goal, daysPerWeek, difficulty } = req.body;
        const workout = await Workout.findOne({
            goal,
            difficulty,
            daysPerWeek
        }).populate("days.exercises.exercise");
        if(!workout){
            res.status(404).json("Nothing found!");
        }
        const response = {
            name: workout.name,
            description: workout.description,
            goal: workout.goal,
            difficulty: workout.difficulty,

            days: workout.days.map((day) => {
                return {
                    dayNumber: day.dayNumber,
                    dayName: day.dayName,

                    exercises: day.exercises.map((item) => {
                        return {
                            name: item.exercise.name,
                            sets: item.sets,
                            reps: item.reps,
                            restTime: item.restTime,
                            bodyPart: item.exercise.bodyPart,
                            equipment: item.exercise.equipment,
                            difficulty: item.exercise.difficulty,
                            instructions: item.exercise.instructions
                        };
                    })
                };
            })
        };
        res.status(200).json(response);

    } catch (err) {
        res.status(404).json("404");
    }


});
