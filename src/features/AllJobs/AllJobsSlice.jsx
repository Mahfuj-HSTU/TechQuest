import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ServerLink } from "../../Hooks/useServerLink";

export const fetchAllJobs = createAsyncThunk("jobs/fetchAllJobs", async () => {
  const res = await axios.get(`${ServerLink}/recruiterJobPosts`);
  return res.data;
});


export const JobsSlice = createSlice({
  name: "jobSeekers",
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
      state.jobs = state.jobs.filter((job) => job.id !== id);
    },
  },
});

export const { showJobs, addJobs, deleteJobs, updateJobs } = JobsSlice.actions;
export default JobsSlice.reducer;
