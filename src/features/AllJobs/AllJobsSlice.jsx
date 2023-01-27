import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ServerLink } from '../../Hooks/useServerLink';

// fake data
// const initialJobs = {
//     jobs: [
//         {
//             id: '63c68f3854473bea0aa31b85',
//             jobTitle: "MERN Stack Developer",
//             jobDescription:
//                 ["A startup in Toronto, Canada  is looking for a Full-stack Web Application Developer to implement and build features for our main web application. Responsibilities include implementic business logic functionality on backend, implementing UI/UX design wireframes and mockups into actual code that will produce visual elements within our web-application."
//                     , "This is an intermediate-to-senior level role and assumes that the candidate is comfortable working with a small team under minimal supervision, can take on leadership responsibilities, and has experience and skills to perform complete both front-end and back-end development, including UI/UX, design and testing.            This position is remote and will report to an Engineering Manager."],
//             jobRequirements: [
//                 "You’ve been building web applications professionally for 3+ years.",
//                 "You have experience with web application frameworks; especially with NodeJS on the back-end and VueJS on the front-end.",
//                 "You can lead technical architecture discussions and help drive technical decisions.",
//                 "You write understandable and testable code with an eye towards maintainability.",
//                 "You are a strong communicator. Explaining complex technical concepts to designers, support, and other developers is not a challenge for you.",
//                 "You possess strong computer science fundamentals: data structures, algorithms, programming languages, distributed systems, and information retrieval.",
//                 "You have a bachelor's degree in Computer Science, Engineering or related field, or equivalent training, fellowship, or work experience.",
//             ],
//             jobResponsibilities: [
//                 "Develop new user-facing features",
//                 "Build reusable code and components for future use",
//                 "Ensure the technical feasibility of UI/UX designs",
//                 "Create and maintain automated testing capabilities of the web application",
//                 "Optimization of code and overall project for speed, scalability and performance",
//             ],
//             jobStatus: "Remote",
//             jobType: "Full time",
//             location: "Chittagong",
//             salary: "200",
//             salaryCurrency: "USD",
//             experience: "2 years",
//             language: "English",
//             mustSkills: "React",
//             optionalSkills: "Redux",
//             openings: "5",
//         },

//     ],
// };

export const fetchAllJobs = createAsyncThunk('jobs/fetchAllJobs', async () => {
	const res = await axios.get(`${ServerLink}/recruiterJobPosts`);
	return res.data;
});

export const JobsSlice = createSlice({
	name: 'jobs',
	initialState: {
		isLoading: false,
		jobs: [],
		isApplied: false,
		error: null,
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAllJobs.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchAllJobs.fulfilled, (state, action) => {
			state.isLoading = false;
			state.jobs = action.payload;
			state.error = null;
		});
		builder.addCase(fetchAllJobs.rejected, (state, action) => {
			state.isLoading = false;
			state.jobs = [];
			state.error = action.error.message;
		});
	},
	reducers: {
		showJobs: (state) => state,
		addJobs: (state, action) => {
			state.jobs.push(action.payload);
		},
		updateJobs: (state, action) => {
			const { id, title, author } = action.payload;
			const isJobExist = state.jobs.filter((job) => job.id === id);
			if (isJobExist) {
				isJobExist[0].title = title;
				isJobExist[0].author = author;
			}
		},
		deleteJobs: (state, action) => {
			const id = action.payload;
			state.jobs = state.jobs.filter((book) => book.id !== id);
		},
	},
});

export const { showJobs, addJobs, deleteJobs, updateJobs } = JobsSlice.actions;
export default JobsSlice.reducer;
