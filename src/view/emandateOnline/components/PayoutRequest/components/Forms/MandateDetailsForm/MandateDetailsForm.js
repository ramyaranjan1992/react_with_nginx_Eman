import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikControl from "../../../../../../../helper/Formik/FormControl/FormControl";
import Grid from "@material-ui/core/Grid";
import FormButtons from "../FormButtons/FormButtons";

import { useDispatch, useSelector } from "react-redux";

//utilites--
import { formDropdownTransform } from "../../../../../../../utilities/formDropdownTransform";

//Reducers---
import {
  fetchGetFrequencyDropdown,
  fetchMandateTypeDropdown,
  fetchMandatePurposeDropdown,
  fetchRequestTypeDropdown,
  mandateDetailsFormSubmitted,
} from "../../../../../../../store/onlineEmandate";

function MandateDetailsForm(props) {
  const dispatch = useDispatch();
  const dropdownFieldsData = useSelector(
    (state) => state.entities.onlineEmandate.dropdownFieldsData
  );
  useEffect(() => {
    dispatch(fetchGetFrequencyDropdown());
    dispatch(fetchMandateTypeDropdown());
    dispatch(fetchMandatePurposeDropdown());
    dispatch(fetchRequestTypeDropdown());
    // dispatch(fetchMandateCategoryDropdown())
    return () => {};
  }, []);

  const frequencyOptions = formDropdownTransform(
    dropdownFieldsData.frequencyDropDownList,
    "Monthly/Quaterly/Half yearly"
  );
  const mandateVariantOptions = formDropdownTransform(
    dropdownFieldsData.mandateVariantDropDownList,
    "Online/Physical/Aadhar"
  );
  const mandatePurposeOptions = formDropdownTransform(
    dropdownFieldsData.mandatePurposeDropDownList,
    "As per NPCI category"
  );
  const requestTypeOptions = formDropdownTransform(
    dropdownFieldsData.requestTypeDropDownList,
    "Select Request Type"
  );

  const fixedmaxAmountOptions = [
    { key: "0", value: { code: "NA", description: "Fixed/Maximum Amount" } },
    { key: "1", value: { code: "Fixed", description: "Fixed" } },
    {
      key: "2",
      value: { code: "Maximum Amount", description: "Maximum Amount" },
    },
  ];

  // const mandatePurposeOptions = [
  //   { key: "0", value: "As per NPCI category" },
  //   { key: "1", value: "API Mandate" },
  // ];

  const applicantTypeOptions = [
    // { key: "Select an Option", value: "" },
    { key: "Applicant", value: "applicant" },
    { key: "Initiator (Corporate)", value: "initiator" },
  ];

  const initialValues = {
    clientCode: "XYZ",
    clientRegistrationId: Math.ceil(Math.random() * 10000000000),
    applicantType: "applicant",
    mandateVariant: "",
    mandatePurpose: "",
    mandateMaxAmount: null,
    frequency: "",
    fixedmaxAmount: "",
    consumerRefNumber: "",
    schemaRefNunber: "",
    startDate: null,
    endDate: null,
    requestType: "",
  };

  const validationSchema = Yup.object({
    applicantType: Yup.string(),
    mandateVariant: Yup.string().test(
      "mandateVariant",
      "Please select at one",
      function (value) {
        if (value === "Online/Physical/Aadhar") {
          return false;
        }
        return true;
      }
    ),
    mandatePurpose: Yup.string(),
    ecsAmount: Yup.number().min(0, "Select a value").nullable(),
    frequency: Yup.string(),
    fixedmaxAmount: Yup.string().test(
      "fixedmaxAmount",
      "Please select at one",
      function (value) {
        if (value === "Fixed/Maximum Amount") {
          return false;
        }
        return true;
      }
    ),
    consumerRefNumber: Yup.string().nullable(),
    schemaRefNunber: Yup.string().nullable(),
    startDate: Yup.date().nullable(),
    endDate: Yup.date().nullable(),
    requestType: Yup.string(),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);

    props.handleNext();
    dispatch(mandateDetailsFormSubmitted({ ...values }));
    // props.handleNext()
    // console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };

  return (
    <div>
      <h5>Mandate Details Form</h5>
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
                  control="radio"
                  label="I am *"
                  name="applicantType"
                  options={applicantTypeOptions}
                  // name="email"
                  // type="email"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormikControl
                  control="select"
                  label="Mandate Variant *"
                  name="mandateVariant"
                  options={mandateVariantOptions}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormikControl
                  control="select"
                  label="Mandate Purpose"
                  name="mandatePurpose"
                  options={mandatePurposeOptions}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormikControl
                  control="input"
                  label="ECS Amount *"
                  name="ecsAmount"
                  type="number"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormikControl
                  control="select"
                  label="Frequency"
                  name="frequency"
                  options={frequencyOptions}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormikControl
                  control="select"
                  label="Fixed/Maximum Amount *"
                  name="fixedmaxAmount"
                  options={fixedmaxAmountOptions}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormikControl
                  control="select"
                  label="Request Type"
                  name="requestType"
                  options={requestTypeOptions}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormikControl
                  control="input"
                  label="Consumer Referance Number"
                  name="consumerRefNumber"
                  type="text"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormikControl
                  control="input"
                  label="Scheme Referance Number"
                  name="schemaRefNunber"
                  type="text"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormikControl
                  control="date"
                  label="Start date"
                  name="startDate"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormikControl control="date" label="End date" name="endDate" />
              </Grid>
            </Grid>
            {/* <button onClick={props.handleBack}>Back</button>
            <button type="submit">Next</button> */}
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

export default MandateDetailsForm;
