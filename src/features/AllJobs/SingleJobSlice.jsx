import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ServerLink } from "../../Hooks/useServerLink";

export const fetchSingleJob = createAsyncThunk(
  "singleJob/fetchSingleJob",
  async ({id}) => {
    const res = await axios.get(`${ServerLink}/job-details/${id}`);
    return res.data;
  }
);

export const SingleJobSlice = createSlice({
    name: 'jobDetails',
    initialState:{
        isLoading : false,
        jobDetails: {},
        error: null
    },
    extraReducers: builder => {
        builder.addCase(fetchSingleJob.pending, state =>{
            state.isLoading = true;
        });
        builder.addCase(fetchSingleJob.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.jobDetails = action.payload;
            state.error = null;
        });
        builder.addCase(fetchSingleJob.rejected, (state, action) =>{
            state.isLoading = false;
            state.jobDetails = {};
            state.error = action.error.message;
        })
    }
});

export default SingleJobSlice.reducer;