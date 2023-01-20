import { createBrowserRouter } from "react-router-dom";
import AllJobsView from "../../features/AllJobs/AllJobsView";
import SingleJobView from "../../features/AllJobs/SingleJobView";
import ApplyJobView from "../../features/ApplyJob/ApplyJobView";
import MainLayout from "../../layout/MainLayout";
import AddJobs from "../../Pages/AddJobs/AddJobs";
import Course from "../../Pages/Courses/Course/Course";
import Courses from "../../Pages/Courses/Courses";
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
        path: '/apply',
        element: <ApplyJobView/>
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
        path: '/courses/:id',
        element: <Course></Course>,
        loader: ( { params } ) => fetch( `http://localhost:5000/courses/${ params.id }` ),
      }
    ],
  },
] );

export default router;
