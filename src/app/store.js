import { configureStore } from "@reduxjs/toolkit";
import AllJobsSlice from "../features/AllJobs/AllJobsSlice";
import ApplyJobSlice from "../features/ApplyJob/ApplyJobSlice";

const store = configureStore({
  reducer: {
    jobsReducer: AllJobsSlice,
    applicationReducer: ApplyJobSlice
  },
});

export default store;
