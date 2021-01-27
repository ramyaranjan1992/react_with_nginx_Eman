import { Paper } from "@material-ui/core";
import React from "react";
import OnlineEmandateSummary from "./components/OnlineEmandateSummary";

import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import MandateAuthorization from "./components/MandateAuthorization";

const useStyles = makeStyles((theme) => ({
  summary_and_madate_auth_box: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    [theme.breakpoints.down("960")]: {
      alignItems: "stretch",
      flexDirection: "column",
    },
  },
  summary_box: {
    flex: 0.48,
  },
  mandate_auth_box: {
    flex: 0.48,
  },
}));
export default function OnlineEmandateFinalStep() {
  const onlineEmandateFormsData = useSelector(
    (state) => state.entities.onlineEmandate.forms
  );
  const dispatch = useDispatch();
  // console.log(selectedView);
  const classes = useStyles();
  return (
    <div className={classes.summary_and_madate_auth_box}>
      <Paper variant="outlined" className={classes.summary_box}>
        <OnlineEmandateSummary
          summary_header="E-Mandate Summary"
          summary_details_field={onlineEmandateFormsData.summaryDetailsFields}
          byDefaultOpen={true}
        />
        {console.log(onlineEmandateFormsData)}
        <OnlineEmandateSummary
          summary_header="Mandate Summary"
          summary_details_field={onlineEmandateFormsData.mandateDetailsFields}
          byDefaultOpen={false}
        />
        <OnlineEmandateSummary
          summary_header="Personal Details"
          summary_details_field={onlineEmandateFormsData.personalDetailsFields}
          byDefaultOpen={false}
        />
        <OnlineEmandateSummary
          summary_header="Bank Details"
          summary_details_field={onlineEmandateFormsData.bankDetailsFields}
          byDefaultOpen={false}
        />
      </Paper>

      <Paper variant="outlined" className={classes.mandate_auth_box}>
        <MandateAuthorization />
      </Paper>
    </div>
  );
}
