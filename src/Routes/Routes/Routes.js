import { createBrowserRouter } from "react-router-dom";
import AllEmployers from "../../features/AllEmployers/AllEmployers";
import AllJobsView from "../../features/AllJobs/AllJobsView";
import SingleJobView from "../../features/AllJobs/SingleJobView";
import ApplyJobView from "../../features/ApplyJob/ApplyJobView";
import { ServerLink } from "../../Hooks/useServerLink";

import MainLayout from "../../layout/MainLayout";
import AboutUs from "../../Pages/AboutUs/AboutUs/AboutUs"; 
import AddJobs from "../../Pages/AddJobs/AddJobs";
import Course from "../../Pages/Courses/Course/Course";
import Courses from "../../Pages/Courses/Courses";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import MyJobPost from "../../Pages/MyJobPost/MyJobPost";
import MyJobs from "../../Pages/MyJobs/MyJobs";
import Login from "../../Pages/SignUp/Login/Login";
import JobSeeker from "../../Pages/SignUp/Registration/JobSeeker";
import Recruiter from "../../Pages/SignUp/Registration/Recruiter";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-jobs",
        element: <AllJobsView />,
      },
      {
        path: '/my-jobs',
        element: <ApplyJobView />
      },
      {
        path: "/all-employers",
        element: <AllEmployers />,
      },
      {
        path: "/job-details/:id",
        element: <SingleJobView />,
        loader: ({ params }) => fetch(`${ServerLink}/job-details/${params.id}`)
      },
      {
        path: '/applications',
        element: <ApplyJobView />
      },
      {
        path: "/addjob",
        element: <AddJobs />,
      },
      {
        path: "/MyJobPost",
        element: <MyJobPost></MyJobPost>,
      },
      {
        path: "/myJobs",
        element: <MyJobs></MyJobs>,
      },
      {
        path: '/recruiter',
        element: <Recruiter></Recruiter>
      },
      {
        path: '/jobSeeker',
        element: <JobSeeker></JobSeeker>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/courses',
        element: <Courses></Courses>
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/courses/:id',
        element: <Course></Course>,
        loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
      }
    ],
  },
]);

export default router;
