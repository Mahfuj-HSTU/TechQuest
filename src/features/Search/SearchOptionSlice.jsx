import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ServerLink } from "../../hooks/useServerLink";

export const fetchSearch = createAsyncThunk(
  "searchData/fetchSearch",
  async (searchData) => {
    const res = await axios.get(`${ServerLink}/search/${searchData.title}`);
    return res.data;
  }
);

export const SearchOptionSlice = createSlice({
  name: "search",
  initialState: {
    isLoading: false,
    searchData: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.searchData = action.payload;
      state.error = null;
    });
    builder.addCase(fetchSearch.rejected, (state, action) => {
      state.isLoading = false;
      state.searchData = [];
      state.error = action.error.message;
    });
  },
});

export default SearchOptionSlice.reducer;
