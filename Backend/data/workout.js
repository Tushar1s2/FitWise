const mongoose = require("mongoose");
const Workout = require("../models/workout");
const Exercise = require("../models/exercise");

const workouts = [

    // =========================================================
    // WEIGHT LOSS
    // =========================================================

    {
        name: "Beginner Weight Loss - 3 Days",
        description: "A beginner full-body workout focused on improving fitness and supporting weight loss.",
        goal: "weight-loss",
        difficulty: "Beginner",
        daysPerWeek: 3,
        duration: "50 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Push-Ups", sets: 3, reps: "10-15", restTime: "60 sec" },
                    { exercise: "Lat Pulldown", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Plank", sets: 3, reps: "30-60 sec", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" },
                    { exercise: "Crunches", sets: 3, reps: "15-20", restTime: "45 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Push-Ups", sets: 3, reps: "10-15", restTime: "60 sec" },
                    { exercise: "Lat Pulldown", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Leg Extension", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" },
                    { exercise: "Plank", sets: 3, reps: "30-60 sec", restTime: "60 sec" }
                ]
            }
        ]
    },

    {
        name: "Beginner Weight Loss - 4 Days",
        description: "A beginner four-day routine using manageable resistance exercises.",
        goal: "weight-loss",
        difficulty: "Beginner",
        daysPerWeek: 4,
        duration: "50 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Upper Body",
                exercises: [
                    { exercise: "Push-Ups", sets: 3, reps: "10-15", restTime: "60 sec" },
                    { exercise: "Lat Pulldown", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "10-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Lower Body",
                exercises: [
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" },
                    { exercise: "Leg Extension", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Upper Body",
                exercises: [
                    { exercise: "Push-Ups", sets: 3, reps: "10-15", restTime: "60 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "10-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Core and Lower Body",
                exercises: [
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" },
                    { exercise: "Crunches", sets: 3, reps: "15-20", restTime: "45 sec" },
                    { exercise: "Plank", sets: 3, reps: "30-60 sec", restTime: "60 sec" }
                ]
            }
        ]
    },

    {
        name: "Beginner Weight Loss - 5 Days",
        description: "A five-day beginner routine with moderate training volume.",
        goal: "weight-loss",
        difficulty: "Beginner",
        daysPerWeek: 5,
        duration: "50 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Chest and Shoulders",
                exercises: [
                    { exercise: "Push-Ups", sets: 3, reps: "10-15", restTime: "60 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Cable Fly", sets: 3, reps: "12-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Back",
                exercises: [
                    { exercise: "Lat Pulldown", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Legs",
                exercises: [
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" },
                    { exercise: "Leg Extension", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Upper Body",
                exercises: [
                    { exercise: "Push-Ups", sets: 3, reps: "10-15", restTime: "60 sec" },
                    { exercise: "Lat Pulldown", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "10-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 5,
                dayName: "Core",
                exercises: [
                    { exercise: "Crunches", sets: 3, reps: "15-20", restTime: "45 sec" },
                    { exercise: "Leg Raises", sets: 3, reps: "10-15", restTime: "60 sec" },
                    { exercise: "Plank", sets: 3, reps: "30-60 sec", restTime: "60 sec" }
                ]
            }
        ]
    },

    {
        name: "Beginner Weight Loss - 6 Days",
        description: "A six-day beginner routine with shorter and manageable sessions.",
        goal: "weight-loss",
        difficulty: "Beginner",
        daysPerWeek: 6,
        duration: "45 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Chest",
                exercises: [
                    { exercise: "Push-Ups", sets: 3, reps: "10-15", restTime: "60 sec" },
                    { exercise: "Cable Fly", sets: 3, reps: "12-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Back",
                exercises: [
                    { exercise: "Lat Pulldown", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Legs",
                exercises: [
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Leg Extension", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Shoulders",
                exercises: [
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Lateral Raise", sets: 3, reps: "12-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 5,
                dayName: "Arms",
                exercises: [
                    { exercise: "Barbell Curl", sets: 3, reps: "10-12", restTime: "60 sec" },
                    { exercise: "Tricep Pushdown", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 6,
                dayName: "Core",
                exercises: [
                    { exercise: "Crunches", sets: 3, reps: "15-20", restTime: "45 sec" },
                    { exercise: "Plank", sets: 3, reps: "30-60 sec", restTime: "60 sec" }
                ]
            }
        ]
    },

    // =========================================================
    // INTERMEDIATE WEIGHT LOSS
    // =========================================================

    {
        name: "Intermediate Weight Loss - 3 Days",
        description: "A three-day full-body routine for intermediate trainees.",
        goal: "weight-loss",
        difficulty: "Intermediate",
        daysPerWeek: 3,
        duration: "65 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Bench Press", sets: 3, reps: "8-12", restTime: "120 sec" },
                    { exercise: "Barbell Row", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Barbell Squat", sets: 3, reps: "8-12", restTime: "120 sec" },
                    { exercise: "Plank", sets: 3, reps: "30-60 sec", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Incline Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Leg Raises", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Dumbbell Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Lat Pulldown", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Romanian Deadlift", sets: 3, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Crunches", sets: 3, reps: "15-20", restTime: "45 sec" }
                ]
            }
        ]
    },

    {
        name: "Intermediate Weight Loss - 4 Days",
        description: "A four-day intermediate workout combining compound and isolation exercises.",
        goal: "weight-loss",
        difficulty: "Intermediate",
        daysPerWeek: 4,
        duration: "65 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Upper Body",
                exercises: [
                    { exercise: "Bench Press", sets: 3, reps: "8-12", restTime: "120 sec" },
                    { exercise: "Barbell Row", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Lower Body",
                exercises: [
                    { exercise: "Barbell Squat", sets: 3, reps: "8-12", restTime: "120 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Romanian Deadlift", sets: 3, reps: "8-10", restTime: "120 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Upper Body",
                exercises: [
                    { exercise: "Incline Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Lat Pulldown", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Lower Body and Core",
                exercises: [
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" },
                    { exercise: "Leg Extension", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" },
                    { exercise: "Leg Raises", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            }
        ]
    },

    {
        name: "Intermediate Weight Loss - 5 Days",
        description: "A five-day intermediate routine with balanced resistance training.",
        goal: "weight-loss",
        difficulty: "Intermediate",
        daysPerWeek: 5,
        duration: "65 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Chest and Triceps",
                exercises: [
                    { exercise: "Bench Press", sets: 4, reps: "8-12", restTime: "120 sec" },
                    { exercise: "Incline Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Tricep Pushdown", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Back and Biceps",
                exercises: [
                    { exercise: "Lat Pulldown", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Barbell Row", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Barbell Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Legs",
                exercises: [
                    { exercise: "Barbell Squat", sets: 4, reps: "8-12", restTime: "120 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Shoulders and Core",
                exercises: [
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Lateral Raise", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Crunches", sets: 3, reps: "15-20", restTime: "45 sec" },
                    { exercise: "Plank", sets: 3, reps: "30-60 sec", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 5,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Dumbbell Bench Press", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" }
                ]
            }
        ]
    },

    {
        name: "Intermediate Weight Loss - 6 Days",
        description: "A six-day intermediate routine with different muscle-group sessions.",
        goal: "weight-loss",
        difficulty: "Intermediate",
        daysPerWeek: 6,
        duration: "65 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Push",
                exercises: [
                    { exercise: "Bench Press", sets: 4, reps: "8-12", restTime: "120 sec" },
                    { exercise: "Incline Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Tricep Pushdown", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Pull",
                exercises: [
                    { exercise: "Lat Pulldown", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Barbell Row", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Barbell Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Legs",
                exercises: [
                    { exercise: "Barbell Squat", sets: 4, reps: "8-12", restTime: "120 sec" },
                    { exercise: "Romanian Deadlift", sets: 3, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Push",
                exercises: [
                    { exercise: "Dumbbell Bench Press", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Skull Crushers", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 5,
                dayName: "Pull",
                exercises: [
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Lat Pulldown", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Hammer Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 6,
                dayName: "Legs and Core",
                exercises: [
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" },
                    { exercise: "Leg Extension", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" },
                    { exercise: "Leg Raises", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            }
        ]
    },

    // =========================================================
    // ADVANCED WEIGHT LOSS
    // =========================================================

    {
        name: "Advanced Weight Loss - 3 Days",
        description: "A demanding three-day full-body routine for experienced trainees.",
        goal: "weight-loss",
        difficulty: "Advanced",
        daysPerWeek: 3,
        duration: "75 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Barbell Squat", sets: 4, reps: "6-10", restTime: "150 sec" },
                    { exercise: "Bench Press", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Barbell Row", sets: 4, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Plank", sets: 3, reps: "45-60 sec", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Deadlift", sets: 3, reps: "5-8", restTime: "150 sec" },
                    { exercise: "Incline Bench Press", sets: 4, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Pull-Ups", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Leg Raises", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Romanian Deadlift", sets: 3, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Dumbbell Bench Press", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" }
                ]
            }
        ]
    },

    {
        name: "Advanced Weight Loss - 4 Days",
        description: "An advanced four-day resistance program with compound movements.",
        goal: "weight-loss",
        difficulty: "Advanced",
        daysPerWeek: 4,
        duration: "75 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Upper Body",
                exercises: [
                    { exercise: "Bench Press", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Barbell Row", sets: 4, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Lower Body",
                exercises: [
                    { exercise: "Barbell Squat", sets: 4, reps: "6-10", restTime: "150 sec" },
                    { exercise: "Romanian Deadlift", sets: 3, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Upper Body",
                exercises: [
                    { exercise: "Incline Bench Press", sets: 4, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Pull-Ups", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Lower Body and Core",
                exercises: [
                    { exercise: "Deadlift", sets: 3, reps: "5-8", restTime: "150 sec" },
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" },
                    { exercise: "Leg Raises", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            }
        ]
    },

    {
        name: "Advanced Weight Loss - 5 Days",
        description: "A high-volume five-day program for experienced trainees.",
        goal: "weight-loss",
        difficulty: "Advanced",
        daysPerWeek: 5,
        duration: "80 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Chest and Triceps",
                exercises: [
                    { exercise: "Bench Press", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Incline Bench Press", sets: 3, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Tricep Pushdown", sets: 3, reps: "10-15", restTime: "60 sec" },
                    { exercise: "Skull Crushers", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Back and Biceps",
                exercises: [
                    { exercise: "Pull-Ups", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Barbell Row", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Barbell Curl", sets: 3, reps: "10-12", restTime: "60 sec" },
                    { exercise: "Hammer Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Legs",
                exercises: [
                    { exercise: "Barbell Squat", sets: 4, reps: "6-10", restTime: "150 sec" },
                    { exercise: "Romanian Deadlift", sets: 3, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Shoulders and Core",
                exercises: [
                    { exercise: "Dumbbell Shoulder Press", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Lateral Raise", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Front Raise", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Plank", sets: 3, reps: "45-60 sec", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 5,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Dumbbell Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" },
                    { exercise: "Leg Raises", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            }
        ]
    },

    {
        name: "Advanced Weight Loss - 6 Days",
        description: "A demanding six-day program with a push-pull-legs structure.",
        goal: "weight-loss",
        difficulty: "Advanced",
        daysPerWeek: 6,
        duration: "80 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Push",
                exercises: [
                    { exercise: "Bench Press", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Incline Bench Press", sets: 3, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Tricep Pushdown", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Pull",
                exercises: [
                    { exercise: "Pull-Ups", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Barbell Row", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Barbell Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Legs",
                exercises: [
                    { exercise: "Barbell Squat", sets: 4, reps: "6-10", restTime: "150 sec" },
                    { exercise: "Deadlift", sets: 3, reps: "5-8", restTime: "150 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Push",
                exercises: [
                    { exercise: "Dumbbell Bench Press", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Skull Crushers", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 5,
                dayName: "Pull",
                exercises: [
                    { exercise: "Lat Pulldown", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 4, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Hammer Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 6,
                dayName: "Legs and Core",
                exercises: [
                    { exercise: "Romanian Deadlift", sets: 3, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" },
                    { exercise: "Leg Extension", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Leg Raises", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            }
        ]
    },

    // =========================================================
    // MUSCLE GAIN
    // =========================================================

    {
        name: "Beginner Muscle Gain - 3 Days",
        description: "A beginner full-body resistance program focused on building muscle.",
        goal: "muscle-gain",
        difficulty: "Beginner",
        daysPerWeek: 3,
        duration: "60 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Lat Pulldown", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Dumbbell Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Leg Extension", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Barbell Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Push-Ups", sets: 3, reps: "10-15", restTime: "60 sec" },
                    { exercise: "Lat Pulldown", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" },
                    { exercise: "Tricep Pushdown", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            }
        ]
    },

    {
        name: "Beginner Muscle Gain - 4 Days",
        description: "A four-day beginner resistance program for steady muscle development.",
        goal: "muscle-gain",
        difficulty: "Beginner",
        daysPerWeek: 4,
        duration: "60 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Chest and Triceps",
                exercises: [
                    { exercise: "Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Cable Fly", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Tricep Pushdown", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Back and Biceps",
                exercises: [
                    { exercise: "Lat Pulldown", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Barbell Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Legs",
                exercises: [
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Leg Extension", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Shoulders and Arms",
                exercises: [
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Dumbbell Curl", sets: 3, reps: "10-12", restTime: "60 sec" },
                    { exercise: "Tricep Pushdown", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            }
        ]
    },

    {
        name: "Beginner Muscle Gain - 5 Days",
        description: "A five-day beginner hypertrophy-oriented routine.",
        goal: "muscle-gain",
        difficulty: "Beginner",
        daysPerWeek: 5,
        duration: "60 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Chest",
                exercises: [
                    { exercise: "Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Dumbbell Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Cable Fly", sets: 3, reps: "12-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Back",
                exercises: [
                    { exercise: "Lat Pulldown", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Legs",
                exercises: [
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Leg Extension", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Shoulders",
                exercises: [
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Lateral Raise", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Front Raise", sets: 3, reps: "12-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 5,
                dayName: "Arms",
                exercises: [
                    { exercise: "Barbell Curl", sets: 3, reps: "10-12", restTime: "60 sec" },
                    { exercise: "Hammer Curl", sets: 3, reps: "10-12", restTime: "60 sec" },
                    { exercise: "Tricep Pushdown", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            }
        ]
    },

    {
        name: "Beginner Muscle Gain - 6 Days",
        description: "A six-day beginner push-pull-legs routine.",
        goal: "muscle-gain",
        difficulty: "Beginner",
        daysPerWeek: 6,
        duration: "60 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Push",
                exercises: [
                    { exercise: "Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Tricep Pushdown", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Pull",
                exercises: [
                    { exercise: "Lat Pulldown", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Barbell Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Legs",
                exercises: [
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Leg Extension", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Push",
                exercises: [
                    { exercise: "Dumbbell Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Lateral Raise", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Tricep Pushdown", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 5,
                dayName: "Pull",
                exercises: [
                    { exercise: "Lat Pulldown", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Dumbbell Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 6,
                dayName: "Legs",
                exercises: [
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            }
        ]
    },

    // =========================================================
    // INTERMEDIATE MUSCLE GAIN
    // =========================================================

    {
        name: "Intermediate Muscle Gain - 3 Days",
        description: "A three-day compound-focused muscle-building program.",
        goal: "muscle-gain",
        difficulty: "Intermediate",
        daysPerWeek: 3,
        duration: "75 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Bench Press", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Barbell Row", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Barbell Squat", sets: 4, reps: "8-12", restTime: "120 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Incline Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 4, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Romanian Deadlift", sets: 3, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Dumbbell Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Dumbbell Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Lat Pulldown", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Tricep Pushdown", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            }
        ]
    },

    {
        name: "Intermediate Muscle Gain - 4 Days",
        description: "A four-day upper-lower resistance program.",
        goal: "muscle-gain",
        difficulty: "Intermediate",
        daysPerWeek: 4,
        duration: "75 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Upper Body",
                exercises: [
                    { exercise: "Bench Press", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Barbell Row", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Tricep Pushdown", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Lower Body",
                exercises: [
                    { exercise: "Barbell Squat", sets: 4, reps: "8-12", restTime: "120 sec" },
                    { exercise: "Romanian Deadlift", sets: 3, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Upper Body",
                exercises: [
                    { exercise: "Incline Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Lat Pulldown", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Barbell Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Lower Body",
                exercises: [
                    { exercise: "Barbell Squat", sets: 3, reps: "8-12", restTime: "120 sec" },
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" },
                    { exercise: "Leg Extension", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Hip Thrust", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            }
        ]
    },

    {
        name: "Intermediate Muscle Gain - 5 Days",
        description: "A five-day hypertrophy program for intermediate trainees.",
        goal: "muscle-gain",
        difficulty: "Intermediate",
        daysPerWeek: 5,
        duration: "75 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Chest and Triceps",
                exercises: [
                    { exercise: "Bench Press", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Incline Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Tricep Pushdown", sets: 3, reps: "10-15", restTime: "60 sec" },
                    { exercise: "Skull Crushers", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Back and Biceps",
                exercises: [
                    { exercise: "Pull-Ups", sets: 3, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Barbell Row", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Barbell Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Legs",
                exercises: [
                    { exercise: "Barbell Squat", sets: 4, reps: "8-12", restTime: "120 sec" },
                    { exercise: "Romanian Deadlift", sets: 3, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Hip Thrust", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Shoulders and Arms",
                exercises: [
                    { exercise: "Dumbbell Shoulder Press", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Lateral Raise", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Hammer Curl", sets: 3, reps: "10-12", restTime: "60 sec" },
                    { exercise: "Close-Grip Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 5,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Dumbbell Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Lat Pulldown", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            }
        ]
    },

    {
        name: "Intermediate Muscle Gain - 6 Days",
        description: "A six-day push-pull-legs muscle-building program.",
        goal: "muscle-gain",
        difficulty: "Intermediate",
        daysPerWeek: 6,
        duration: "80 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Push",
                exercises: [
                    { exercise: "Bench Press", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Incline Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Tricep Pushdown", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Pull",
                exercises: [
                    { exercise: "Pull-Ups", sets: 3, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Barbell Row", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Barbell Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Legs",
                exercises: [
                    { exercise: "Barbell Squat", sets: 4, reps: "8-12", restTime: "120 sec" },
                    { exercise: "Romanian Deadlift", sets: 3, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Push",
                exercises: [
                    { exercise: "Dumbbell Bench Press", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Cable Fly", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Lateral Raise", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Skull Crushers", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 5,
                dayName: "Pull",
                exercises: [
                    { exercise: "Lat Pulldown", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 4, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Hammer Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 6,
                dayName: "Legs",
                exercises: [
                    { exercise: "Barbell Squat", sets: 4, reps: "8-12", restTime: "120 sec" },
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" },
                    { exercise: "Leg Extension", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Hip Thrust", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            }
        ]
    },

    // =========================================================
    // ADVANCED MUSCLE GAIN
    // =========================================================

    {
        name: "Advanced Muscle Gain - 3 Days",
        description: "A heavy three-day compound-focused program for experienced lifters.",
        goal: "muscle-gain",
        difficulty: "Advanced",
        daysPerWeek: 3,
        duration: "90 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Barbell Squat", sets: 4, reps: "5-8", restTime: "150 sec" },
                    { exercise: "Bench Press", sets: 4, reps: "5-8", restTime: "150 sec" },
                    { exercise: "Barbell Row", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Deadlift", sets: 3, reps: "5-8", restTime: "150 sec" },
                    { exercise: "Incline Bench Press", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Pull-Ups", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Barbell Curl", sets: 3, reps: "8-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Romanian Deadlift", sets: 3, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Dumbbell Bench Press", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Close-Grip Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            }
        ]
    },

    {
        name: "Advanced Muscle Gain - 4 Days",
        description: "A high-volume four-day muscle-building program.",
        goal: "muscle-gain",
        difficulty: "Advanced",
        daysPerWeek: 4,
        duration: "90 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Upper Body",
                exercises: [
                    { exercise: "Bench Press", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Barbell Row", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Skull Crushers", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Lower Body",
                exercises: [
                    { exercise: "Barbell Squat", sets: 4, reps: "6-10", restTime: "150 sec" },
                    { exercise: "Deadlift", sets: 3, reps: "5-8", restTime: "150 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Upper Body",
                exercises: [
                    { exercise: "Incline Bench Press", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Pull-Ups", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Seated Cable Row", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Barbell Curl", sets: 3, reps: "8-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Lower Body",
                exercises: [
                    { exercise: "Romanian Deadlift", sets: 4, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Barbell Squat", sets: 3, reps: "8-12", restTime: "120 sec" },
                    { exercise: "Hip Thrust", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Bulgarian Split Squat", sets: 3, reps: "8-12 each leg", restTime: "90 sec" }
                ]
            }
        ]
    },

    {
        name: "Advanced Muscle Gain - 5 Days",
        description: "A high-volume five-day hypertrophy program.",
        goal: "muscle-gain",
        difficulty: "Advanced",
        daysPerWeek: 5,
        duration: "90 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Chest and Triceps",
                exercises: [
                    { exercise: "Bench Press", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Incline Bench Press", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Dumbbell Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Skull Crushers", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Back and Biceps",
                exercises: [
                    { exercise: "Pull-Ups", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Barbell Row", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Hammer Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Legs",
                exercises: [
                    { exercise: "Barbell Squat", sets: 4, reps: "6-10", restTime: "150 sec" },
                    { exercise: "Deadlift", sets: 3, reps: "5-8", restTime: "150 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Shoulders and Arms",
                exercises: [
                    { exercise: "Dumbbell Shoulder Press", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Lateral Raise", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Barbell Curl", sets: 3, reps: "10-12", restTime: "60 sec" },
                    { exercise: "Close-Grip Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 5,
                dayName: "Posterior Chain and Core",
                exercises: [
                    { exercise: "Romanian Deadlift", sets: 4, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Hip Thrust", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Bulgarian Split Squat", sets: 3, reps: "8-12 each leg", restTime: "90 sec" },
                    { exercise: "Leg Raises", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            }
        ]
    },

    {
        name: "Advanced Muscle Gain - 6 Days",
        description: "A six-day push-pull-legs program for experienced lifters.",
        goal: "muscle-gain",
        difficulty: "Advanced",
        daysPerWeek: 6,
        duration: "90 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Push",
                exercises: [
                    { exercise: "Bench Press", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Incline Bench Press", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Skull Crushers", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Pull",
                exercises: [
                    { exercise: "Pull-Ups", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Barbell Row", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Barbell Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Legs",
                exercises: [
                    { exercise: "Barbell Squat", sets: 4, reps: "6-10", restTime: "150 sec" },
                    { exercise: "Deadlift", sets: 3, reps: "5-8", restTime: "150 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Push",
                exercises: [
                    { exercise: "Dumbbell Bench Press", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Cable Fly", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Lateral Raise", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Close-Grip Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 5,
                dayName: "Pull",
                exercises: [
                    { exercise: "Lat Pulldown", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 4, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Hammer Curl", sets: 3, reps: "10-12", restTime: "60 sec" },
                    { exercise: "Dumbbell Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 6,
                dayName: "Legs",
                exercises: [
                    { exercise: "Romanian Deadlift", sets: 4, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" },
                    { exercise: "Hip Thrust", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Bulgarian Split Squat", sets: 3, reps: "8-12 each leg", restTime: "90 sec" }
                ]
            }
        ]
    },

    // =========================================================
    // MAINTENANCE
    // =========================================================

    {
        name: "Beginner Maintenance - 3 Days",
        description: "A simple full-body routine for maintaining strength and general fitness.",
        goal: "maintenance",
        difficulty: "Beginner",
        daysPerWeek: 3,
        duration: "50 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Push-Ups", sets: 3, reps: "10-15", restTime: "60 sec" },
                    { exercise: "Lat Pulldown", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Plank", sets: 3, reps: "30-60 sec", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" },
                    { exercise: "Crunches", sets: 3, reps: "15-20", restTime: "45 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Lat Pulldown", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Leg Extension", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            }
        ]
    },

    {
        name: "Beginner Maintenance - 4 Days",
        description: "A four-day beginner routine for maintaining general strength.",
        goal: "maintenance",
        difficulty: "Beginner",
        daysPerWeek: 4,
        duration: "55 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Upper Body",
                exercises: [
                    { exercise: "Push-Ups", sets: 3, reps: "10-15", restTime: "60 sec" },
                    { exercise: "Lat Pulldown", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "10-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Lower Body",
                exercises: [
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Upper Body",
                exercises: [
                    { exercise: "Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "10-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Core and Legs",
                exercises: [
                    { exercise: "Leg Extension", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" },
                    { exercise: "Crunches", sets: 3, reps: "15-20", restTime: "45 sec" },
                    { exercise: "Plank", sets: 3, reps: "30-60 sec", restTime: "60 sec" }
                ]
            }
        ]
    },

    {
        name: "Beginner Maintenance - 5 Days",
        description: "A five-day beginner routine with moderate training volume.",
        goal: "maintenance",
        difficulty: "Beginner",
        daysPerWeek: 5,
        duration: "55 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Chest",
                exercises: [
                    { exercise: "Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Cable Fly", sets: 3, reps: "12-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Back",
                exercises: [
                    { exercise: "Lat Pulldown", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Legs",
                exercises: [
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Leg Extension", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Shoulders",
                exercises: [
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Lateral Raise", sets: 3, reps: "12-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 5,
                dayName: "Arms and Core",
                exercises: [
                    { exercise: "Barbell Curl", sets: 3, reps: "10-12", restTime: "60 sec" },
                    { exercise: "Tricep Pushdown", sets: 3, reps: "10-15", restTime: "60 sec" },
                    { exercise: "Plank", sets: 3, reps: "30-60 sec", restTime: "60 sec" }
                ]
            }
        ]
    },

    {
        name: "Beginner Maintenance - 6 Days",
        description: "A light six-day routine for maintaining consistent activity.",
        goal: "maintenance",
        difficulty: "Beginner",
        daysPerWeek: 6,
        duration: "50 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Chest",
                exercises: [
                    { exercise: "Push-Ups", sets: 3, reps: "10-15", restTime: "60 sec" },
                    { exercise: "Cable Fly", sets: 3, reps: "12-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Back",
                exercises: [
                    { exercise: "Lat Pulldown", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Legs",
                exercises: [
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Leg Extension", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Shoulders",
                exercises: [
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Lateral Raise", sets: 3, reps: "12-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 5,
                dayName: "Arms",
                exercises: [
                    { exercise: "Barbell Curl", sets: 3, reps: "10-12", restTime: "60 sec" },
                    { exercise: "Tricep Pushdown", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 6,
                dayName: "Core",
                exercises: [
                    { exercise: "Crunches", sets: 3, reps: "15-20", restTime: "45 sec" },
                    { exercise: "Plank", sets: 3, reps: "30-60 sec", restTime: "60 sec" }
                ]
            }
        ]
    },

    // =========================================================
    // INTERMEDIATE MAINTENANCE
    // =========================================================

    {
        name: "Intermediate Maintenance - 3 Days",
        description: "A balanced three-day full-body program for maintaining strength.",
        goal: "maintenance",
        difficulty: "Intermediate",
        daysPerWeek: 3,
        duration: "70 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Bench Press", sets: 3, reps: "8-12", restTime: "120 sec" },
                    { exercise: "Barbell Row", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Barbell Squat", sets: 3, reps: "8-12", restTime: "120 sec" },
                    { exercise: "Plank", sets: 3, reps: "30-60 sec", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Incline Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Romanian Deadlift", sets: 3, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Crunches", sets: 3, reps: "15-20", restTime: "45 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Dumbbell Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Lat Pulldown", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            }
        ]
    },

    {
        name: "Intermediate Maintenance - 4 Days",
        description: "A four-day balanced resistance program.",
        goal: "maintenance",
        difficulty: "Intermediate",
        daysPerWeek: 4,
        duration: "70 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Upper Body",
                exercises: [
                    { exercise: "Bench Press", sets: 3, reps: "8-12", restTime: "120 sec" },
                    { exercise: "Barbell Row", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Lower Body",
                exercises: [
                    { exercise: "Barbell Squat", sets: 3, reps: "8-12", restTime: "120 sec" },
                    { exercise: "Romanian Deadlift", sets: 3, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Upper Body",
                exercises: [
                    { exercise: "Incline Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Lat Pulldown", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Lower Body and Core",
                exercises: [
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" },
                    { exercise: "Leg Extension", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" },
                    { exercise: "Plank", sets: 3, reps: "30-60 sec", restTime: "60 sec" }
                ]
            }
        ]
    },

    {
        name: "Intermediate Maintenance - 5 Days",
        description: "A five-day balanced workout for maintaining muscle and strength.",
        goal: "maintenance",
        difficulty: "Intermediate",
        daysPerWeek: 5,
        duration: "70 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Chest and Triceps",
                exercises: [
                    { exercise: "Bench Press", sets: 3, reps: "8-12", restTime: "120 sec" },
                    { exercise: "Incline Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Tricep Pushdown", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Back and Biceps",
                exercises: [
                    { exercise: "Lat Pulldown", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Barbell Row", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Barbell Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Legs",
                exercises: [
                    { exercise: "Barbell Squat", sets: 3, reps: "8-12", restTime: "120 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Shoulders",
                exercises: [
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Lateral Raise", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Front Raise", sets: 3, reps: "12-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 5,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Dumbbell Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" },
                    { exercise: "Plank", sets: 3, reps: "30-60 sec", restTime: "60 sec" }
                ]
            }
        ]
    },

    {
        name: "Intermediate Maintenance - 6 Days",
        description: "A six-day balanced routine using different muscle-group sessions.",
        goal: "maintenance",
        difficulty: "Intermediate",
        daysPerWeek: 6,
        duration: "70 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Push",
                exercises: [
                    { exercise: "Bench Press", sets: 3, reps: "8-12", restTime: "120 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Tricep Pushdown", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Pull",
                exercises: [
                    { exercise: "Lat Pulldown", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Barbell Row", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Barbell Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Legs",
                exercises: [
                    { exercise: "Barbell Squat", sets: 3, reps: "8-12", restTime: "120 sec" },
                    { exercise: "Romanian Deadlift", sets: 3, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Push",
                exercises: [
                    { exercise: "Incline Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Lateral Raise", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Skull Crushers", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 5,
                dayName: "Pull",
                exercises: [
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Lat Pulldown", sets: 3, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Hammer Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 6,
                dayName: "Legs and Core",
                exercises: [
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" },
                    { exercise: "Leg Extension", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" },
                    { exercise: "Plank", sets: 3, reps: "30-60 sec", restTime: "60 sec" }
                ]
            }
        ]
    },

    // =========================================================
    // ADVANCED MAINTENANCE
    // =========================================================

    {
        name: "Advanced Maintenance - 3 Days",
        description: "A heavy three-day full-body program for maintaining strength.",
        goal: "maintenance",
        difficulty: "Advanced",
        daysPerWeek: 3,
        duration: "80 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Barbell Squat", sets: 4, reps: "5-8", restTime: "150 sec" },
                    { exercise: "Bench Press", sets: 4, reps: "5-8", restTime: "150 sec" },
                    { exercise: "Barbell Row", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Deadlift", sets: 3, reps: "5-8", restTime: "150 sec" },
                    { exercise: "Incline Bench Press", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Pull-Ups", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Barbell Curl", sets: 3, reps: "8-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Full Body",
                exercises: [
                    { exercise: "Romanian Deadlift", sets: 3, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Dumbbell Bench Press", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Plank", sets: 3, reps: "45-60 sec", restTime: "60 sec" }
                ]
            }
        ]
    },

    {
        name: "Advanced Maintenance - 4 Days",
        description: "A four-day advanced program for maintaining strength and muscle.",
        goal: "maintenance",
        difficulty: "Advanced",
        daysPerWeek: 4,
        duration: "80 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Upper Body",
                exercises: [
                    { exercise: "Bench Press", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Barbell Row", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Lower Body",
                exercises: [
                    { exercise: "Barbell Squat", sets: 4, reps: "6-10", restTime: "150 sec" },
                    { exercise: "Romanian Deadlift", sets: 3, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Upper Body",
                exercises: [
                    { exercise: "Incline Bench Press", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Pull-Ups", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Seated Cable Row", sets: 3, reps: "10-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Lower Body",
                exercises: [
                    { exercise: "Deadlift", sets: 3, reps: "5-8", restTime: "150 sec" },
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" },
                    { exercise: "Leg Curl", sets: 3, reps: "10-15", restTime: "60 sec" },
                    { exercise: "Hip Thrust", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            }
        ]
    },

    {
        name: "Advanced Maintenance - 5 Days",
        description: "A five-day advanced routine balancing strength and muscle maintenance.",
        goal: "maintenance",
        difficulty: "Advanced",
        daysPerWeek: 5,
        duration: "80 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Chest and Triceps",
                exercises: [
                    { exercise: "Bench Press", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Incline Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Close-Grip Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Back and Biceps",
                exercises: [
                    { exercise: "Pull-Ups", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Barbell Row", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Hammer Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Legs",
                exercises: [
                    { exercise: "Barbell Squat", sets: 4, reps: "6-10", restTime: "150 sec" },
                    { exercise: "Romanian Deadlift", sets: 3, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Shoulders",
                exercises: [
                    { exercise: "Dumbbell Shoulder Press", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Lateral Raise", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Front Raise", sets: 3, reps: "12-15", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 5,
                dayName: "Posterior Chain and Core",
                exercises: [
                    { exercise: "Deadlift", sets: 3, reps: "5-8", restTime: "150 sec" },
                    { exercise: "Hip Thrust", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Bulgarian Split Squat", sets: 3, reps: "8-12 each leg", restTime: "90 sec" },
                    { exercise: "Leg Raises", sets: 3, reps: "10-15", restTime: "60 sec" }
                ]
            }
        ]
    },

    {
        name: "Advanced Maintenance - 6 Days",
        description: "A six-day advanced routine using a push-pull-legs structure.",
        goal: "maintenance",
        difficulty: "Advanced",
        daysPerWeek: 6,
        duration: "85 minutes",
        days: [
            {
                dayNumber: 1,
                dayName: "Push",
                exercises: [
                    { exercise: "Bench Press", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Incline Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 2,
                dayName: "Pull",
                exercises: [
                    { exercise: "Pull-Ups", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Barbell Row", sets: 4, reps: "6-10", restTime: "120 sec" },
                    { exercise: "Barbell Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 3,
                dayName: "Legs",
                exercises: [
                    { exercise: "Barbell Squat", sets: 4, reps: "6-10", restTime: "150 sec" },
                    { exercise: "Deadlift", sets: 3, reps: "5-8", restTime: "150 sec" },
                    { exercise: "Leg Press", sets: 3, reps: "10-15", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 4,
                dayName: "Push",
                exercises: [
                    { exercise: "Dumbbell Bench Press", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Lateral Raise", sets: 3, reps: "12-15", restTime: "60 sec" },
                    { exercise: "Skull Crushers", sets: 3, reps: "8-12", restTime: "90 sec" }
                ]
            },
            {
                dayNumber: 5,
                dayName: "Pull",
                exercises: [
                    { exercise: "Lat Pulldown", sets: 4, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Seated Cable Row", sets: 4, reps: "10-12", restTime: "90 sec" },
                    { exercise: "Hammer Curl", sets: 3, reps: "10-12", restTime: "60 sec" }
                ]
            },
            {
                dayNumber: 6,
                dayName: "Legs",
                exercises: [
                    { exercise: "Romanian Deadlift", sets: 3, reps: "8-10", restTime: "120 sec" },
                    { exercise: "Lunges", sets: 3, reps: "10-12 each leg", restTime: "60 sec" },
                    { exercise: "Hip Thrust", sets: 3, reps: "8-12", restTime: "90 sec" },
                    { exercise: "Bulgarian Split Squat", sets: 3, reps: "8-12 each leg", restTime: "90 sec" }
                ]
            }
        ]
    }
];

module.exports = workouts;