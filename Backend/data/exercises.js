const exercises = [
    // CHEST
    {
        name: "Bench Press",
        bodyPart: "Chest",
        targetMuscle: "Pectoralis Major",
        equipment: "Barbell",
        difficulty: "Intermediate",
        exerciseType: "Strength",
        instructions: [
            "Lie flat on the bench.",
            "Grip the bar slightly wider than shoulder width.",
            "Lower the bar toward your chest.",
            "Push the bar back to the starting position."
        ],
        sets: 3,
        reps: "8-12",
        restTime: "90 sec"
    },
    {
        name: "Incline Bench Press",
        bodyPart: "Chest",
        targetMuscle: "Upper Chest",
        equipment: "Barbell",
        difficulty: "Intermediate",
        exerciseType: "Strength",
        instructions: [
            "Set the bench to an incline.",
            "Grip the bar slightly wider than shoulder width.",
            "Lower the bar toward your upper chest.",
            "Press the bar back up."
        ],
        sets: 3,
        reps: "8-12",
        restTime: "90 sec"
    },
    {
        name: "Dumbbell Bench Press",
        bodyPart: "Chest",
        targetMuscle: "Pectoralis Major",
        equipment: "Dumbbells",
        difficulty: "Intermediate",
        exerciseType: "Strength",
        instructions: [
            "Lie flat on the bench with a dumbbell in each hand.",
            "Lower the dumbbells toward your chest.",
            "Press them upward.",
            "Return them under control."
        ],
        sets: 3,
        reps: "8-12",
        restTime: "90 sec"
    },
    {
        name: "Push-Ups",
        bodyPart: "Chest",
        targetMuscle: "Pectoralis Major",
        equipment: "None",
        difficulty: "Beginner",
        exerciseType: "Strength",
        instructions: [
            "Start in a high plank position.",
            "Lower your body toward the floor.",
            "Keep your body straight.",
            "Push yourself back up."
        ],
        sets: 3,
        reps: "10-15",
        restTime: "60 sec"
    },
    {
        name: "Cable Fly",
        bodyPart: "Chest",
        targetMuscle: "Pectoralis Major",
        equipment: "Cable Machine",
        difficulty: "Beginner",
        exerciseType: "Strength",
        instructions: [
            "Stand between the cable handles.",
            "Keep a slight bend in your elbows.",
            "Bring your hands together in front of your chest.",
            "Slowly return to the starting position."
        ],
        sets: 3,
        reps: "12-15",
        restTime: "60 sec"
    },

    // BACK
    {
        name: "Pull-Ups",
        bodyPart: "Back",
        targetMuscle: "Latissimus Dorsi",
        equipment: "Pull-Up Bar",
        difficulty: "Advanced",
        exerciseType: "Strength",
        instructions: [
            "Grip the pull-up bar.",
            "Hang with your arms extended.",
            "Pull your body upward.",
            "Lower yourself under control."
        ],
        sets: 3,
        reps: "6-10",
        restTime: "120 sec"
    },
    {
        name: "Lat Pulldown",
        bodyPart: "Back",
        targetMuscle: "Latissimus Dorsi",
        equipment: "Cable Machine",
        difficulty: "Beginner",
        exerciseType: "Strength",
        instructions: [
            "Sit at the lat pulldown machine.",
            "Grip the bar slightly wider than shoulder width.",
            "Pull the bar toward your upper chest.",
            "Slowly return the bar upward."
        ],
        sets: 3,
        reps: "8-12",
        restTime: "90 sec"
    },
    {
        name: "Barbell Row",
        bodyPart: "Back",
        targetMuscle: "Latissimus Dorsi",
        equipment: "Barbell",
        difficulty: "Intermediate",
        exerciseType: "Strength",
        instructions: [
            "Hold the barbell with an overhand grip.",
            "Hinge forward while keeping your back straight.",
            "Pull the bar toward your abdomen.",
            "Lower it under control."
        ],
        sets: 3,
        reps: "8-12",
        restTime: "90 sec"
    },
    {
        name: "Seated Cable Row",
        bodyPart: "Back",
        targetMuscle: "Rhomboids",
        equipment: "Cable Machine",
        difficulty: "Beginner",
        exerciseType: "Strength",
        instructions: [
            "Sit upright at the cable row machine.",
            "Grip the handle.",
            "Pull it toward your torso.",
            "Slowly extend your arms."
        ],
        sets: 3,
        reps: "10-12",
        restTime: "90 sec"
    },
    {
        name: "Deadlift",
        bodyPart: "Back",
        targetMuscle: "Erector Spinae",
        equipment: "Barbell",
        difficulty: "Advanced",
        exerciseType: "Strength",
        instructions: [
            "Stand with your feet under the bar.",
            "Grip the bar and keep your back neutral.",
            "Drive through your feet and lift the bar.",
            "Lower the bar with control."
        ],
        sets: 3,
        reps: "5-8",
        restTime: "150 sec"
    },

    // SHOULDERS
    {
        name: "Dumbbell Shoulder Press",
        bodyPart: "Shoulders",
        targetMuscle: "Deltoids",
        equipment: "Dumbbells",
        difficulty: "Beginner",
        exerciseType: "Strength",
        instructions: [
            "Sit or stand with dumbbells at shoulder height.",
            "Press the dumbbells overhead.",
            "Fully extend your arms without locking aggressively.",
            "Lower them back to shoulder level."
        ],
        sets: 3,
        reps: "8-12",
        restTime: "90 sec"
    },
    {
        name: "Lateral Raise",
        bodyPart: "Shoulders",
        targetMuscle: "Lateral Deltoid",
        equipment: "Dumbbells",
        difficulty: "Beginner",
        exerciseType: "Strength",
        instructions: [
            "Hold dumbbells at your sides.",
            "Raise your arms outward.",
            "Lift until approximately shoulder height.",
            "Lower them slowly."
        ],
        sets: 3,
        reps: "12-15",
        restTime: "60 sec"
    },
    {
        name: "Front Raise",
        bodyPart: "Shoulders",
        targetMuscle: "Anterior Deltoid",
        equipment: "Dumbbells",
        difficulty: "Beginner",
        exerciseType: "Strength",
        instructions: [
            "Hold dumbbells in front of your thighs.",
            "Raise your arms forward.",
            "Lift to approximately shoulder height.",
            "Lower them slowly."
        ],
        sets: 3,
        reps: "12-15",
        restTime: "60 sec"
    },

    // BICEPS
    {
        name: "Barbell Curl",
        bodyPart: "Biceps",
        targetMuscle: "Biceps Brachii",
        equipment: "Barbell",
        difficulty: "Beginner",
        exerciseType: "Strength",
        instructions: [
            "Hold the barbell with an underhand grip.",
            "Keep your elbows close to your body.",
            "Curl the bar toward your shoulders.",
            "Lower it slowly."
        ],
        sets: 3,
        reps: "10-12",
        restTime: "60 sec"
    },
    {
        name: "Dumbbell Curl",
        bodyPart: "Biceps",
        targetMuscle: "Biceps Brachii",
        equipment: "Dumbbells",
        difficulty: "Beginner",
        exerciseType: "Strength",
        instructions: [
            "Hold dumbbells at your sides.",
            "Curl one or both dumbbells upward.",
            "Squeeze your biceps at the top.",
            "Lower under control."
        ],
        sets: 3,
        reps: "10-12",
        restTime: "60 sec"
    },
    {
        name: "Hammer Curl",
        bodyPart: "Biceps",
        targetMuscle: "Brachialis",
        equipment: "Dumbbells",
        difficulty: "Beginner",
        exerciseType: "Strength",
        instructions: [
            "Hold dumbbells with a neutral grip.",
            "Keep your elbows close to your body.",
            "Curl the dumbbells upward.",
            "Lower them slowly."
        ],
        sets: 3,
        reps: "10-12",
        restTime: "60 sec"
    },

    // TRICEPS
    {
        name: "Tricep Pushdown",
        bodyPart: "Triceps",
        targetMuscle: "Triceps Brachii",
        equipment: "Cable Machine",
        difficulty: "Beginner",
        exerciseType: "Strength",
        instructions: [
            "Stand in front of the cable machine.",
            "Grip the attachment.",
            "Push the handle downward.",
            "Slowly return to the starting position."
        ],
        sets: 3,
        reps: "10-15",
        restTime: "60 sec"
    },
    {
        name: "Skull Crushers",
        bodyPart: "Triceps",
        targetMuscle: "Triceps Brachii",
        equipment: "EZ Bar",
        difficulty: "Intermediate",
        exerciseType: "Strength",
        instructions: [
            "Lie on a bench holding the bar.",
            "Keep your upper arms relatively stationary.",
            "Bend your elbows and lower the bar toward your forehead.",
            "Extend your elbows to return."
        ],
        sets: 3,
        reps: "8-12",
        restTime: "90 sec"
    },
    {
        name: "Close-Grip Bench Press",
        bodyPart: "Triceps",
        targetMuscle: "Triceps Brachii",
        equipment: "Barbell",
        difficulty: "Intermediate",
        exerciseType: "Strength",
        instructions: [
            "Lie flat on the bench.",
            "Use a narrower grip than a standard bench press.",
            "Lower the bar toward your chest.",
            "Press it upward."
        ],
        sets: 3,
        reps: "8-12",
        restTime: "90 sec"
    },

    // LEGS
    {
        name: "Barbell Squat",
        bodyPart: "Legs",
        targetMuscle: "Quadriceps",
        equipment: "Barbell",
        difficulty: "Intermediate",
        exerciseType: "Strength",
        instructions: [
            "Place the barbell across your upper back.",
            "Stand with your feet around shoulder width.",
            "Bend your knees and hips to squat.",
            "Drive through your feet to stand."
        ],
        sets: 3,
        reps: "8-12",
        restTime: "120 sec"
    },
    {
        name: "Leg Press",
        bodyPart: "Legs",
        targetMuscle: "Quadriceps",
        equipment: "Leg Press Machine",
        difficulty: "Beginner",
        exerciseType: "Strength",
        instructions: [
            "Sit in the leg press machine.",
            "Place your feet on the platform.",
            "Lower the platform by bending your knees.",
            "Push the platform back up."
        ],
        sets: 3,
        reps: "10-15",
        restTime: "90 sec"
    },
    {
        name: "Leg Extension",
        bodyPart: "Legs",
        targetMuscle: "Quadriceps",
        equipment: "Leg Extension Machine",
        difficulty: "Beginner",
        exerciseType: "Strength",
        instructions: [
            "Sit on the machine.",
            "Place your ankles behind the pad.",
            "Extend your legs.",
            "Lower them slowly."
        ],
        sets: 3,
        reps: "12-15",
        restTime: "60 sec"
    },
    {
        name: "Leg Curl",
        bodyPart: "Legs",
        targetMuscle: "Hamstrings",
        equipment: "Leg Curl Machine",
        difficulty: "Beginner",
        exerciseType: "Strength",
        instructions: [
            "Position your legs against the machine pads.",
            "Curl your heels toward your glutes.",
            "Squeeze your hamstrings.",
            "Return slowly."
        ],
        sets: 3,
        reps: "10-15",
        restTime: "60 sec"
    },
    {
        name: "Lunges",
        bodyPart: "Legs",
        targetMuscle: "Quadriceps",
        equipment: "None",
        difficulty: "Beginner",
        exerciseType: "Strength",
        instructions: [
            "Stand upright with your feet together.",
            "Step forward with one leg.",
            "Lower your body toward the floor.",
            "Push through the front foot to return."
        ],
        sets: 3,
        reps: "10-12 each leg",
        restTime: "60 sec"
    },

    // GLUTES
    {
        name: "Hip Thrust",
        bodyPart: "Glutes",
        targetMuscle: "Gluteus Maximus",
        equipment: "Barbell",
        difficulty: "Intermediate",
        exerciseType: "Strength",
        instructions: [
            "Sit with your upper back against a bench.",
            "Place the barbell across your hips.",
            "Drive your hips upward.",
            "Lower your hips under control."
        ],
        sets: 3,
        reps: "8-12",
        restTime: "90 sec"
    },
    {
        name: "Bulgarian Split Squat",
        bodyPart: "Glutes",
        targetMuscle: "Gluteus Maximus",
        equipment: "Dumbbells",
        difficulty: "Intermediate",
        exerciseType: "Strength",
        instructions: [
            "Place one foot behind you on a bench.",
            "Lower your body toward the floor.",
            "Keep your front knee controlled.",
            "Push through the front foot to stand."
        ],
        sets: 3,
        reps: "8-12 each leg",
        restTime: "90 sec"
    },

    // CORE
    {
        name: "Plank",
        bodyPart: "Core",
        targetMuscle: "Abdominals",
        equipment: "None",
        difficulty: "Beginner",
        exerciseType: "Strength",
        instructions: [
            "Start on your forearms and toes.",
            "Keep your body in a straight line.",
            "Engage your core.",
            "Hold the position."
        ],
        sets: 3,
        reps: "30-60 sec",
        restTime: "60 sec"
    },
    {
        name: "Crunches",
        bodyPart: "Core",
        targetMuscle: "Rectus Abdominis",
        equipment: "None",
        difficulty: "Beginner",
        exerciseType: "Strength",
        instructions: [
            "Lie on your back with your knees bent.",
            "Place your hands behind or beside your head.",
            "Lift your shoulders toward your knees.",
            "Lower yourself slowly."
        ],
        sets: 3,
        reps: "15-20",
        restTime: "45 sec"
    },
    {
        name: "Leg Raises",
        bodyPart: "Core",
        targetMuscle: "Lower Abdominals",
        equipment: "None",
        difficulty: "Intermediate",
        exerciseType: "Strength",
        instructions: [
            "Lie flat on your back.",
            "Keep your legs straight.",
            "Raise your legs upward.",
            "Lower them without losing core control."
        ],
        sets: 3,
        reps: "10-15",
        restTime: "60 sec"
    },

    // CALVES
    {
        name: "Standing Calf Raise",
        bodyPart: "Calves",
        targetMuscle: "Gastrocnemius",
        equipment: "None",
        difficulty: "Beginner",
        exerciseType: "Strength",
        instructions: [
            "Stand upright with your feet hip width apart.",
            "Raise your heels from the floor.",
            "Pause at the top.",
            "Lower your heels slowly."
        ],
        sets: 3,
        reps: "15-20",
        restTime: "45 sec"
    },

    // FOREARMS
    {
        name: "Wrist Curl",
        bodyPart: "Forearms",
        targetMuscle: "Forearm Flexors",
        equipment: "Dumbbells",
        difficulty: "Beginner",
        exerciseType: "Strength",
        instructions: [
            "Sit and rest your forearms on your thighs.",
            "Hold dumbbells with your palms facing upward.",
            "Curl your wrists upward.",
            "Lower them slowly."
        ],
        sets: 3,
        reps: "12-15",
        restTime: "45 sec"
    },
    {
    name: "Romanian Deadlift",
    bodyPart: "Legs",
    targetMuscle: "Hamstrings",
    equipment: "Barbell",
    difficulty: "Intermediate",
    exerciseType: "Strength",
    instructions: [
        "Stand with your feet hip-width apart.",
        "Hold the barbell in front of your thighs.",
        "Push your hips backward while keeping your back straight.",
        "Lower the bar until you feel a stretch in your hamstrings.",
        "Drive your hips forward to return to the starting position."
    ],
    sets: 3,
    reps: "8-10",
    restTime: "120 sec"
}
];

module.exports = exercises;