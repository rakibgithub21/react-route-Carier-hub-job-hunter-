import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Pages/Home";
import Statistics from '../../Pages/Statistics'
import AppliedJobs from "../../Pages/AppliedJobs";
import Blog from "../../Pages/Blog";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/statistics',
                element:<Statistics></Statistics>
            },
            {
                path: '/job-applied',
                element:<AppliedJobs></AppliedJobs>
            },
            {
                path: '/blogs',
                element:<Blog></Blog>
            }
        ]
   }
]);

