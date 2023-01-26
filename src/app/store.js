import { configureStore } from "@reduxjs/toolkit";
import AllJobsSlice from "../features/AllJobs/AllJobsSlice";
import ApplyJobSlice from "../features/ApplyJob/ApplyJobSlice";
import SearchOptionSlice from "../features/Search/SearchOptionSlice";

const store = configureStore({
  reducer: {
    jobsReducer: AllJobsSlice,
    applicationReducer: ApplyJobSlice,
    searchReducer: SearchOptionSlice,
  },
});

export default store;
