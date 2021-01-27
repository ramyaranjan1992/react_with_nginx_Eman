import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import config from "../config";

const auth = {
  currentUser: {},
  status: "",
  error: "",
};

export const userLoggedIn = createAsyncThunk(
  "auth/userLoggedIn",
  async (requestParam) => {
    const response = await Axios.post(
      `${config.proxy}https://subscription.sabpaisa.in/subscriptionAPI/REST/checkLogin`,
      requestParam
    );
    return response.data;
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: auth,
  reducers: {},
  extraReducers: {
    [userLoggedIn.pending]: (state, action) => {
      state.status = "pending";
    },
    [userLoggedIn.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [userLoggedIn.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});
