const dietPlans = [

    {
        name: "Vegetarian Weight Loss Plan",
        description: "Balanced calorie-controlled vegetarian diet for gradual weight loss.",
        goal: "Weight Loss",
        dietType: "Vegetarian",
        dailyCalories: 1800,
        protein: 110,
        carbs: 210,
        fats: 50,
        meals: [
            {
                meal: "Oats Protein Bowl",
                mealType: "Breakfast"
            },
            {
                meal: "Apple Almond Snack",
                mealType: "Mid-Morning Snack"
            },
            {
                meal: "Dal Rice",
                mealType: "Lunch"
            },
            {
                meal: "Protein Yogurt",
                mealType: "Evening Snack"
            },
            {
                meal: "Chickpea Salad Bowl",
                mealType: "Dinner"
            }
        ]
    },

    {
        name: "Non-Veg Weight Loss Plan",
        description: "High-protein calorie-controlled diet designed to support fat loss.",
        goal: "Weight Loss",
        dietType: "Non-Vegetarian",
        dailyCalories: 1900,
        protein: 140,
        carbs: 190,
        fats: 55,
        meals: [
            {
                meal: "Egg Omelette Toast",
                mealType: "Breakfast"
            },
            {
                meal: "Boiled Eggs",
                mealType: "Mid-Morning Snack"
            },
            {
                meal: "Chicken Rice Bowl",
                mealType: "Lunch"
            },
            {
                meal: "Protein Yogurt",
                mealType: "Evening Snack"
            },
            {
                meal: "Grilled Chicken Salad",
                mealType: "Dinner"
            }
        ]
    },

    {
        name: "Vegan Weight Loss Plan",
        description: "Plant-based calorie-controlled meal plan for weight management.",
        goal: "Weight Loss",
        dietType: "Vegan",
        dailyCalories: 1800,
        protein: 100,
        carbs: 220,
        fats: 45,
        meals: [
            {
                meal: "Tofu Scramble",
                mealType: "Breakfast"
            },
            {
                meal: "Fruit Chaat",
                mealType: "Mid-Morning Snack"
            },
            {
                meal: "Chickpea Quinoa Bowl",
                mealType: "Lunch"
            },
            {
                meal: "Roasted Makhana",
                mealType: "Evening Snack"
            },
            {
                meal: "Tofu Stir Fry",
                mealType: "Dinner"
            }
        ]
    },

    {
        name: "Vegetarian Muscle Gain Plan",
        description: "High-protein vegetarian diet designed to support muscle growth.",
        goal: "Muscle Gain",
        dietType: "Vegetarian",
        dailyCalories: 2600,
        protein: 140,
        carbs: 330,
        fats: 75,
        meals: [
            {
                meal: "Paneer Paratha",
                mealType: "Breakfast"
            },
            {
                meal: "Cottage Cheese Bowl",
                mealType: "Mid-Morning Snack"
            },
            {
                meal: "Paneer Rice Bowl",
                mealType: "Lunch"
            },
            {
                meal: "Almond Banana Smoothie",
                mealType: "Evening Snack"
            },
            {
                meal: "Paneer Bhurji Roti",
                mealType: "Dinner"
            }
        ]
    },

    {
        name: "Non-Veg Muscle Gain Plan",
        description: "High-protein diet with chicken and eggs for muscle growth.",
        goal: "Muscle Gain",
        dietType: "Non-Vegetarian",
        dailyCalories: 2800,
        protein: 180,
        carbs: 340,
        fats: 75,
        meals: [
            {
                meal: "Egg Bhurji Toast",
                mealType: "Breakfast"
            },
            {
                meal: "Protein Smoothie",
                mealType: "Mid-Morning Snack"
            },
            {
                meal: "Chicken Rice Bowl",
                mealType: "Lunch"
            },
            {
                meal: "Peanut Chaat",
                mealType: "Evening Snack"
            },
            {
                meal: "Chicken Roti Dinner",
                mealType: "Dinner"
            }
        ]
    },

    {
        name: "Vegan Muscle Gain Plan",
        description: "Plant-based high-protein diet designed to support muscle development.",
        goal: "Muscle Gain",
        dietType: "Vegan",
        dailyCalories: 2700,
        protein: 135,
        carbs: 350,
        fats: 70,
        meals: [
            {
                meal: "Tofu Scramble",
                mealType: "Breakfast"
            },
            {
                meal: "Roasted Chickpeas",
                mealType: "Mid-Morning Snack"
            },
            {
                meal: "Tofu Rice Bowl",
                mealType: "Lunch"
            },
            {
                meal: "Hummus Vegetable Sticks",
                mealType: "Evening Snack"
            },
            {
                meal: "Tofu Stir Fry",
                mealType: "Dinner"
            }
        ]
    },

    {
        name: "Vegetarian Maintenance Plan",
        description: "Balanced vegetarian diet designed to maintain body weight.",
        goal: "Maintenance",
        dietType: "Vegetarian",
        dailyCalories: 2200,
        protein: 110,
        carbs: 280,
        fats: 65,
        meals: [
            {
                meal: "Vegetable Upma",
                mealType: "Breakfast"
            },
            {
                meal: "Greek Yogurt Bowl",
                mealType: "Mid-Morning Snack"
            },
            {
                meal: "Paneer Roti Meal",
                mealType: "Lunch"
            },
            {
                meal: "Boiled Corn",
                mealType: "Evening Snack"
            },
            {
                meal: "Dal Roti Dinner",
                mealType: "Dinner"
            }
        ]
    },

    {
        name: "Non-Veg Maintenance Plan",
        description: "Balanced high-protein diet for maintaining body weight.",
        goal: "Maintenance",
        dietType: "Non-Vegetarian",
        dailyCalories: 2300,
        protein: 145,
        carbs: 270,
        fats: 65,
        meals: [
            {
                meal: "Egg Omelette Toast",
                mealType: "Breakfast"
            },
            {
                meal: "Apple Almond Snack",
                mealType: "Mid-Morning Snack"
            },
            {
                meal: "Chicken Roti Meal",
                mealType: "Lunch"
            },
            {
                meal: "Fruit Yogurt",
                mealType: "Evening Snack"
            },
            {
                meal: "Fish With Vegetables",
                mealType: "Dinner"
            }
        ]
    },

    {
        name: "Vegan Maintenance Plan",
        description: "Balanced plant-based diet for maintaining body weight.",
        goal: "Maintenance",
        dietType: "Vegan",
        dailyCalories: 2200,
        protein: 105,
        carbs: 300,
        fats: 55,
        meals: [
            {
                meal: "Tofu Scramble",
                mealType: "Breakfast"
            },
            {
                meal: "Fruit Chaat",
                mealType: "Mid-Morning Snack"
            },
            {
                meal: "Lentil Quinoa Bowl",
                mealType: "Lunch"
            },
            {
                meal: "Roasted Makhana",
                mealType: "Evening Snack"
            },
            {
                meal: "Chickpea Salad Bowl",
                mealType: "Dinner"
            }
        ]
    },

    {
        name: "Balanced Vegetarian Fitness",
        description: "Balanced vegetarian diet for active individuals.",
        goal: "General Fitness",
        dietType: "Vegetarian",
        dailyCalories: 2100,
        protein: 115,
        carbs: 270,
        fats: 60,
        meals: [
            {
                meal: "Besan Chilla",
                mealType: "Breakfast"
            },
            {
                meal: "Cottage Cheese Bowl",
                mealType: "Mid-Morning Snack"
            },
            {
                meal: "Chickpea Quinoa Bowl",
                mealType: "Lunch"
            },
            {
                meal: "Protein Yogurt",
                mealType: "Evening Snack"
            },
            {
                meal: "Paneer Tikka Dinner",
                mealType: "Dinner"
            }
        ]
    },

    {
        name: "Balanced Non-Veg Fitness",
        description: "Balanced high-protein diet for active non-vegetarian individuals.",
        goal: "General Fitness",
        dietType: "Non-Vegetarian",
        dailyCalories: 2200,
        protein: 145,
        carbs: 260,
        fats: 60,
        meals: [
            {
                meal: "Egg Bhurji Toast",
                mealType: "Breakfast"
            },
            {
                meal: "Boiled Eggs",
                mealType: "Mid-Morning Snack"
            },
            {
                meal: "Chicken Wrap",
                mealType: "Lunch"
            },
            {
                meal: "Protein Yogurt",
                mealType: "Evening Snack"
            },
            {
                meal: "Fish With Vegetables",
                mealType: "Dinner"
            }
        ]
    },

    {
        name: "Balanced Vegan Fitness",
        description: "Balanced plant-based diet for active individuals.",
        goal: "General Fitness",
        dietType: "Vegan",
        dailyCalories: 2100,
        protein: 105,
        carbs: 290,
        fats: 50,
        meals: [
            {
                meal: "Tofu Scramble",
                mealType: "Breakfast"
            },
            {
                meal: "Roasted Chickpeas",
                mealType: "Mid-Morning Snack"
            },
            {
                meal: "Tofu Rice Bowl",
                mealType: "Lunch"
            },
            {
                meal: "Hummus Vegetable Sticks",
                mealType: "Evening Snack"
            },
            {
                meal: "Tofu Stir Fry",
                mealType: "Dinner"
            }
        ]
    },

    {
        name: "High Protein Vegetarian",
        description: "Protein-focused vegetarian meal plan for active users.",
        goal: "Muscle Gain",
        dietType: "Vegetarian",
        dailyCalories: 2500,
        protein: 150,
        carbs: 285,
        fats: 70,
        meals: [
            {
                meal: "Oats Protein Bowl",
                mealType: "Breakfast"
            },
            {
                meal: "Cottage Cheese Bowl",
                mealType: "Mid-Morning Snack"
            },
            {
                meal: "Paneer Rice Bowl",
                mealType: "Lunch"
            },
            {
                meal: "Protein Yogurt",
                mealType: "Evening Snack"
            },
            {
                meal: "Paneer Bhurji Roti",
                mealType: "Dinner"
            }
        ]
    },

    {
        name: "High Protein Non-Veg",
        description: "Protein-focused diet containing chicken, eggs and fish.",
        goal: "Muscle Gain",
        dietType: "Non-Vegetarian",
        dailyCalories: 2700,
        protein: 190,
        carbs: 300,
        fats: 70,
        meals: [
            {
                meal: "Oats Protein Bowl",
                mealType: "Breakfast"
            },
            {
                meal: "Boiled Eggs",
                mealType: "Mid-Morning Snack"
            },
            {
                meal: "Chicken Rice Bowl",
                mealType: "Lunch"
            },
            {
                meal: "Protein Smoothie",
                mealType: "Evening Snack"
            },
            {
                meal: "Chicken Quinoa Bowl",
                mealType: "Dinner"
            }
        ]
    },

    {
        name: "Workout Performance Diet",
        description: "Diet plan incorporating pre and post-workout nutrition.",
        goal: "Muscle Gain",
        dietType: "Non-Vegetarian",
        dailyCalories: 2600,
        protein: 170,
        carbs: 320,
        fats: 60,
        meals: [
            {
                meal: "Oats Protein Bowl",
                mealType: "Breakfast"
            },
            {
                meal: "Chicken Rice Bowl",
                mealType: "Lunch"
            },
            {
                meal: "Banana Oat Pre-Workout",
                mealType: "Pre-Workout"
            },
            {
                meal: "Chicken Protein Bowl",
                mealType: "Post-Workout"
            },
            {
                meal: "Grilled Chicken Salad",
                mealType: "Dinner"
            }
        ]
    },

    {
        name: "Vegetarian Workout Diet",
        description: "Vegetarian diet with dedicated pre and post-workout meals.",
        goal: "Muscle Gain",
        dietType: "Vegetarian",
        dailyCalories: 2500,
        protein: 135,
        carbs: 330,
        fats: 65,
        meals: [
            {
                meal: "Paneer Paratha",
                mealType: "Breakfast"
            },
            {
                meal: "Paneer Rice Bowl",
                mealType: "Lunch"
            },
            {
                meal: "Banana Yogurt",
                mealType: "Pre-Workout"
            },
            {
                meal: "Paneer Protein Bowl",
                mealType: "Post-Workout"
            },
            {
                meal: "Paneer Tikka Dinner",
                mealType: "Dinner"
            }
        ]
    },

    {
        name: "Lean Muscle Vegetarian",
        description: "Balanced vegetarian diet focused on lean muscle development.",
        goal: "Muscle Gain",
        dietType: "Vegetarian",
        dailyCalories: 2400,
        protein: 140,
        carbs: 290,
        fats: 65,
        meals: [
            {
                meal: "Oats Protein Bowl",
                mealType: "Breakfast"
            },
            {
                meal: "Greek Yogurt Bowl",
                mealType: "Mid-Morning Snack"
            },
            {
                meal: "Paneer Roti Meal",
                mealType: "Lunch"
            },
            {
                meal: "Cottage Cheese Snack",
                mealType: "Evening Snack"
            },
            {
                meal: "Paneer Tikka Dinner",
                mealType: "Dinner"
            }
        ]
    },

    {
        name: "Lean Muscle Non-Veg",
        description: "High-protein controlled-calorie plan for lean muscle development.",
        goal: "Muscle Gain",
        dietType: "Non-Vegetarian",
        dailyCalories: 2500,
        protein: 175,
        carbs: 285,
        fats: 60,
        meals: [
            {
                meal: "Egg Omelette Toast",
                mealType: "Breakfast"
            },
            {
                meal: "Protein Smoothie",
                mealType: "Mid-Morning Snack"
            },
            {
                meal: "Chicken Wrap",
                mealType: "Lunch"
            },
            {
                meal: "Boiled Eggs",
                mealType: "Evening Snack"
            },
            {
                meal: "Chicken Roti Dinner",
                mealType: "Dinner"
            }
        ]
    }

];

module.exports = dietPlans;