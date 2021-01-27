import React from 'react';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../Formik/FormControl/FormControl";
import Grid from '@material-ui/core/Grid';

function PersonalDetailsForm(props) {

    const dropdownOptions = [
    { key: "Select an Option", value: "" },
    { key: "Option 1", value: "option 1" },
    { key: "Option 2", value: "option 2" },
    { key: "Option 3", value: "option 3" }
    ];

    const mandateVariantOptions = [
        { key: "0", value: "Monthly/Quaterly/Half yearly" },
        { key: "1", value: "Monthly" },
        { key: "2", value: "Quaterly" },
        { key: "3", value: "Half yearly" }
        ];

    const frequencyOptions = [
        { key: "0", value: "Monthly/Quaterly/Half yearly" },
        { key: "1", value: "Monthly" },
        { key: "2", value: "Quaterly" },
        { key: "3", value: "Half yearly" }
        ];

    const fixedmaxAmountOptions = [
        { key: "0", value: "Fixed/Maximum Amount" },
        { key: "1", value: "One" },
        { key: "2", value: "Two" },
        { key: "3", value: "Three" }
        ];

    const mandatePurposeOptions = [
        { key: "0", value: "As per NPCI category" },
        { key: "1", value: "One" },
        { key: "2", value: "Two" },
        { key: "3", value: "Three" }
        ];

    const applicantTypeOptions = [
        // { key: "Select an Option", value: "" },
        { key: "Applicant", value: "applicant" },
        { key: "Initiator (Corporate)", value: "initiator" },
        ];

    const initialValues = {
        name: {
            prefix:'',
            maidenName:''
        },
        email: "",
        mobileNumber: {
            code:null,
            number:null
        },
        altMobileNumber: {
            code:null,
            number:null
        },
        additionalDetails: ""
      };

    const validationSchema = Yup.object({
    applicantType: Yup.string().required("Required!"),
    mandateVariant: Yup.string().required("Required!"),
    mandatePurpose: Yup.string(),
    ecsAmount: Yup.number(),
    frequency: Yup.string(),
    fixedmaxAmount:Yup.string().required("Required!"),
    consumerRefNunber:Yup.string().nullable(),
    schemaRefNunber:Yup.string().nullable(),
    startDate: Yup.date().required("Required!").nullable(),
    endDate:Yup.date().required("Required!").nullable()
    });


    const onSubmit = (values) => {
        console.log("Form data", values);
        console.log("Saved data", JSON.parse(JSON.stringify(values)));
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
                        <Grid container >
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
                                    control="input"
                                    label="Consumer Referance Number"
                                    name="consumerRefNunber"
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
                                    name="birthDate"
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <FormikControl
                                    control="date"
                                    label="End date"
                                    name="birthDate"
                                />
                            </Grid>
                                {/* <Grid item md={6} xs={12}>
                                    <FormikControl
                                        control="radio"
                                        label="Selct a Radio Option"
                                        name="selectRadioOption"
                                        options={radioOptions}
                                    />
                                </Grid> */}
                        </Grid>
                    {/* <button type="submit">Submit</button> */}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default PersonalDetailsForm;