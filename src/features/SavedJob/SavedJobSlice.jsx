import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ServerLink } from "../../Hooks/useServerLink";

export const fetchSavedJob = createAsyncThunk("jobs/fetchAllJobs", async () => {
  const res = await axios.get(`${ServerLink}/saved-job`);
  return res.data;
});

export const SavedJobSlice = createSlice({
  name: "jobs",
  initialState: {
    isLoading: false,
    savedJobs: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSavedJob.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSavedJob.fulfilled, (state, action) => {
      state.isLoading = false;
      state.savedJobs = action.payload;
      state.error = null;
    });
    builder.addCase(fetchSavedJob.rejected, (state, action) => {
      state.isLoading = false;
      state.savedJobs = [];
      state.error = action.error.message;
    });
  },
  reducers: {
    showJobs: (state) => state,
    addJobs: (state, action) => {
      state.savedJobs.push(action.payload);
    },
    updateJobs: (state, action) => {
      const { id, title, author } = action.payload;
      const isJobExist = state.savedJobs.filter((job) => job.id === id);
      if (isJobExist) {
        isJobExist[0].title = title;
        isJobExist[0].author = author;
      }
    },
    deleteJobs: (state, action) => {
      const id = action.payload;
      state.savedJobs = state.savedJobs.filter((book) => book.id !== id);
    },
  },
});

export const { showJobs, addJobs, deleteJobs, updateJobs } = SavedJobSlice.actions;
export default SavedJobSlice.reducer;
