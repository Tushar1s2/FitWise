const mongoose = require("mongoose");
require("dotenv").config();

const Exercise = require("./models/exercise");
const Meal = require("./models/meals");
const Workout = require("./models/workout");
const DietPlan = require("./models/dietPlan");

const exercises = require("./data/exercises");
const meals = require("./data/meals");
const workouts = require("./data/workout");
const dietPlans = require("./data/dietPlans");

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Connected!");

        // Delete old data
        await Exercise.deleteMany({});
        await Meal.deleteMany({});
        await Workout.deleteMany({});
        await DietPlan.deleteMany({});

        console.log("Old data deleted!");

        // =========================
        // EXERCISES
        // =========================

        const savedExercises = await Exercise.insertMany(exercises);

        console.log("Exercises inserted!");

        // Create exercise map
        const exerciseMap = {};

        savedExercises.forEach((exercise) => {
            exerciseMap[exercise.name] = exercise._id;
        });

        // =========================
        // MEALS
        // =========================

        const savedMeals = await Meal.insertMany(meals);

        console.log("Meals inserted!");

        // Create meal map
        const mealMap = {};

        savedMeals.forEach((meal) => {
            mealMap[meal.name] = meal._id;
        });

        // =========================
        // WORKOUTS
        // =========================

        const workoutData = workouts.map((workout) => {

            const workoutExercises = workout.exercises.map((item) => {

                return {
                    exercise: exerciseMap[item.exercise],
                    sets: item.sets,
                    reps: item.reps,
                    restTime: item.restTime
                };

            });

            return {
                name: workout.name,
                description: workout.description,
                goal: workout.goal,
                difficulty: workout.difficulty,
                exercises: workoutExercises,
                daysPerWeek: workout.daysPerWeek,
                duration: workout.duration
            };
        });

        await Workout.insertMany(workoutData);

        console.log("Workouts inserted!");

        // =========================
        // DIET PLANS
        // =========================

        const dietPlanData = dietPlans.map((plan) => {

            const planMeals = plan.meals.map((item) => {

                return {
                    meal: mealMap[item.meal],
                    mealType: item.mealType
                };

            });

            return {
                name: plan.name,
                description: plan.description,
                goal: plan.goal,
                dietType: plan.dietType,
                dailyCalories: plan.dailyCalories,
                protein: plan.protein,
                carbs: plan.carbs,
                fats: plan.fats,
                meals: planMeals
            };
        });

        await DietPlan.insertMany(dietPlanData);

        console.log("Diet plans inserted!");

        // =========================
        // CLOSE DATABASE
        // =========================

        await mongoose.connection.close();

        console.log("Database connection closed!");
        console.log("Database seeding completed successfully!");

    } catch (err) {

        console.log("Error while seeding database:", err);

        await mongoose.connection.close();
    }
}

seedDatabase();