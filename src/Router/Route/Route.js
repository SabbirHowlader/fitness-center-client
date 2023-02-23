import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main/Main"
import Blog from "../../Page/Blog/Blog";
import Contract from "../../Page/Home/Contract/Contract";
import Home from "../../Page/Home/Home/Home"
import Schedules from "../../Page/Home/Schedules/Schedules";
import Login from "../../Page/Login/Login";
import Signup from "../../Page/Signup/Signup";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/aboutus',
                element: <Schedules></Schedules>
            },
            {
                path:'/contactus',
                element: <Contract></Contract>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/Signup',
                element: <Signup></Signup>
            }
        ]
    }
])

export default Router;