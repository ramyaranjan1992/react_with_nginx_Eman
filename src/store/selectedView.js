import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

const selectedView = {
  currentView: "Payout Request",
  sideDrawerItems: ["Payout Request", "Logout"],
  activeView: "payoutRequestForm",
  randomData: {},
  status: "idle",
  error: "",
};

export const fetchRandomApi = createAsyncThunk(
  "selectedView/fetchRandomApi",
  async () => {
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  }
);

// viewSelected Slice----

const slice = createSlice({
  name: "selectedView",
  initialState: selectedView,
  reducers: {
    viewSelected: (selectedView, action) => {
      selectedView.currentView = action.payload.viewSelected;
    },
    activeViewSelected: (selectedView, action) => {
      selectedView.activeView = action.payload.activeViewSelected;
    },
  },
  extraReducers: {
    [fetchRandomApi.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchRandomApi.fulfilled]: (state, action) => {
      state.randomData = action.payload;
    },
    [fetchRandomApi.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

// Exporting viewSelected actions
export const { viewSelected, activeViewSelected } = slice.actions;

// Exporting slice reducer
export default slice.reducer;
