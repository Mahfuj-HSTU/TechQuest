import { configureStore } from "@reduxjs/toolkit";
import AllJobsSlice from "../features/AllJobs/AllJobsSlice";
import RemoveJobSlice from "../features/AllJobs/RemoveJobSlice";
import ApplyJobSlice from "../features/ApplyJob/ApplyJobSlice";
import SearchOptionSlice from "../features/Search/SearchOptionSlice";
import useRoleSlice from "../Hooks/Role/useRoleSlice";
import AddCourseSlice from "../Pages/Courses/AddCourseSlice";
import RemoveCourseSlice from "../Pages/Courses/RemoveCourse/RemoveCourseSlice";

const store = configureStore({
  reducer: {
    jobsReducer: AllJobsSlice,
    applicationReducer: ApplyJobSlice,
    searchReducer: SearchOptionSlice,
    roleReducer: useRoleSlice,
    removeJobReducer: RemoveJobSlice,
    removeCourseReducer: RemoveCourseSlice,
    addCourseReducer: AddCourseSlice
  },
});

export default store;
