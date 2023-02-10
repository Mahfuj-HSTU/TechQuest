import { createBrowserRouter } from 'react-router-dom';
import AllJobsView from '../../features/AllJobs/AllJobsView';
import SingleJobView from '../../features/AllJobs/SingleJobView';
import AllJobSeekers from '../../features/AllJobSeekers/AllJobSeekers';
import ApplyJobView from '../../features/ApplyJob/ApplyJobView';
import { ServerLink } from '../../Hooks/useServerLink.jsx';
import MainLayout from '../../layout/MainLayout';
import AboutUs from '../../Pages/AboutUs/AboutUs/AboutUs';
import AddJobs from '../../Pages/AddJobs/AddJobs';
import CourseDetails from '../../Pages/Courses/Course/CourseDetails';
import Courses from '../../Pages/Courses/Courses';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home/Home';
import MyJobPost from '../../Pages/MyJobPost/MyJobPost';
import MyJobDetails from '../../Pages/MyJobs/MyJobDetails/MyJobDetails';
import MyJobs from '../../Pages/MyJobs/MyJobs';
import EditProfileModal from '../../Pages/Shared/Navbar/EditProfileModal';
import Login from '../../Pages/SignUp/Login/Login';
import JobSeeker from '../../Pages/SignUp/Registration/JobSeeker';
import Recruiter from '../../Pages/SignUp/Registration/Recruiter';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
// import JobSeekerRoute from '../JobSeekerRoute/JobSeekerRoute';
// import Users from "../../Pages/AllUsers/Users/Users";
import AllUsersView from '../../features/AllUsers/AllUsersView';
import CoursePayment from '../../Pages/Courses/Course/CoursePayment';
import JobSeekerLayout from '../../layout/JobSeekerLayout';
import RecruiterLayout from '../../layout/RecruiterLayout';
import AdminLayout from '../../layout/AdminLayout';
import AuthenticationLayout from '../../layout/AuthenticationLayout';
import ShowApplicant from '../../Pages/ShowApplicant/ShowApplicant';
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
				path: '/EditProfile',
				element: <EditProfileModal />,
			},
			{
				path: '/about',
				element: <AboutUs></AboutUs>,
			},
		],
	},
	{
		path: '/job-seeker',
		element: <JobSeekerLayout />,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/job-seeker/myJobs',
				element: (
					<PrivateRoute>
						<MyJobs></MyJobs>
					</PrivateRoute>
				),
			},
			//  MY JOB DETAILS
			{
				path: '/job-seeker/myjob-details/:id',
				element: <MyJobDetails />,
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
				path: '/job-seeker/job-details/:id',
				element: <SingleJobView />,
				loader: ({ params }) => fetch(`${ServerLink}/job-details/${params.id}`),
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
				loader: ({ params }) =>
					fetch(`${ServerLink}/courses/${params.id}`),
			},
		],
	},
	{
		path: '/recruiter',
		element: <RecruiterLayout />,
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
				element: <AllJobSeekers />,
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
				path: "/recruiter/applicant/:id",
				element: <ShowApplicant />,
				loader: ({ params }) =>
					fetch(`${ServerLink}/applicant/${params.id}`),
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
				loader: ({ params }) =>
					fetch(`${ServerLink}/courses/${params.id}`),
			},
			{
				path: '/admin/job-details/:id',
				element: <SingleJobView />,
				loader: ({ params }) => fetch(`${ServerLink}/job-details/${params.id}`),
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
				loader: ({ params }) =>
					fetch(`${ServerLink}/courses/${params.id}`),
			},
		],
	},
]);

export default router;
