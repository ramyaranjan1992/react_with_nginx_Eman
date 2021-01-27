import React, { Fragment } from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

//Redux Actions
import { useDispatch, useSelector } from "react-redux";

import eMandateLogo from "../../../../../assets/images/e-mandate-smalllogo.png";
import { processMandatePayoutRequest } from "../../../../../store/onlineEmandate";

const useStyles = makeStyles((theme) => ({
  mandate_auth_box__authMode: {
    display: "flex",
    padding: "15px",

    flexDirection: "column",
  },
  mandateAuth_title: {
    padding: "12px 16px 12px 16px",
    backgroundColor: "#F6F7F9",
  },

  spacedBetweenElements: {
    display: "flex",
    justifyContent: "space-between",
    margin: "15px 20px 20px 20px",
  },
}));

export default function MandateAuthorization() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [authMode, setAuthMode] = React.useState("Internet Banking");
  const [consentChecked, setConsentChecked] = React.useState(true);

  const handleChangeAuthMode = (event) => {
    setAuthMode(event.target.value);
  };
  const handleChangeConsentChecked = (event) => {
    setConsentChecked(!consentChecked);
  };

  let formdata = useSelector((state) => state.entities.onlineEmandate.forms);

  const onProceed = () => {
    let request = {
      clientCode: "random",
      clientRegistrationId: "random",
      consumerReferenceNumber: formdata.consumerRefNumber,
      mandatePurpose: formdata.mandatePurpose,
      payerUtilitityCode: formdata.mandatePurpose,

      payerName: formdata.userName,

      mandateEndDate: formdata.endDate.toISOString().substring(0, 10),
      mandateMaxAmount: formdata.ecsAmount,
      mandateType: formdata.mandateVariant,
      mandateStartDate: formdata.startDate.toISOString().substring(0, 10),

      panNo: formdata.panNo,

      mandateCategory: formdata.mandatePurpose,

      payerAccountNumber: formdata.accountNumber,
      payerAccountType: formdata.accountType,
      payerBank: formdata.bankName,

      payerEmail: formdata.userEmail,
      payerMobile: formdata.mobileNumber,
      payerBankIfscCode: formdata.ifscCode,

      authenticationMode: formdata.authMode,
      frequency: formdata.frequency,
      requestType: formdata.requestType,
      npciPaymentBankCode: formdata.bankName,
      schemeReferenceNumber: formdata.schemaRefNunber,
      untilCancelled: "true",
      uersType: formdata.applicantType,
    };

    dispatch(processMandatePayoutRequest());
    console.log(request);
  };

  return (
    <Fragment>
      <Typography variant="body1" className={classes.mandateAuth_title}>
        Mandate Authorisation
      </Typography>
      <div className={classes.mandate_auth_box__authMode}>
        <FormControl component="fieldset">
          <FormLabel component="div">Authentication mode</FormLabel>
          <RadioGroup
            row
            aria-label="authMode"
            name="authMode"
            value={authMode}
            onChange={handleChangeAuthMode}
          >
            <FormControlLabel
              value="Internet Banking"
              control={<Radio />}
              label="Internet Banking"
            />
            <FormControlLabel
              value="Debit Card"
              control={<Radio />}
              label="Debit Card"
            />
          </RadioGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={consentChecked}
                onChange={handleChangeConsentChecked}
                name="checkedB"
                color="primary"
              />
            }
            labelPlacement="end"
            label="1. I confirm that the contents have been carefully read, understood and correct in all respects. 2. I agree for the debit of mandate processing chareges by the bank as per the latest schedule of chareges of the bank. 3. I am authorizing the user entity to debit my account based on the instructions as agreed. 4. I am authorized to cancel/amend this mendate communicating the request to the user entity/corporate or the bank where I have authorized the debit."
          />

          <div className={classes.spacedBetweenElements}>
            <Button variant="contained" size="small" color="secondary">
              Cancel
            </Button>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={onProceed}
            >
              Proceed
            </Button>
          </div>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{ textDecoration: "underline", marginTop: "20px" }}
          >
            Disclaimer
          </Typography>
          <Typography variant="body2" gutterBottom>
            I further agree that SabPaisa Pvt. Ltd. is only a Third Party
            Technology Service Provider and does not have any liability towards
            the transaction mandate or any subsequent action which arises. Any
            disput/differences or issues to the solely between the user entity
            Corporate or the bank and me.
          </Typography>
          <img
            alt="E-Mandate Logo"
            src={eMandateLogo}
            height="40px"
            width="180px"
          />
        </FormControl>
      </div>
    </Fragment>
  );
}
