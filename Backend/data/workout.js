const workouts = [
    {
        name: "Beginner Full Body",
        description: "A simple full-body workout for beginners.",
        goal: "General Fitness",
        difficulty: "Beginner",
        daysPerWeek: 3,
        duration: "60 minutes",

        exercises: [
            {
                exercise: "Push-Ups",
                sets: 3,
                reps: "10-15",
                restTime: "60 sec"
            },
            {
                exercise: "Lat Pulldown",
                sets: 3,
                reps: "10-12",
                restTime: "90 sec"
            },
            {
                exercise: "Dumbbell Shoulder Press",
                sets: 3,
                reps: "10-12",
                restTime: "90 sec"
            },
            {
                exercise: "Barbell Squat",
                sets: 3,
                reps: "8-12",
                restTime: "120 sec"
            },
            {
                exercise: "Plank",
                sets: 3,
                reps: "30-45 sec",
                restTime: "60 sec"
            }
        ]
    },

    {
        name: "Beginner Weight Loss",
        description: "A beginner-friendly workout focused on increasing activity and supporting weight loss.",
        goal: "Weight Loss",
        difficulty: "Beginner",
        daysPerWeek: 4,
        duration: "50 minutes",

        exercises: [
            {
                exercise: "Push-Ups",
                sets: 3,
                reps: "10-15",
                restTime: "60 sec"
            },
            {
                exercise: "Lat Pulldown",
                sets: 3,
                reps: "10-12",
                restTime: "75 sec"
            },
            {
                exercise: "Lunges",
                sets: 3,
                reps: "10-12 each leg",
                restTime: "60 sec"
            },
            {
                exercise: "Leg Extension",
                sets: 3,
                reps: "12-15",
                restTime: "60 sec"
            },
            {
                exercise: "Crunches",
                sets: 3,
                reps: "15-20",
                restTime: "45 sec"
            }
        ]
    },

    {
        name: "Beginner Muscle Gain",
        description: "A beginner resistance-training plan focused on building muscle.",
        goal: "Muscle Gain",
        difficulty: "Beginner",
        daysPerWeek: 4,
        duration: "60 minutes",

        exercises: [
            {
                exercise: "Bench Press",
                sets: 3,
                reps: "8-12",
                restTime: "90 sec"
            },
            {
                exercise: "Lat Pulldown",
                sets: 3,
                reps: "8-12",
                restTime: "90 sec"
            },
            {
                exercise: "Dumbbell Shoulder Press",
                sets: 3,
                reps: "8-12",
                restTime: "90 sec"
            },
            {
                exercise: "Barbell Curl",
                sets: 3,
                reps: "10-12",
                restTime: "60 sec"
            },
            {
                exercise: "Tricep Pushdown",
                sets: 3,
                reps: "10-15",
                restTime: "60 sec"
            }
        ]
    },

    {
        name: "Chest and Triceps",
        description: "A focused push workout targeting the chest and triceps.",
        goal: "Muscle Gain",
        difficulty: "Intermediate",
        daysPerWeek: 5,
        duration: "70 minutes",

        exercises: [
            {
                exercise: "Bench Press",
                sets: 4,
                reps: "8-10",
                restTime: "120 sec"
            },
            {
                exercise: "Incline Bench Press",
                sets: 3,
                reps: "8-12",
                restTime: "90 sec"
            },
            {
                exercise: "Dumbbell Bench Press",
                sets: 3,
                reps: "10-12",
                restTime: "90 sec"
            },
            {
                exercise: "Cable Fly",
                sets: 3,
                reps: "12-15",
                restTime: "60 sec"
            },
            {
                exercise: "Tricep Pushdown",
                sets: 3,
                reps: "10-15",
                restTime: "60 sec"
            },
            {
                exercise: "Skull Crushers",
                sets: 3,
                reps: "8-12",
                restTime: "90 sec"
            }
        ]
    },

    {
        name: "Back and Biceps",
        description: "A pull-focused workout targeting the back and biceps.",
        goal: "Muscle Gain",
        difficulty: "Intermediate",
        daysPerWeek: 5,
        duration: "70 minutes",

        exercises: [
            {
                exercise: "Pull-Ups",
                sets: 3,
                reps: "6-10",
                restTime: "120 sec"
            },
            {
                exercise: "Lat Pulldown",
                sets: 3,
                reps: "8-12",
                restTime: "90 sec"
            },
            {
                exercise: "Barbell Row",
                sets: 3,
                reps: "8-12",
                restTime: "90 sec"
            },
            {
                exercise: "Seated Cable Row",
                sets: 3,
                reps: "10-12",
                restTime: "90 sec"
            },
            {
                exercise: "Barbell Curl",
                sets: 3,
                reps: "10-12",
                restTime: "60 sec"
            },
            {
                exercise: "Hammer Curl",
                sets: 3,
                reps: "10-12",
                restTime: "60 sec"
            }
        ]
    },

    {
        name: "Legs and Glutes",
        description: "A lower-body workout focusing on the legs and glutes.",
        goal: "Muscle Gain",
        difficulty: "Intermediate",
        daysPerWeek: 4,
        duration: "75 minutes",

        exercises: [
            {
                exercise: "Barbell Squat",
                sets: 4,
                reps: "8-12",
                restTime: "120 sec"
            },
            {
                exercise: "Leg Press",
                sets: 3,
                reps: "10-15",
                restTime: "90 sec"
            },
            {
                exercise: "Leg Extension",
                sets: 3,
                reps: "12-15",
                restTime: "60 sec"
            },
            {
                exercise: "Leg Curl",
                sets: 3,
                reps: "10-15",
                restTime: "60 sec"
            },
            {
                exercise: "Hip Thrust",
                sets: 3,
                reps: "8-12",
                restTime: "90 sec"
            },
            {
                exercise: "Bulgarian Split Squat",
                sets: 3,
                reps: "8-12 each leg",
                restTime: "90 sec"
            }
        ]
    },

    {
        name: "Intermediate Full Body",
        description: "A balanced full-body program for intermediate trainees.",
        goal: "General Fitness",
        difficulty: "Intermediate",
        daysPerWeek: 3,
        duration: "75 minutes",

        exercises: [
            {
                exercise: "Bench Press",
                sets: 4,
                reps: "8-10",
                restTime: "120 sec"
            },
            {
                exercise: "Barbell Row",
                sets: 4,
                reps: "8-10",
                restTime: "120 sec"
            },
            {
                exercise: "Barbell Squat",
                sets: 4,
                reps: "8-10",
                restTime: "120 sec"
            },
            {
                exercise: "Dumbbell Shoulder Press",
                sets: 3,
                reps: "10-12",
                restTime: "90 sec"
            },
            {
                exercise: "Hammer Curl",
                sets: 3,
                reps: "10-12",
                restTime: "60 sec"
            },
            {
                exercise: "Tricep Pushdown",
                sets: 3,
                reps: "10-15",
                restTime: "60 sec"
            }
        ]
    },

    {
        name: "Advanced Push Pull Legs",
        description: "A high-volume program for experienced lifters.",
        goal: "Muscle Gain",
        difficulty: "Advanced",
        daysPerWeek: 6,
        duration: "90 minutes",

        exercises: [
            {
                exercise: "Bench Press",
                sets: 4,
                reps: "6-10",
                restTime: "120 sec"
            },
            {
                exercise: "Incline Bench Press",
                sets: 4,
                reps: "8-10",
                restTime: "120 sec"
            },
            {
                exercise: "Pull-Ups",
                sets: 4,
                reps: "6-10",
                restTime: "120 sec"
            },
            {
                exercise: "Barbell Row",
                sets: 4,
                reps: "6-10",
                restTime: "120 sec"
            },
            {
                exercise: "Barbell Squat",
                sets: 4,
                reps: "6-10",
                restTime: "150 sec"
            },
            {
                exercise: "Romanian Deadlift",
                sets: 3,
                reps: "8-10",
                restTime: "120 sec"
            }
        ]
    }
];

module.exports = workouts;