import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ServerLink } from "../../Hooks/useServerLink";

export const fetchAllUsers = createAsyncThunk( "users/fetchAllUsers", async () => {
    const res = await axios.get( `${ ServerLink }/users` );
    return res.data;
} );

export const UsersSlice = createSlice( {
    name: "users",
    initialState: {
        isLoading: false,
        users: [],
        isApplied: false,
        error: null,
    },
    extraReducers: ( builder ) => {
        builder.addCase( fetchAllUsers.pending, ( state ) => {
            state.isLoading = true;
        } );
        builder.addCase( fetchAllUsers.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.users = action.payload;
            state.error = null;
        } );
        builder.addCase( fetchAllUsers.rejected, ( state, action ) => {
            state.isLoading = false;
            state.users = [];
            state.error = action.error.message;
        } );
    },
    reducers: {
        AllUsers: ( state ) => state,
    },
} );

export const { AllUsers } = UsersSlice.actions;
export default UsersSlice.reducer;
