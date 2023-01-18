import { createSlice } from "@reduxjs/toolkit";

const initialJobs = {
    jobs: [
        { id: 1, title: "MERN Developer", location: "Bangladesh" },
        { id: 2, title: "Full-Stack Developer", location: "USA" },
    ],
};

export const JobsSlice = createSlice({
    name: "jobs",
    initialState: initialJobs,
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

export const { showJobs, addJobs, deleteJobs, updateJobs } =
    JobsSlice.actions;
export default JobsSlice.reducer;
