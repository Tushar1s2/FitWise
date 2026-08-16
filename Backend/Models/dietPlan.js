const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dietPlanSchema = new Schema({
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
        required: true
    },

    dietType: {
        type: String,
        required: true,
        enum: [
            "Vegetarian",
            "Non-Vegetarian",
            "Vegan",
            "Eggetarian"
        ]
    },

    calories: {
        type: Number,
        required: true
    },

    meals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Meal"
        }
    ]
});

module.exports = mongoose.model("DietPlan", dietPlanSchema);