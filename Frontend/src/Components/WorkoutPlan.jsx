import React, { useState } from "react";
import { useForm } from "react-hook-form";

function WorkoutPlan() {
  const { register, handleSubmit } = useForm();
  const [workout, setWorkout] = useState(null);

  const onSubmit = async (data) => {
    const response = await fetch("http://localhost:8080/workoutplan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    let res = await response.json();
    setWorkout(res);
  };
  console.log(workout);

  return (
    <div className="min-h-screen bg-[#F8F4EA] px-6 py-12">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-[#24251F] mb-10">
          Workout Plan
        </h1>

        {workout ? (
          <div className = "bg-white rounded-lg shadow-md p-8 space-y-6">
            <h1 className="text-3xl font-bold ">{workout.name}</h1>
          </div>
        ): (
            <form
          onSubmit = { handleSubmit(onSubmit) }
          className = "bg-white rounded-lg shadow-md p-8 space-y-6"
            >

          {/* Goal */ }
          <div className="flex flex-col gap-2">
          <label
            htmlFor="goal"
            className="text-lg font-medium text-[#24251F]"
          >
            Goal
          </label>

          <select
            id="goal"
            {...register("goal")}
            className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white outline-none focus:border-[#24251F]"
          >
            <option value="">Select your goal</option>
            <option value="weight-loss">Weight Loss</option>
            <option value="muscle-gain">Muscle Gain</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>

        {/* Difficulty */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="difficulty"
            className="text-lg font-medium text-[#24251F]"
          >
            Difficulty
          </label>

          <select
            id="difficulty"
            {...register("difficulty")}
            className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white outline-none focus:border-[#24251F]"
          >
            <option value="">Select difficulty</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* Days */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="daysPerWeek"
            className="text-lg font-medium text-[#24251F]"
          >
            Days per week
          </label>

          <select
            id="daysPerWeek"
            {...register("daysPerWeek")}
            className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white outline-none focus:border-[#24251F]"
          >
            <option value="">Select days</option>
            <option value="3">3 Days</option>
            <option value="4">4 Days</option>
            <option value="5">5 Days</option>
            <option value="6">6 Days</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-md bg-[#24251F] text-white font-medium transition-all duration-300 hover:bg-[#3A3B32] cursor-pointer"
        >
          Generate Workout Plan
        </button>

      </form>
          )}



    </div>
    </div >
  );
}

export default WorkoutPlan;