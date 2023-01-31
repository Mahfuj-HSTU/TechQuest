import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ServerLink } from "../../Hooks/useServerLink";

export const deleteJob = createAsyncThunk("jobs/removeJob", async (id) => {
  const res = await axios.delete(`${ServerLink}/delete-job/${id}`);
  return res.data;
});

console.log(deleteJob());
export const JobsSlice = createSlice({
  name: "jobs",
  initialState: {
    isLoading: false,
    deleteCount: 0,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(deleteJob.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteJob.fulfilled, (state, action) => {
      state.isLoading = false;
      state.deleteCount = action.payload;
      state.error = null;
      console.log("state.jobs: ",state.deleteCount);
      console.log("state.jobs: ",state.deleteCount.deletedCount);
    });
    builder.addCase(deleteJob.rejected, (state, action) => {
      state.isLoading = false;
      state.deleteCount = 0;
      state.error = action.error.message;
    });
  },
});

export default JobsSlice.reducer;
