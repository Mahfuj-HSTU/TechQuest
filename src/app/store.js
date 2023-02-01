import { configureStore } from "@reduxjs/toolkit";
import AllJobsSlice from "../features/AllJobs/AllJobsSlice";
import RemoveJobSlice from "../features/AllJobs/RemoveJobSlice";
import ApplyJobSlice from "../features/ApplyJob/ApplyJobSlice";
import SearchOptionSlice from "../features/Search/SearchOptionSlice";
import useRoleSlice from "../Hooks/Role/useRoleSlice";

const store = configureStore({
  reducer: {
    jobsReducer: AllJobsSlice,
    applicationReducer: ApplyJobSlice,
    searchReducer: SearchOptionSlice,
    roleReducer: useRoleSlice,
    removeJobReducer: RemoveJobSlice
  },
});

export default store;
