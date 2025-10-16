import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import AllTreatment from "../Components/AllTreatment/AllTreatment";
import MyAppointments from './../Components/MyAppointments/MyAppointments';
import UserProfile from "../Components/Profile/UserProfile";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch("/service.json")
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/all-treatments",
                element:<AllTreatment></AllTreatment>
            },
            {
                path:"/my-appontments",
                element:<MyAppointments></MyAppointments>
            },
            {
                path:"/profile",
                element:<UserProfile></UserProfile>
            }
        ]
    }
])
