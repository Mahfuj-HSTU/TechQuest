import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ServerLink } from "../../Hooks/useServerLink";

export const fetchAllPayment = createAsyncThunk( "payment/fetchAllPayment", async () => {
    const res = await axios.get( `${ ServerLink }/all-payment` );
    return res.data;
} );

export const AllPaymentSlice = createSlice( {

    name: "payment",
    initialState: {
        isLoading: false,
        payments: [],
        error: null,
    },
    extraReducers: ( builder ) => {
        builder.addCase( fetchAllPayment.pending, ( state ) => {
            state.isLoading = true;
        } );
        builder.addCase( fetchAllPayment.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.payments = action.payload;
            state.error = null;
        } );
        builder.addCase( fetchAllPayment.rejected, ( state, action ) => {
            state.isLoading = false;
            state.payments = [];
            state.error = action.error.message;
        } );
    },
    reducers: {
        AllPayment: ( state ) => state,
    },
} );

export const { AllPayment } = AllPaymentSlice.actions;
export default AllPaymentSlice.reducer;
