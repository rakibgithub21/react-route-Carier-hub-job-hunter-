import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Pages/Home";
import Statistics from '../../Pages/Statistics'
import AppliedJobs from "../../Pages/AppliedJobs";
import Blog from "../../Pages/Blog";
import JobDetails from "../../Pages/JobDetails";

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
                element: <AppliedJobs></AppliedJobs>,
                loader: () => fetch('../jobs.json')
            },
            {
                path: '/blogs',
                element:<Blog></Blog>
            },
            {
                path: '/job-details/:id',
                element: <JobDetails></JobDetails>,
                loader:()=>fetch('../jobs.json')
            }
        ]
   }
]);

