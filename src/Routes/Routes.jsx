import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <Home></Home>
            },
            {
                path: '/aboutus',
                element: <Home></Home>
            },
            {
                path: '/ordertracking',
                element: <Home></Home>
            },
            {
                path: '/termsconditions',
                element: <Home></Home>
            },

        ]
    },
]);