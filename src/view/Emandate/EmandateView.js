import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import MandateTab from "./Mandate/MandateTab";
import DebitTransactionTab from "./DebitTransaction/DebitTransactionTab";
import FundTransferTab from "./FundTransfer/FundTransferTab";
import TabviewWrapper from './hoc/TabviewWrapper/TabviewWrapper'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#22A751",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#234032",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(0),
  },

  emandate__tabs: {},
}));

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.emandate__tabs}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled"
          variant="scrollable"
          scrollButtons="off"
        >
          <StyledTab label="Mandates" />
          <StyledTab label="Debit Sheet Report" />
          <StyledTab label="Fund Transfer Report" />
        </StyledTabs>
        <TabPanel value={value} index={0}>
          <TabviewWrapper>
            <MandateTab />
          </TabviewWrapper>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TabviewWrapper>
            <DebitTransactionTab />
          </TabviewWrapper>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TabviewWrapper>
            <FundTransferTab />
          </TabviewWrapper>
        </TabPanel>
        <Typography className={classes.padding} />
      </div>
    </div>
  );
}
