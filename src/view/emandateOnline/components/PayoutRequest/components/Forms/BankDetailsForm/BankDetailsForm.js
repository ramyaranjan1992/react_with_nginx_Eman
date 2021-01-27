import React,{useEffect} from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../../../../../helper/Formik/FormControl/FormControl";
import Grid from "@material-ui/core/Grid";
import FormButtons from "../FormButtons/FormButtons";

//Redux Actions
import { useDispatch, useSelector } from "react-redux";
import { activeViewSelected } from "../../../../../../../store/selectedView";

//utilites--
import {formBankDropdownTransform} from '../../../../../../../utilities/formDropdownTransform'

//Reducers---
import {fetchBankNameDropdown, bankDetailsFormSubmitted} from '../../../../../../../store/onlineEmandate'


function BankDetailsForm(props) {
  const dispatch = useDispatch();
  const dropdownFieldsData=useSelector((state)=>state.entities.onlineEmandate.dropdownFieldsData)
  useEffect(() => {
    dispatch(fetchBankNameDropdown())
    return () => {
      
    }
  }, [])
  const activeView = useSelector(
    (state) => state.entities.selectedView.activeView
  );

  const bankNameOptions =formBankDropdownTransform(dropdownFieldsData.bankNameDropDownList,"Select Bank Name")
  // const bankNameOptions = [
  //   { key: "", value: "Select Bank Name" },
  //   { key: "1", value: "ICICI Bank" },
  //   { key: "2", value: "SBI Bank" },
  //   { key: "3", value: "IDBI Bank" },
  // ];

  const authModeOptions = [
    { key: "0", value: {code:"Netbanking/Debitcard",description:"Netbanking/Debitcard"} },
    { key: "1", value:  {code:"Netbanking",description:"Netbanking"} },
    { key: "2", value: {code:"Debitcard",description:"Debitcard"} },
  ];

  const accountTypeOptions = [
    { key: "", value:{code:"Select Bank Account Type", description:"Select Bank Account Type"} },
    { key: "1", value:{code:"Saving", description:"Saving"}  },
    { key: "2",value:{code:"Current", description:"Current"} },
  ];

  const initialValues = {
    bankName: "",
    accountNumber: null,
    accountType: "",
    ifscCode:'',
    authMode:''
  };

  const validationSchema = Yup.object({
    bankName: Yup.string(),
    accountNumber: Yup.number().required("Required!").nullable(),
    accountType: Yup.string().required("Required!"),
    ifscCode:Yup.string(),
    authMode:Yup.string()
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
    props.handleNext();
    dispatch(bankDetailsFormSubmitted({...values}))

    dispatch(
      activeViewSelected({ activeViewSelected: "onlineEmandateFinalStep" })
    );
    // console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };

  return (
    <div>
      <h5>Bank Details Form</h5>
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
                  control="select"
                  label="Authentication Mode"
                  name="authMode"
                  options={authModeOptions}
                />
              </Grid>
            <Grid item md={6} xs={12}>
                <FormikControl
                  control="select"
                  label="Bank Name"
                  name="bankName"
                  options={bankNameOptions}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormikControl
                  control="input"
                  label="IFSC Code"
                  name="ifscCode"
                  type="text"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormikControl
                  control="input"
                  label="Account number"
                  name="accountNumber"
                  type="number"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormikControl
                  control="select"
                  label="Account type"
                  name="accountType"
                  options={accountTypeOptions}
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

export default BankDetailsForm;
