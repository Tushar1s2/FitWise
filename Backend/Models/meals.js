const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    mealType: {
        type: String,
        required: true,
        enum: [
            "Breakfast",
            "Mid-Morning Snack",
            "Lunch",
            "Evening Snack",
            "Dinner",
            "Pre-Workout",
            "Post-Workout"
        ]
    },

    foods: {
        type: [String],
        required: true
    },

    calories: {
        type: Number,
        required: true
    },

    protein: {
        type: Number,
        required: true
    },

    carbs: {
        type: Number,
        required: true
    },

    fats: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Meal", mealSchema);