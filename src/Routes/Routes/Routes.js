import { createBrowserRouter } from "react-router-dom";
import AllJobsView from "../../features/AllJobs/AllJobsView";
import Developers from "../../layout/Developers";
import MainLayout from "../../layout/MainLayout";
import BackendDevelopers from "../../Pages/Home/AllStackDevelopers/BackendDevelopers/BackendDevelopers";
import DevopsEngineers from "../../Pages/Home/AllStackDevelopers/DevopsEngineers/DevopsEngineers";
import FrontEndDevelopers from "../../Pages/Home/AllStackDevelopers/FrontEndDevelopers/FrontEndDevelopers";
import FullStackDevelopers from "../../Pages/Home/AllStackDevelopers/FullstackDevelopers/FullStackDevelopers";
import MobileDevelopers from "../../Pages/Home/AllStackDevelopers/MobileDevelopers/MobileDevelopers";
import Home from "../../Pages/Home/Home/Home";
import MyJobPost from "../../Pages/MyJobPost/MyJobPost";
import Login from "../../Pages/SignUp/Login/Login";
import JobSeeker from "../../Pages/SignUp/Registration/JobSeeker";
import Recruiter from "../../Pages/SignUp/Registration/Recruiter";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Developers />,
            children: [
              {
                path: "/forntend_developers",
                element: <FrontEndDevelopers />,
              },
              {
                path: "/backend_developers",
                element: <BackendDevelopers />,
              },
              {
                path: "/fullstack_developers",
                element: <FullStackDevelopers />,
              },
              {
                path: "/mobile_developers",
                element: <MobileDevelopers />,
              },
              {
                path: "/devops_engineers",
                element: <DevopsEngineers />,
              },
            ],
          },
        ],
      },
      {
        path: "/all-jobs",
        element: <AllJobsView />,
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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/MyJobPost",
        element: <MyJobPost></MyJobPost>,
      },
    ],
  },
]);

export default router;
