import { createBrowserRouter } from "react-router-dom";
import AllJobsView from "../../features/AllJobs/AllJobsView";
import SingleJobView from "../../features/AllJobs/SingleJobView";
import AllJobSeekers from "../../features/AllJobSeekers/AllJobSeekers";
import ApplyJobView from "../../features/ApplyJob/ApplyJobView";
import { ServerLink } from "../../Hooks/useServerLink.jsx";
import MainLayout from "../../layout/MainLayout";
import AboutUs from "../../Pages/AboutUs/AboutUs/AboutUs";
import AddJobs from "../../Pages/AddJobs/AddJobs";
import CourseDetails from "../../Pages/Courses/Course/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import MyJobPost from "../../Pages/MyJobPost/MyJobPost";
import MyJobDetails from "../../Pages/MyJobs/MyJobDetails/MyJobDetails";
import MyJobs from "../../Pages/MyJobs/MyJobs";
import EditProfileModal from "../../Pages/Shared/Navbar/EditProfileModal";
import Login from "../../Pages/SignUp/Login/Login";
import JobSeeker from "../../Pages/SignUp/Registration/JobSeeker";
import Recruiter from "../../Pages/SignUp/Registration/Recruiter";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllUsersView from "../../features/AllUsers/AllUsersView";
import CoursePayment from "../../Pages/Courses/Course/CoursePayment";
import ShowVideo from "../../Pages/Courses/Video/ShowVideos";
const router = createBrowserRouter( [
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
        element: <PrivateRoute><AllJobsView /></PrivateRoute>,
      },
      {
        path: "/my-jobs",
        element: <PrivateRoute><ApplyJobView /></PrivateRoute>,
      },
      {
        path: "/all-job-seekers",
        element: <AllJobSeekers />,
      },
      {
        path: "/job-details/:id",
        element: <SingleJobView />,
        loader: ( { params } ) => fetch( `${ ServerLink }/job-details/${ params.id }` )
      },
      {
        path: "/applications",
        element: <PrivateRoute><ApplyJobView /></PrivateRoute>,
      },
      {
        path: "/addjob",
        element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>,
      },
      {
        path: "/EditProfile",
        element: <EditProfileModal />,
      },
      {
        path: "/MyJobPost",
        element: <PrivateRoute><MyJobPost></MyJobPost></PrivateRoute>,
      },
      {
        path: "/myJobs",
        element: <PrivateRoute> <MyJobs></MyJobs></PrivateRoute>,
      },
      //  MY JOB DETAILS
      {
        path: "/myjob-details/:id",
        element: <MyJobDetails />,
        loader: ( { params } ) =>
          fetch( `${ ServerLink }/applications/${ params.id }` ),
      },

      {
        path: "/recruiter",
        element: <Recruiter></Recruiter>,
      },
      {
        path: "/jobSeeker",
        element: <JobSeeker></JobSeeker>,
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/users',
        element: <PrivateRoute><AllUsersView></AllUsersView></PrivateRoute>
      },
      {
        path: "/courses",
        element: <PrivateRoute><Courses></Courses></PrivateRoute>,
      },
      {
        path: "/courses/payment/:id",
        element: <PrivateRoute><CoursePayment /></PrivateRoute>,
      },
      {
        path: "/courses/:id",
        element: <CourseDetails />,
        loader: ( { params } ) =>
          fetch( `http://localhost:5000/courses/${ params.id }` ),
      },
      {
        path: "/video/:id",
        element: <ShowVideo />,
        loader: ( { params } ) =>
          fetch( `http://localhost:5000/videos/${ params.id }` ),
      },
    ],
  },
] );

export default router;
