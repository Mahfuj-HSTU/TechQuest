import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ServerLink } from "../../Hooks/useServerLink";

export const fetchAllJobSeekers = createAsyncThunk("jobSeekers/fetchAllJobSeekers", async (search) => {
  const res = await axios.get(`${ServerLink}/jobSeekersCollection?search=${search}`);
  return res.data;
});

export const JobsSlice = createSlice({
  name: "jobSeekers",
  initialState: {
    isLoading: false,
    jobSeeker: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllJobSeekers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllJobSeekers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.jobSeeker = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAllJobSeekers.rejected, (state, action) => {
      state.isLoading = false;
      state.jobSeeker = [];
      state.error = action.error.message;
    });
  },
  reducers: {
    showJobs: (state) => state,
    addJobs: (state, action) => {
      state.jobSeeker.push(action.payload);
    },
    updateJobs: (state, action) => {
      const { id, title, author } = action.payload;
      const isJobExist = state.jobSeeker.filter((job) => job.id === id);
      if (isJobExist) {
        isJobExist[0].title = title;
        isJobExist[0].author = author;
      }
    },
    deleteJobs: (state, action) => {
      const id = action.payload;
      state.jobSeeker = state.jobSeeker.filter((book) => book.id !== id);
    },
  },
});

export const { showJobs, addJobs, deleteJobs, updateJobs } = JobsSlice.actions;
export default JobsSlice.reducer;
