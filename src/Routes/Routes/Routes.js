import { createBrowserRouter } from "react-router-dom";
import AllJobsView from "../../features/AllJobs/AllJobsView";
import SingleJobView from "../../features/AllJobs/SingleJobView";
import MainLayout from "../../layout/MainLayout";
import AddJobs from "../../Pages/AddJobs/AddJobs";
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
        path: "/MyJobPost",
        element: <MyJobPost></MyJobPost>,
      },
    ],
  },
]);

export default router;
