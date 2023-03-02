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
import Login from "../../Pages/SignUp/Login/Login";
import JobSeeker from "../../Pages/SignUp/Registration/JobSeeker";
import Recruiter from "../../Pages/SignUp/Registration/Recruiter";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllUsersView from "../../features/AllUsers/AllUsersView";
import CoursePayment from "../../Pages/Courses/Course/CoursePayment";
import JobSeekerLayout from "../../layout/JobSeekerLayout";
import RecruiterLayout from "../../layout/RecruiterLayout";
import AdminLayout from "../../layout/AdminLayout";
import AuthenticationLayout from "../../layout/AuthenticationLayout";
import ShowApplicant from "../../Pages/ShowApplicant/ShowApplicant";
import { Blog } from "../../features/Blog/Blog";
import MyAccount from "../../features/MyAccount/MyAccount";
import SavedJobView from "../../features/SavedJob/SavedJobView";
import Profile from "../../features/MyAccount/Profile";
import RecruiterRoute from "../RecruiterRoute/RecruiterRoute";
import AppliedJob from "../../features/MyAccount/AppliedJob";
import MyAppliedJobDetails from "../../Pages/MyJobs/MyAppliedJobDetails/MyAppliedJobDetails";

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/all-jobs',
				element: <AllJobsView />,
			},
			{
				path: '/job-details/:id',
				element: <SingleJobView />,
				loader: ({ params }) => fetch(`${ServerLink}/job-details/${params.id}`),
			},
			{
				path: '/about',
				element: <AboutUs></AboutUs>,
			},
			{
				path: '/blogs',
				element: <Blog></Blog>,
			},
			{
				path: '/test',
				element: <ApplyJobView />,
			},
		],
	},
	{
		path: '/my-account',
		element: (
			<PrivateRoute>
				<MyAccount />
			</PrivateRoute>
		),
		children: [
			{
				path: '/my-account/saved-jobs',
				element: <SavedJobView />,
			},
			{
				path: '/my-account/applied-jobs',
				element: <AppliedJob />,
			},
			{
				path: '/my-account/profile',
				element: <Profile />,
			},
		],
	},
	{
		path: '/job-seeker',
		element: <JobSeekerLayout />,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			
			//  MY JOB DETAILS
			{
				path: '/job-seeker/myJob-details/:id',
				element: <MyAppliedJobDetails/> ,
				loader: ({ params }) =>
					fetch(`${ServerLink}/applications/${params.id}`),
			},
			{
				path: '/job-seeker/my-jobs',
				element: (
					<PrivateRoute>
						<ApplyJobView />
					</PrivateRoute>
				),
			},
			{
				path: '/job-seeker/courses',
				element: (
					<PrivateRoute>
						<Courses></Courses>
					</PrivateRoute>
				),
			},
			{
				path: '/job-seeker/courses/payment/:id',
				element: (
					<PrivateRoute>
						<CoursePayment />
					</PrivateRoute>
				),
			},
			{
				path: '/job-seeker/courses/:id',
				element: <CourseDetails />,
				loader: ({ params }) => fetch(`${ServerLink}/courses/${params.id}`),
			},
		],
	},
	{
		path: '/recruiter',
		element: (
			<PrivateRoute>
				<RecruiterLayout />
			</PrivateRoute>
		),
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/recruiter/applications',
				element: (
					<PrivateRoute>
						<ApplyJobView />
					</PrivateRoute>
				),
			},
			{
				path: '/recruiter/all-job-seekers',
				element: (
					<RecruiterRoute>
						<AllJobSeekers />
					</RecruiterRoute>
				),
			},
			{
				path: '/recruiter/add-job',
				element: (
					<PrivateRoute>
						<AddJobs></AddJobs>
					</PrivateRoute>
				),
			},
			{
				path: '/recruiter/MyJobPost',
				element: (
					<PrivateRoute>
						<MyJobPost></MyJobPost>
					</PrivateRoute>
				),
			},
			{
				path: '/recruiter/applicant/:id',
				element: <ShowApplicant />,
				loader: ({ params }) => fetch(`${ServerLink}/applicant/${params.id}`),
			},
		],
	},
	{
		path: '/admin',
		element: <AdminLayout />,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/admin/courses',
				element: (
					<PrivateRoute>
						<Courses></Courses>
					</PrivateRoute>
				),
			},
			{
				path: '/admin/courses/payment/:id',
				element: (
					<PrivateRoute>
						<CoursePayment />
					</PrivateRoute>
				),
			},
			{
				path: '/admin/courses/:id',
				element: <CourseDetails />,
				loader: ({ params }) => fetch(`${ServerLink}/courses/${params.id}`),
			},
			{
				path: '/admin/users',
				element: (
					<PrivateRoute>
						<AllUsersView></AllUsersView>
					</PrivateRoute>
				),
			},
		],
	},
	{
		path: '/auth',
		element: <AuthenticationLayout />,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/auth/jobSeeker',
				element: <JobSeeker></JobSeeker>,
			},
			{
				path: '/auth/recruiter',
				element: <Recruiter></Recruiter>,
			},
			{
				path: '/auth/login',
				element: <Login />,
			},
		],
	},
	{
		path: '/common',
		element: <MainLayout />,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/common/courses',
				element: (
					<PrivateRoute>
						<Courses></Courses>
					</PrivateRoute>
				),
			},
			{
				path: '/common/courses/payment/:id',
				element: (
					<PrivateRoute>
						<CoursePayment />
					</PrivateRoute>
				),
			},
			{
				path: '/common/courses/:id',
				element: <CourseDetails />,
				loader: ({ params }) => fetch(`${ServerLink}/courses/${params.id}`),
			},
		],
	},
]);

export default router;
