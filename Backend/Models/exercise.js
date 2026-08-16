const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const exerciseSchema=new Schema({

    name:{
        type:String,
        required:true,
        unique:true
    },
    bodyPart:{
        type:String,
        required:true,
        enum:["Chest","Back","Shoulders","Biceps","Triceps","Legs","Glutes","Core","Calves","Forearms"]
    },
    targetMuscle:{
        type:String
    },
    equipment:{
        type:String,
        required:true
    },
    difficulty:{
        type:String,
        required:true,
        enum:["Beginner","Intermediate","Advanced"]
    },
    exerciseType:{
        type:String,
        required:true,
        enum:["Strength","Cardio","Mobility","Flexibility","Balance"]
    },
    instructions:{
        type:[String],
        required:true
    },
    sets:{
        type:Number,
        required:true
    },
    reps:{
        type:String,
        required:true
    },
    restTime:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model("Exercise",exerciseSchema);