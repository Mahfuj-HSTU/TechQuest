import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ServerLink } from '../../Hooks/useServerLink';

export const fetchRole = createAsyncThunk('role/fetchRole', async (email) => {
	const res = await axios.get(`${ServerLink}/users/${email}`);
	// console.log(res);
	return res.data;
});

export const useRoleSlice = createSlice({
	name: 'role',
	initialState: {
		isLoading: false,
		role: '',
		error: null,
	},
	extraReducers: (builder) => {
		builder.addCase(fetchRole.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchRole.fulfilled, (state, action) => {
			state.isLoading = false;
			state.role = action.payload;
			//   console.log(state.role);
			state.error = null;
		});
		builder.addCase(fetchRole.rejected, (state, action) => {
			state.isLoading = false;
			state.role = [];
			state.error = action.error.message;
		});
	},
});

export default useRoleSlice.reducer;
