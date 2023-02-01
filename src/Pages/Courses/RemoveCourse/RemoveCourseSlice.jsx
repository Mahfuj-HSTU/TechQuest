import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";
import { ServerLink } from "../../../Hooks/useServerLink";

export const deleteCourse = createAsyncThunk("courses/removeCourse", async (id) => {
  const res = await axios.delete(`${ServerLink}/delete-course/${id}`);
  if(res.data.acknowledged){
    toast.success("Course deleted");
  }
  return res.data;
});

// console.log(deleteJob());
export const RemoveCourseSlice = createSlice({
  name: "removeCourse",
  initialState: {
    isLoading: false,
    deleteCount: 0,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(deleteCourse.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteCourse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.deleteCount = action.payload;
      state.error = null;
    });
    builder.addCase(deleteCourse.rejected, (state, action) => {
      state.isLoading = false;
      state.deleteCount = 0;
      state.error = action.error.message;
    });
  },
});

export default RemoveCourseSlice.reducer;
