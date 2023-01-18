import { configureStore } from "@reduxjs/toolkit";
import AllJobsSlice from "../features/AllJobs/AllJobsSlice";

const store = configureStore({
  reducer: {
    jobsReducer: AllJobsSlice,
  },
});

export default store;
