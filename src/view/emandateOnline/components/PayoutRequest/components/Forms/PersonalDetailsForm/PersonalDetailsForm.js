import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../../../../../helper/Formik/FormControl/FormControl";
import Grid from "@material-ui/core/Grid";
import FormButtons from "../FormButtons/FormButtons";

//Redux Actions
import { useDispatch, useSelector } from "react-redux";
import { activeViewSelected } from "../../../../../../../store/selectedView";

//Reducers---
import { personalDetailsFormSubmitted } from "../../../../../../../store/onlineEmandate";

function PersonalDetailsForm(props) {
  const dispatch = useDispatch();
  const prefixOptions = [
    { key: "0", value: "Mr." },
    { key: "1", value: "Mrs." },
    { key: "2", value: "Miss" },
  ];

  const initialValues = {
    userName: {
      prefix: "Mr.",
      maidenName: "",
    },
    panNumber: "",
    userEmail: "",
    mobileNumber: {
      countryCode: null,
      number: null,
    },
    altMobileNumber: {
      countryCode: null,
      number: null,
    },
    additionalDetail: "",
  };

  const validationSchema = Yup.object({
    userName: Yup.object().shape({
      maidenName: Yup.string(),
    }),
    userEmail: Yup.string().email("Please enter a valid email!"),
    mobileNumber: Yup.object().shape({
      countryCode: Yup.number().nullable(),
      number: Yup.number().nullable(),
    }),
    altMobileNumber: Yup.object().shape({
      countryCode: Yup.number().nullable(),
      number: Yup.number().nullable(),
    }),
    panNumber: Yup.string(),
    additionalDetail: Yup.string().email("Please enter a valid email!"),
  });

  const onSubmit = (values) => {
    let formattedValues = {
      userName: `${values.userName.prefix}${values.userName.maidenName}`,
      userEmail: values.userEmail,
      mobileNumber: `${values.mobileNumber.countryCode}${values.mobileNumber.number}`,
      altMobileNumber: `${values.altMobileNumber.countryCode}${values.altMobileNumber.number}`,
      additionalDetail: values.additionalDetail,
      panNunber: values.panNumber,
    };
    console.log("Form data", formattedValues);
    props.handleNext();
    // console.log("Saved data", JSON.parse(JSON.stringify(values)));
    dispatch(personalDetailsFormSubmitted({ ...formattedValues }));
  };

  return (
    <div>
      <h5>Personal Details Form</h5>
      {/* <hr /> */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <Grid container>
              <Grid item md={6} xs={12}>
                <FormikControl
                  control="input-select"
                  label="Name"
                  name="userName"
                  name1="userName.prefix"
                  name2="userName.maidenName"
                  options={prefixOptions}
                  type="text"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormikControl
                  control="input"
                  label="Email"
                  name="userEmail"
                  type="email"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormikControl
                  control="input-input"
                  label="Mobile Number"
                  name="mobileNumber"
                  name1="mobileNumber.countryCode"
                  name2="mobileNumber.number"
                  type="number"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormikControl
                  control="input"
                  label="PAN Number"
                  name="panNumber"
                  type="text"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormikControl
                  control="input-input"
                  label="Alternet Mobile Numberr"
                  name="altMobileNumber"
                  name1="altMobileNumber.countryCode"
                  name2="altMobileNumber.number"
                  type="number"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormikControl
                  control="input"
                  label="Additional Identification Details"
                  name="additionalDetail"
                  type="email"
                />
              </Grid>
            </Grid>
            {/* <button type="submit">Submit</button> */}
            <FormButtons
              activeStep={props.activeStep}
              handleBack={props.handleBack}
              steps={props.steps}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PersonalDetailsForm;
