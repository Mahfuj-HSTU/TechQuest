import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { ServerLink } from '../../hooks/useServerLink';

// const initialApply = {
//     apply: [
//         fetch(`${ServerLink}/applications`)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 return data;
//             })
//             .catch(e => console.error('application fetching error => ', e))
//     ]
// };

export const fetchApplicationData = createAsyncThunk(
	'applications/fetchApplications',
	async () => {
		const res = await axios.get(`${ServerLink}/applications`);
		return res.data;
	}
);

export const ApplyJobSlice = createSlice({
	name: 'apply',
	initialState: {
		isLoading: false,
		applications: [],
		isApplied: false,
		error: null,
	},
	extraReducers: (builder) => {
		builder.addCase(fetchApplicationData.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchApplicationData.fulfilled, (state, action) => {
			state.isLoading = false;
			state.applications = action.payload;
			state.error = null;
		});
		builder.addCase(fetchApplicationData.rejected, (state, action) => {
			state.isLoading = false;
			state.applications = [];
			state.error = action.error.message;
		});
	},
	reducers: {
		showApply: (state) => state,
		addApply: (state, action) => {
			// console.log(action.payload);
			// state.apply.push(action.payload);

			axios
				.post(`${ServerLink}/applications`, action.payload)
				.then((data) => {
					console.log(data);
					if (data.status === 200) {
						toast.success('Application submitted');
					}
				})
				.catch((e) => console.error('application store error => ', e));
		},
	},
});

export const { showApply, addApply } = ApplyJobSlice.actions;

export default ApplyJobSlice.reducer;
