const meals = [

    // ==================== BREAKFAST ====================

    {
        name: "Oats Protein Bowl",
        description: "Oats with milk, banana, almonds and whey protein.",
        mealType: "Breakfast",
        foods: ["Oats", "Milk", "Banana", "Almonds", "Whey Protein"],
        calories: 520,
        protein: 32,
        carbs: 65,
        fats: 16
    },
    {
        name: "Vegetable Poha",
        description: "Light poha prepared with vegetables and peanuts.",
        mealType: "Breakfast",
        foods: ["Poha", "Onion", "Carrot", "Peas", "Peanuts"],
        calories: 350,
        protein: 9,
        carbs: 55,
        fats: 11
    },
    {
        name: "Paneer Paratha",
        description: "Whole wheat paratha stuffed with seasoned paneer.",
        mealType: "Breakfast",
        foods: ["Whole Wheat Flour", "Paneer", "Onion", "Spices", "Curd"],
        calories: 520,
        protein: 24,
        carbs: 58,
        fats: 22
    },
    {
        name: "Egg Omelette Toast",
        description: "Protein-rich egg omelette served with whole wheat toast.",
        mealType: "Breakfast",
        foods: ["Eggs", "Whole Wheat Bread", "Onion", "Tomato", "Capsicum"],
        calories: 410,
        protein: 25,
        carbs: 35,
        fats: 18
    },
    {
        name: "Greek Yogurt Fruit Bowl",
        description: "Greek yogurt with mixed fruits, seeds and honey.",
        mealType: "Breakfast",
        foods: ["Greek Yogurt", "Banana", "Apple", "Chia Seeds", "Honey"],
        calories: 360,
        protein: 22,
        carbs: 48,
        fats: 8
    },
    {
        name: "Besan Chilla",
        description: "Savory gram flour pancakes with vegetables.",
        mealType: "Breakfast",
        foods: ["Besan", "Onion", "Tomato", "Capsicum", "Coriander"],
        calories: 330,
        protein: 16,
        carbs: 42,
        fats: 10
    },
    {
        name: "Peanut Butter Banana Toast",
        description: "Whole wheat toast topped with peanut butter and banana.",
        mealType: "Breakfast",
        foods: ["Whole Wheat Bread", "Peanut Butter", "Banana"],
        calories: 420,
        protein: 14,
        carbs: 55,
        fats: 17
    },
    {
        name: "Vegetable Upma",
        description: "Semolina upma cooked with mixed vegetables.",
        mealType: "Breakfast",
        foods: ["Semolina", "Carrot", "Peas", "Beans", "Onion"],
        calories: 340,
        protein: 9,
        carbs: 52,
        fats: 10
    },
    {
        name: "Egg Bhurji Toast",
        description: "Scrambled eggs with vegetables served with whole wheat toast.",
        mealType: "Breakfast",
        foods: ["Eggs", "Whole Wheat Bread", "Onion", "Tomato", "Capsicum"],
        calories: 430,
        protein: 27,
        carbs: 36,
        fats: 19
    },
    {
        name: "Overnight Oats",
        description: "Overnight oats with yogurt, berries and chia seeds.",
        mealType: "Breakfast",
        foods: ["Oats", "Greek Yogurt", "Berries", "Chia Seeds", "Milk"],
        calories: 390,
        protein: 22,
        carbs: 50,
        fats: 11
    },
    {
        name: "Tofu Scramble",
        description: "Tofu scrambled with vegetables and spices.",
        mealType: "Breakfast",
        foods: ["Tofu", "Onion", "Tomato", "Capsicum", "Spinach"],
        calories: 320,
        protein: 24,
        carbs: 20,
        fats: 16
    },
    {
        name: "Idli Sambar",
        description: "Steamed idlis served with protein-rich vegetable sambar.",
        mealType: "Breakfast",
        foods: ["Idli", "Toor Dal", "Mixed Vegetables", "Sambar Spices"],
        calories: 350,
        protein: 13,
        carbs: 60,
        fats: 6
    },

    // ==================== MID-MORNING SNACK ====================

    {
        name: "Apple Almond Snack",
        description: "Fresh apple served with almonds.",
        mealType: "Mid-Morning Snack",
        foods: ["Apple", "Almonds"],
        calories: 220,
        protein: 6,
        carbs: 28,
        fats: 10
    },
    {
        name: "Greek Yogurt Bowl",
        description: "Greek yogurt with berries and seeds.",
        mealType: "Mid-Morning Snack",
        foods: ["Greek Yogurt", "Berries", "Chia Seeds"],
        calories: 210,
        protein: 18,
        carbs: 22,
        fats: 6
    },
    {
        name: "Banana Peanut Butter",
        description: "Banana with natural peanut butter.",
        mealType: "Mid-Morning Snack",
        foods: ["Banana", "Peanut Butter"],
        calories: 240,
        protein: 7,
        carbs: 31,
        fats: 11
    },
    {
        name: "Fruit Chaat",
        description: "Mixed seasonal fruits with light spices.",
        mealType: "Mid-Morning Snack",
        foods: ["Apple", "Papaya", "Orange", "Pomegranate", "Lemon"],
        calories: 180,
        protein: 3,
        carbs: 42,
        fats: 1
    },
    {
        name: "Boiled Eggs",
        description: "Simple high-protein boiled egg snack.",
        mealType: "Mid-Morning Snack",
        foods: ["Eggs"],
        calories: 155,
        protein: 13,
        carbs: 1,
        fats: 11
    },
    {
        name: "Roasted Chickpeas",
        description: "Crunchy roasted chickpeas seasoned with spices.",
        mealType: "Mid-Morning Snack",
        foods: ["Chickpeas", "Spices"],
        calories: 220,
        protein: 11,
        carbs: 34,
        fats: 4
    },
    {
        name: "Cottage Cheese Bowl",
        description: "Paneer cubes with cucumber and tomato.",
        mealType: "Mid-Morning Snack",
        foods: ["Paneer", "Cucumber", "Tomato"],
        calories: 250,
        protein: 18,
        carbs: 8,
        fats: 17
    },
    {
        name: "Protein Smoothie",
        description: "Milk, banana and whey protein smoothie.",
        mealType: "Mid-Morning Snack",
        foods: ["Milk", "Banana", "Whey Protein"],
        calories: 300,
        protein: 28,
        carbs: 35,
        fats: 6
    },

    // ==================== LUNCH ====================

    {
        name: "Paneer Rice Bowl",
        description: "Paneer served with rice and mixed vegetables.",
        mealType: "Lunch",
        foods: ["Paneer", "Rice", "Carrot", "Beans", "Capsicum"],
        calories: 620,
        protein: 28,
        carbs: 72,
        fats: 23
    },
    {
        name: "Chicken Rice Bowl",
        description: "Grilled chicken with rice and vegetables.",
        mealType: "Lunch",
        foods: ["Chicken Breast", "Rice", "Broccoli", "Carrot"],
        calories: 650,
        protein: 48,
        carbs: 70,
        fats: 15
    },
    {
        name: "Dal Rice",
        description: "Dal served with steamed rice and vegetables.",
        mealType: "Lunch",
        foods: ["Toor Dal", "Rice", "Mixed Vegetables", "Salad"],
        calories: 560,
        protein: 19,
        carbs: 88,
        fats: 12
    },
    {
        name: "Rajma Rice",
        description: "Kidney bean curry served with rice.",
        mealType: "Lunch",
        foods: ["Rajma", "Rice", "Onion", "Tomato", "Spices"],
        calories: 590,
        protein: 21,
        carbs: 92,
        fats: 10
    },
    {
        name: "Chickpea Quinoa Bowl",
        description: "Quinoa and chickpeas with fresh vegetables.",
        mealType: "Lunch",
        foods: ["Quinoa", "Chickpeas", "Cucumber", "Tomato", "Spinach"],
        calories: 520,
        protein: 22,
        carbs: 76,
        fats: 14
    },
    {
        name: "Chicken Roti Meal",
        description: "Grilled chicken with whole wheat rotis and vegetables.",
        mealType: "Lunch",
        foods: ["Chicken Breast", "Whole Wheat Roti", "Salad", "Curd"],
        calories: 610,
        protein: 49,
        carbs: 62,
        fats: 16
    },
    {
        name: "Paneer Roti Meal",
        description: "Paneer curry with whole wheat rotis and salad.",
        mealType: "Lunch",
        foods: ["Paneer", "Whole Wheat Roti", "Salad", "Curd"],
        calories: 630,
        protein: 29,
        carbs: 65,
        fats: 25
    },
    {
        name: "Fish Rice Bowl",
        description: "Grilled fish with rice and vegetables.",
        mealType: "Lunch",
        foods: ["Fish", "Rice", "Broccoli", "Carrot"],
        calories: 580,
        protein: 43,
        carbs: 65,
        fats: 13
    },
    {
        name: "Tofu Rice Bowl",
        description: "Tofu with rice and stir-fried vegetables.",
        mealType: "Lunch",
        foods: ["Tofu", "Rice", "Broccoli", "Capsicum", "Carrot"],
        calories: 540,
        protein: 25,
        carbs: 72,
        fats: 15
    },
    {
        name: "Chole Roti",
        description: "Chickpea curry served with whole wheat rotis.",
        mealType: "Lunch",
        foods: ["Chickpeas", "Whole Wheat Roti", "Onion", "Tomato", "Salad"],
        calories: 570,
        protein: 20,
        carbs: 86,
        fats: 13
    },
    {
        name: "Chicken Wrap",
        description: "Whole wheat wrap filled with grilled chicken and vegetables.",
        mealType: "Lunch",
        foods: ["Chicken Breast", "Whole Wheat Wrap", "Lettuce", "Tomato", "Yogurt"],
        calories: 510,
        protein: 42,
        carbs: 48,
        fats: 14
    },
    {
        name: "Lentil Quinoa Bowl",
        description: "Lentils and quinoa with fresh vegetables.",
        mealType: "Lunch",
        foods: ["Lentils", "Quinoa", "Spinach", "Tomato", "Cucumber"],
        calories: 530,
        protein: 25,
        carbs: 78,
        fats: 10
    },

    // ==================== EVENING SNACK ====================

    {
        name: "Roasted Makhana",
        description: "Light roasted fox nuts seasoned with spices.",
        mealType: "Evening Snack",
        foods: ["Makhana", "Olive Oil", "Spices"],
        calories: 190,
        protein: 6,
        carbs: 28,
        fats: 7
    },
    {
        name: "Peanut Chaat",
        description: "Boiled peanuts mixed with fresh vegetables.",
        mealType: "Evening Snack",
        foods: ["Peanuts", "Onion", "Tomato", "Coriander", "Lemon"],
        calories: 270,
        protein: 12,
        carbs: 18,
        fats: 17
    },
    {
        name: "Protein Yogurt",
        description: "Greek yogurt with a small serving of fruit.",
        mealType: "Evening Snack",
        foods: ["Greek Yogurt", "Berries"],
        calories: 180,
        protein: 18,
        carbs: 18,
        fats: 4
    },
    {
        name: "Hummus Vegetable Sticks",
        description: "Hummus served with fresh cucumber and carrot sticks.",
        mealType: "Evening Snack",
        foods: ["Hummus", "Cucumber", "Carrot"],
        calories: 210,
        protein: 7,
        carbs: 24,
        fats: 10
    },
    {
        name: "Boiled Corn",
        description: "Boiled sweet corn with lemon and spices.",
        mealType: "Evening Snack",
        foods: ["Sweet Corn", "Lemon", "Spices"],
        calories: 180,
        protein: 6,
        carbs: 36,
        fats: 2
    },
    {
        name: "Cottage Cheese Snack",
        description: "Low-fat cottage cheese with cucumber and tomato.",
        mealType: "Evening Snack",
        foods: ["Low-Fat Paneer", "Cucumber", "Tomato"],
        calories: 190,
        protein: 20,
        carbs: 8,
        fats: 9
    },
    {
        name: "Fruit Yogurt",
        description: "Greek yogurt mixed with banana and berries.",
        mealType: "Evening Snack",
        foods: ["Greek Yogurt", "Banana", "Berries"],
        calories: 230,
        protein: 17,
        carbs: 34,
        fats: 4
    },
    {
        name: "Almond Banana Smoothie",
        description: "Banana smoothie with milk and almonds.",
        mealType: "Evening Snack",
        foods: ["Banana", "Milk", "Almonds"],
        calories: 290,
        protein: 11,
        carbs: 38,
        fats: 11
    },

    // ==================== DINNER ====================

    {
        name: "Paneer Tikka Dinner",
        description: "Grilled paneer tikka with vegetables and salad.",
        mealType: "Dinner",
        foods: ["Paneer", "Capsicum", "Onion", "Tomato", "Salad"],
        calories: 480,
        protein: 32,
        carbs: 22,
        fats: 29
    },
    {
        name: "Grilled Chicken Salad",
        description: "Grilled chicken breast with a large fresh salad.",
        mealType: "Dinner",
        foods: ["Chicken Breast", "Lettuce", "Cucumber", "Tomato", "Olive Oil"],
        calories: 430,
        protein: 48,
        carbs: 18,
        fats: 19
    },
    {
        name: "Chicken Roti Dinner",
        description: "Grilled chicken served with whole wheat rotis and vegetables.",
        mealType: "Dinner",
        foods: ["Chicken Breast", "Whole Wheat Roti", "Mixed Vegetables"],
        calories: 560,
        protein: 46,
        carbs: 55,
        fats: 15
    },
    {
        name: "Dal Roti Dinner",
        description: "Lentil dal with whole wheat rotis and salad.",
        mealType: "Dinner",
        foods: ["Dal", "Whole Wheat Roti", "Salad", "Curd"],
        calories: 500,
        protein: 20,
        carbs: 72,
        fats: 13
    },
    {
        name: "Tofu Stir Fry",
        description: "Tofu stir-fried with colorful vegetables.",
        mealType: "Dinner",
        foods: ["Tofu", "Broccoli", "Capsicum", "Carrot", "Soy Sauce"],
        calories: 420,
        protein: 27,
        carbs: 32,
        fats: 19
    },
    {
        name: "Fish With Vegetables",
        description: "Grilled fish served with roasted vegetables.",
        mealType: "Dinner",
        foods: ["Fish", "Broccoli", "Carrot", "Beans", "Olive Oil"],
        calories: 410,
        protein: 42,
        carbs: 20,
        fats: 17
    },
    {
        name: "Paneer Bhurji Roti",
        description: "Paneer bhurji served with whole wheat rotis.",
        mealType: "Dinner",
        foods: ["Paneer", "Onion", "Tomato", "Capsicum", "Whole Wheat Roti"],
        calories: 570,
        protein: 30,
        carbs: 58,
        fats: 24
    },
    {
        name: "Chickpea Salad Bowl",
        description: "Chickpeas with fresh vegetables and lemon dressing.",
        mealType: "Dinner",
        foods: ["Chickpeas", "Cucumber", "Tomato", "Onion", "Lemon"],
        calories: 390,
        protein: 17,
        carbs: 55,
        fats: 11
    },
    {
        name: "Egg Roti Dinner",
        description: "Egg bhurji served with whole wheat rotis.",
        mealType: "Dinner",
        foods: ["Eggs", "Whole Wheat Roti", "Onion", "Tomato", "Capsicum"],
        calories: 510,
        protein: 27,
        carbs: 52,
        fats: 21
    },
    {
        name: "Rajma Quinoa Bowl",
        description: "Kidney beans and quinoa with fresh vegetables.",
        mealType: "Dinner",
        foods: ["Rajma", "Quinoa", "Spinach", "Tomato", "Cucumber"],
        calories: 470,
        protein: 21,
        carbs: 70,
        fats: 10
    },
    {
        name: "Chicken Quinoa Bowl",
        description: "Chicken breast with quinoa and mixed vegetables.",
        mealType: "Dinner",
        foods: ["Chicken Breast", "Quinoa", "Broccoli", "Carrot"],
        calories: 520,
        protein: 48,
        carbs: 46,
        fats: 14
    },
    {
        name: "Vegetable Khichdi",
        description: "Light rice and lentil khichdi with vegetables.",
        mealType: "Dinner",
        foods: ["Rice", "Moong Dal", "Carrot", "Peas", "Beans"],
        calories: 420,
        protein: 15,
        carbs: 70,
        fats: 8
    },

    // ==================== PRE-WORKOUT ====================

    {
        name: "Banana Oat Pre-Workout",
        description: "Carbohydrate-rich oats and banana meal for training energy.",
        mealType: "Pre-Workout",
        foods: ["Oats", "Banana", "Honey"],
        calories: 300,
        protein: 8,
        carbs: 58,
        fats: 5
    },
    {
        name: "Peanut Butter Banana Toast",
        description: "Toast with banana and peanut butter for sustained energy.",
        mealType: "Pre-Workout",
        foods: ["Whole Wheat Bread", "Banana", "Peanut Butter"],
        calories: 330,
        protein: 11,
        carbs: 48,
        fats: 12
    },
    {
        name: "Fruit Oat Bowl",
        description: "Oats with banana and berries before training.",
        mealType: "Pre-Workout",
        foods: ["Oats", "Banana", "Berries"],
        calories: 280,
        protein: 8,
        carbs: 55,
        fats: 4
    },
    {
        name: "Banana Yogurt",
        description: "Banana with Greek yogurt for carbohydrates and protein.",
        mealType: "Pre-Workout",
        foods: ["Banana", "Greek Yogurt", "Honey"],
        calories: 250,
        protein: 15,
        carbs: 40,
        fats: 3
    },

    // ==================== POST-WORKOUT ====================

    {
        name: "Chicken Protein Bowl",
        description: "High-protein chicken and rice meal after training.",
        mealType: "Post-Workout",
        foods: ["Chicken Breast", "Rice", "Broccoli"],
        calories: 560,
        protein: 50,
        carbs: 60,
        fats: 10
    },
    {
        name: "Paneer Protein Bowl",
        description: "Paneer with rice and vegetables for post-workout recovery.",
        mealType: "Post-Workout",
        foods: ["Paneer", "Rice", "Broccoli", "Carrot"],
        calories: 590,
        protein: 31,
        carbs: 65,
        fats: 23
    },
    {
        name: "Protein Smoothie Bowl",
        description: "High-protein smoothie with banana, oats and whey.",
        mealType: "Post-Workout",
        foods: ["Banana", "Oats", "Milk", "Whey Protein"],
        calories: 450,
        protein: 35,
        carbs: 58,
        fats: 8
    },
    {
        name: "Egg Rice Bowl",
        description: "Eggs with rice and vegetables for post-workout recovery.",
        mealType: "Post-Workout",
        foods: ["Eggs", "Rice", "Peas", "Carrot"],
        calories: 480,
        protein: 25,
        carbs: 62,
        fats: 15
    }
];

module.exports = meals;