import React from 'react'
import { Link } from "react-router-dom"

function Landing() {
  return (
    <div className='py-5 px-35 mx-30 min-h-[52px]'>
      <div className='flex mt-1 justify-between'>
        <h1 className='font-bold text-4xl text-[#24251F]'>Build your best body</h1>
      </div>
      <div className='w-80 mt-2'>
        <h3 className='text-[#77766D]'>Achieve your fitness goals with personalized plans and expert guidance from FitWise</h3>
      </div>
      <div className='mt-8'>
        <h1 className='m-5 flex justify-center font-semibold'>What we offer</h1>
      </div>
      <div className='grid grid-cols-3'>
        <Link to="workoutPlan">
          <div className="w-64 h-72 p-2 rounded overflow-hidden shadow-lg transition-all duration-300 ease-in-out
    hover:-translate-y-2
    hover:shadow-xl
    hover:bg-[#F3EEDF]
    cursor-pointer">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Workout Plans
              </div>

              <p className="text-gray-700 text-base">
                Access personalized workout routines designed to meet your
                specific goal and fitness level
              </p>
            </div>
          </div>
        </Link>
        <Link to="workoutPlan">
          <div className="w-64 h-72 p-2 rounded overflow-hidden shadow-lg transition-all duration-300 ease-in-out
    hover:-translate-y-2
    hover:shadow-xl
    hover:bg-[#F3EEDF]
    cursor-pointer">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Healthy diet
              </div>
              <p className="text-gray-700 text-base">
                Get nutriented guidance and meal plan to complement your training and fuel your body
              </p>
            </div>
          </div>
        </Link>
        <Link to="workoutPlan">
          <div className="w-64 h-72 p-2 rounded overflow-hidden shadow-lg transition-all duration-300 ease-in-out
    hover:-translate-y-2
    hover:shadow-xl
    hover:bg-[#F3EEDF]
    cursor-pointer">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Fitness Assessment
              </div>
              <p className="text-gray-700 text-base">
                Tell us about yourself
                We'll use this information to understand your body
                and create a personalized fitness plan.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Landing
