import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ServerLink } from "../../Hooks/useServerLink";
import { toast } from 'react-hot-toast';

export const fetchAddCourse = createAsyncThunk('addCourse/fetchAddCourse', async (courseInfo) => {
    // console.log('add course: ', courseInfo);
    const res = await axios.post(`${ServerLink}/add-course`,courseInfo);
    if (res.data.acknowledged) {
        toast.success('Course added')
    }
    return res.data;
});

export const AddCourseSlice = createSlice({
    name: 'addCourse',
    initialState: {
        isLoading: false,
        addCourse: [],
        error: null
    },
    extraReducers: builder => {
        builder.addCase(fetchAddCourse.pending, state => {
            state.isLoading = true
        });

        builder.addCase(fetchAddCourse.fulfilled, (state, action) => {
            state.isLoading = false;
            state.addCourse = action.payload;
            state.error = null;
        });
        builder.addCase(fetchAddCourse.rejected, (state, action) => {
            state.isLoading = false;
            state.addCourse = [];
            state.error = action.error.message;
        });
    }
});

export default AddCourseSlice.reducer;