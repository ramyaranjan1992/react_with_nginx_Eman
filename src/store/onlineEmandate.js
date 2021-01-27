import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import config from "../config";

const onlineEmandate = {
  forms: {
    //mandate Details
    applicantType: "",
    mandateVariant: "",
    mandatePurpose: "",
    ecsAmount: "",
    frequency: "",
    fixedmaxAmount: "",
    consumerRefNumber: "",
    schemaRefNunber: "",
    startDate: null,
    endDate: null,
    requestType: "",
    mappingWithFormikStates: {
      //mandate details
      applicantType: "I am",
      mandateVariant: "Mandate Variant",
      mandatePurpose: "Mandate Purpose",
      ecsAmount: "ECS Amount",
      frequency: "Frequency",
      fixedmaxAmount: "Fixed/Maximum Amount",
      consumerRefNumber: "Consumer Reference Number",
      schemaRefNunber: "Scheme Reference Number",
      startDate: "Start date",
      endDate: "End date",
      requestType: "Request Type",
      //Personal Details
      userName: "Name",
      userEmail: "Email",
      mobileNumber: "Moblie Number",
      altMobileNumber: "Alt Moblie Number",
      additionalDetail: "Additional Details",
      panNumber: "PAN Number",

      //Bank Details
      bankName: "Bank Name",
      accountNumber: "Account Number",
      accountType: "Account Type",
      ifscCode: "IFSC Code",
      authMode: "Authentication Mode",
    },
    mandateDetailsFields: [
      "applicantType",
      "mandateVariant",
      "mandatePurpose",
      "ecsAmount",
      "frequency",
      "fixedmaxAmount",
      "consumerRefNumber",
      "schemaRefNunber",
      "startDate",
      "endDate",
      "requestType",
    ],

    //personal Details
    userName: "",
    userEmail: "",
    mobileNumber: "",
    panNumber: "",
    personalDetailsFields: [
      "userName",
      "userEmail",
      "mobileNumber",
      "altMobileNumber",
      "additionalDetail",
      "panNumber",
    ],

    // bank details
    bankName: "",
    accountNumber: "",
    accountType: "",
    ifscCode: "",
    authMode: "",
    bankDetailsFields: [
      "bankName",
      "accountNumber",
      "accountType",
      "ifscCode",
      "authMode",
    ],

    summaryDetailsFields: ["mandateVariant", "userName", "bankName"],

    //Mandate Authorization step
    authenticationMode: "",

    consentConfirmed: false,
  },

  dropdownFieldsData: {
    frequencyDropDownList: [],
    mandateVariantDropDownList: [],
    mandatePurposeDropDownList: [],
    requestTypeDropDownList: [],
    // mandateCategoryDropDownList:[]
    bankNameDropDownList: [],
  },
  status: "idle",
  error: "",
};

export const fetchRandomApi = createAsyncThunk(
  "onlineEmandate/fetchFormDropdownsData",
  async () => {
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  }
);

export const fetchGetFrequencyDropdown = createAsyncThunk(
  "onlineEmandate/fetchGetFrequencyDropdown",
  async () => {
    const response = await Axios.get(
      `${config.proxy}${config.backendUrl}/GetCommonData/0/frequency`
    );
    return response.data;
  }
);

export const fetchMandateTypeDropdown = createAsyncThunk(
  "onlineEmandate/fetchMandateTypeDropdown",
  async () => {
    const response = await Axios.get(
      `${config.proxy}${config.backendUrl}/GetCommonData/0/MandateType`
    );
    return response.data;
  }
);

export const fetchMandatePurposeDropdown = createAsyncThunk(
  "onlineEmandate/fetchMandatePurposeDropdown",
  async () => {
    const response = await Axios.get(
      `${config.proxy}${config.backendUrl}/GetCommonData/0/MandateCategory`
    );
    return response.data;
  }
);

export const fetchRequestTypeDropdown = createAsyncThunk(
  "onlineEmandate/fetchRequestTypeDropdown",
  async () => {
    const response = await Axios.get(
      `${config.proxy}${config.backendUrl}/GetCommonData/0/RequestType`
    );
    return response.data;
  }
);

// export const fetchMandateCategoryDropdown = createAsyncThunk(
//   "onlineEmandate/fetchMandateTypeDropdown",
//   async () => {
//     const response = await Axios.get(
//       `${config.proxy}${config.backendUrl}/getMandateCategory`
//     );
//     return response.data;
//   }
// );

export const fetchBankNameDropdown = createAsyncThunk(
  "onlineEmandate/fetchBankNameDropdown",
  async () => {
    const response = await Axios.get(
      `${config.proxy}https://enach.npci.org.in/apiservices/getLiveBankDtls`
    );
    return response.data.liveBankList;
  }
);

// Final Step for payout request for mandate
export const processMandatePayoutRequest = createAsyncThunk(
  "onlineEmandate/processMandatePayoutRequest",
  async (requestParam) => {
    const response = await Axios.post(
      `${config.proxy}http://192.168.34.40:8081/subscription/npci/registration`,
      requestParam
    );
    return response.data;
  }
);

// viewSelected Slice----

const onlineEmandateSlice = createSlice({
  name: "onlineEmandate",
  initialState: onlineEmandate,
  reducers: {
    allFormSubmitted: (onlineEmandate, action) => {
      onlineEmandate.forms = action.payload.formDetails;
    },
    mandateDetailsFormSubmitted: (onlineEmandate, action) => {
      Object.keys(action.payload).map((key) => {
        onlineEmandate.forms[key] = action.payload[key];
      });
      // onlineEmandate.forms = { ...onlineEmandate.forms ,...action.payload };
    },
    personalDetailsFormSubmitted: (onlineEmandate, action) => {
      Object.keys(action.payload).map((key) => {
        onlineEmandate.forms[key] = action.payload[key];
      });
      // onlineEmandate.forms = { ...action.payload };
    },
    bankDetailsFormSubmitted: (onlineEmandate, action) => {
      Object.keys(action.payload).map((key) => {
        onlineEmandate.forms[key] = action.payload[key];
      });

      // onlineEmandate.forms = { ...action.payload };
    },
  },
  extraReducers: {
    [fetchRandomApi.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchRandomApi.fulfilled]: (state, action) => {
      state.dropdownFieldsData = action.payload;
    },
    [fetchRandomApi.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },

    // fetchGetFrequencyDropdown--

    [fetchGetFrequencyDropdown.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchGetFrequencyDropdown.fulfilled]: (state, action) => {
      state.dropdownFieldsData.frequencyDropDownList = action.payload;
    },
    [fetchGetFrequencyDropdown.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },

    // fetchMandateTypeDropdown--

    [fetchMandateTypeDropdown.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchMandateTypeDropdown.fulfilled]: (state, action) => {
      state.dropdownFieldsData.mandateVariantDropDownList = action.payload;
    },
    [fetchMandateTypeDropdown.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },

    // fetchMandatePurposeDropdown--

    [fetchMandatePurposeDropdown.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchMandatePurposeDropdown.fulfilled]: (state, action) => {
      state.dropdownFieldsData.mandatePurposeDropDownList = action.payload;
    },
    [fetchMandatePurposeDropdown.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },

    // fetchRequestTypeDropdown--

    [fetchRequestTypeDropdown.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchRequestTypeDropdown.fulfilled]: (state, action) => {
      state.dropdownFieldsData.requestTypeDropDownList = action.payload;
    },
    [fetchRequestTypeDropdown.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },

    // fetchMandateCategoryDropdown--

    // [fetchMandateCategoryDropdown.pending]: (state, action) => {
    //   state.status = "pending";
    // },
    // [fetchMandateCategoryDropdown.fulfilled]: (state, action) => {
    //   state.dropdownFieldsData.mandateCategoryDropDownList = action.payload;
    // },
    // [fetchMandateCategoryDropdown.rejected]: (state, action) => {
    //   state.status = "failed";
    //   state.error = action.error.message;
    // },

    // fetchBankNameDropdown--

    [fetchBankNameDropdown.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchBankNameDropdown.fulfilled]: (state, action) => {
      state.dropdownFieldsData.bankNameDropDownList = action.payload;
    },
    [fetchBankNameDropdown.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

// Exporting onlineEmandate actions
export const {
  allFormSubmitted,
  mandateDetailsFormSubmitted,
  personalDetailsFormSubmitted,
  bankDetailsFormSubmitted,
} = onlineEmandateSlice.actions;

// Exporting slice reducer
export default onlineEmandateSlice.reducer;
