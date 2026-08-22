import { useEffect } from "react";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Components/Layout";
import WorkoutPlan from "./Components/WorkoutPlan";
import DietPlan from "./Components/dietPlan";
import FitnessAssignment from "./Components/FitnessAssignment";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Landing/>
      },
      {
        path:"workoutPlan",
        element:<WorkoutPlan/>
      },
      {
        path:"diet",
        element:<DietPlan/>
      },
      {
        path:"fitness",
        element:<FitnessAssignment/>
      }
    ]

  }
])

function App() {
  return <RouterProvider router={router}/>

}

export default App;
