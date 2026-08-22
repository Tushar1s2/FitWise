const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    goal: {
        type: String,
        enum: ["weight-loss", "muscle-gain", "maintenance"],
        required: true
    },

    difficulty: {
        type: String,
        enum: ["Beginner", "Intermediate", "Advanced"],
        required: true
    },

    days: [
        {
            dayNumber: {
                type: Number,
                required: true
            },

            dayName: {
                type: String,
                required: true
            },

            exercises: [
                {
                    exercise: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "Exercise",
                        required: true
                    },

                    sets: {
                        type: Number,
                        required: true
                    },

                    reps: {
                        type: String,
                        required: true
                    },

                    restTime: {
                        type: String,
                        required: true
                    }
                }
            ]
        }
    ],

    daysPerWeek: {
        type: Number,
        required: true
    },

    duration: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Workout", workoutSchema);