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

    dailyCalories: {
        type: Number,
        required: true
    },

    meals: [
        {
            meal: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Meal",
                required: true
            },
            mealType: {
                type: String,
                required: true
            }
        }
    ]
});

module.exports =
    mongoose.models.DietPlan ||
    mongoose.model("DietPlan", dietPlanSchema);