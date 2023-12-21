import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./LayOut/MainLayout";
import Home from "../../Pages/Home/Home";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Contact from "../../Pages/Contact/Contact";
import LogIn from "../../Pages/LogIn/LogIn";
import SignUp from "../../Pages/SignUp/SignUp";

export const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<AboutUs></AboutUs>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/login",
                element:<LogIn></LogIn>
            },
            {
                path:"/signUp",
                element:<SignUp></SignUp>
            }
        ]
    }
])




export default Router;