import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import config from "../config";

const emandateList={
    //filter List
    fromDate:"2021-01-01",
    toDate:"2021-01-31",
    mandateList:[]
}

export const fetchEmandateList = createAsyncThunk(
    "emandateFilterList/fetchEmandateList",
    async () => {
    const response = await Axios.post(
        `${config.proxy}https://subscription.sabpaisa.in/subscriptionAPI/npci/filterRegistration`,
        {
            "fromDate": emandateList.fromDate,
            "toDate": emandateList.toDate
        }
    );
    return response.data;
    }
);

const emandateListSlice = createSlice({
    name: "emandateList",
    initialState: emandateList,
    reducers: {
      allFormSubmitted: (onlineEmandate, action) => {
        // onlineEmandate.forms = action.payload.formDetails;
      }
    },
    extraReducers: {
    [fetchEmandateList.pending]: (state, action) => {
        state.status = "pending";
    },
    [fetchEmandateList.fulfilled]: (state, action) => {
        state.mandateList = action.payload;
    },
    [fetchEmandateList.rejected]: (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
    },
    }
    })



  // Exporting onlineEmandate actions
    export const {
    allFormSubmitted,
  } = emandateListSlice.actions;
  
  // Exporting slice reducer
  export default emandateListSlice.reducer;