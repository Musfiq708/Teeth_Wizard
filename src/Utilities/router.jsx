import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import AllTreatment from "../Components/AllTreatment/AllTreatment";
import MyAppointments from './../Components/MyAppointments/MyAppointments';
import UserProfile from "../Components/Profile/UserProfile";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import SignUp from "../Components/SignUp/SignUp";
import SignIn from "../Components/Sign-In/SignIn";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: async () => {
                    const services = await fetch("/service.json");
                    const servicesData = await services.json()

                    const feedback = await fetch("/feedback.json");
                    const feedbackData = await feedback.json()

                    return { servicesData, feedbackData }
                }
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/all-treatments",
                element: <AllTreatment></AllTreatment>,
                loader: () => fetch("/service.json")
            },
            {
                path: "/my-appontments",
                element: <MyAppointments></MyAppointments>
            },
            {
                path: "/profile",
                element: <UserProfile></UserProfile>
            },
            {
                path: "/service-details/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: async ({ params }) => {
                    const res = await fetch("/service.json");
                    const data = await res.json();

                    const singleData = data.find(d => d.id == params.id);
                    return singleData;
                }
            },
            {
                path:"/signUp",
                element:<SignUp></SignUp>
            },
            {
                path:"/signIn",
                element:<SignIn></SignIn>
            }
        ]
    }
])
