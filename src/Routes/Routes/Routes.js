import { createBrowserRouter } from "react-router-dom";
import AllJobsView from "../../features/AllJobs/AllJobsView";
import SingleJobView from "../../features/AllJobs/SingleJobView";
import MainLayout from "../../layout/MainLayout";
<<<<<<< HEAD
import Course from "../../Pages/Courses/Course/Course";
import Courses from "../../Pages/Courses/Courses";
import BackendDevelopers from "../../Pages/Home/AllStackDevelopers/BackendDevelopers/BackendDevelopers";
import DevopsEngineers from "../../Pages/Home/AllStackDevelopers/DevopsEngineers/DevopsEngineers";
import FrontEndDevelopers from "../../Pages/Home/AllStackDevelopers/FrontEndDevelopers/FrontEndDevelopers";
import FullStackDevelopers from "../../Pages/Home/AllStackDevelopers/FullstackDevelopers/FullStackDevelopers";
import MobileDevelopers from "../../Pages/Home/AllStackDevelopers/MobileDevelopers/MobileDevelopers";
=======
import AddJobs from "../../Pages/AddJobs/AddJobs";
>>>>>>> 20d147b067e0a44a9e121bdf182a72d762b3a784
import Home from "../../Pages/Home/Home/Home";
import MyJobPost from "../../Pages/MyJobPost/MyJobPost";
import Login from "../../Pages/SignUp/Login/Login";
import JobSeeker from "../../Pages/SignUp/Registration/JobSeeker";
import Recruiter from "../../Pages/SignUp/Registration/Recruiter";
const router = createBrowserRouter( [
  {
    path: "/",
    element: <MainLayout />,
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
        path: "/job-details",
        element: <SingleJobView />,
      },
      {
        path: "/jobSeeker",
        element: <JobSeeker></JobSeeker>,
      },
      {
        path: "/recruiter",
        element: <Recruiter></Recruiter>,
      },
      {
        path: "/addjob",
        element: <AddJobs />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
<<<<<<< HEAD
        path: "/courses",
        element: <Courses></Courses>
      },
      {
        path: '/course/:id',
        loader: ( { params } ) => fetch( `http://localhost:5000/courses/${ params.id }` ),
        element: <Course></Course>
=======
        path: "/MyJobPost",
        element: <MyJobPost></MyJobPost>,
>>>>>>> 20d147b067e0a44a9e121bdf182a72d762b3a784
      },
    ],
  },
] );

export default router;
