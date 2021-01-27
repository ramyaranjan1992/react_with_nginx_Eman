import React, { Fragment } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PersonalDetailsForm from "./components/Forms/PersonalDetailsForm/PersonalDetailsForm";
import MandateDetailsFrom from "./components/Forms/MandateDetailsForm/MandateDetailsForm";
import BankDetailsForm from "./components/Forms/BankDetailsForm/BankDetailsForm";
import StepConnector from "@material-ui/core/StepConnector";
import PropTypes from "prop-types";
import Check from "@material-ui/icons/Check";
//Reducer --
import { useDispatch, useSelector } from "react-redux";
import OnlineEmandateFinalStep from "./OnlineEmandateFinalStep";
import { activeViewSelected } from "../../../../store/selectedView";

///////////////////////////////////////////////////////////////////////////////////////

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

///////////////////////////////////////////////////////////////////////////////////////

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Mandate Details", "Personal Details", "Bank Details"];
}

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <MandateDetailsFrom />;
//     case 1:
//       return <PersonalDetailsForm />;
//     case 2:
//       return <BankDetailsForm />;
//     default:
//       return "Unknown step";
//   }
// }

function PayoutRequest(props) {
  const activeView = useSelector(
    (state) => state.entities.selectedView.activeView
  );

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function getSteps() {
    return ["Mandate Details", "Personal Details", "Bank Details"];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <MandateDetailsFrom
            handleNext={handleNext}
            handleBack={handleBack}
            handleReset={handleReset}
            activeStep={activeStep}
            steps={steps}
          />
        );
      case 1:
        return (
          <PersonalDetailsForm
            handleNext={handleNext}
            handleBack={handleBack}
            handleReset={handleReset}
            activeStep={activeStep}
            steps={steps}
          />
        );
      case 2:
        return (
          <BankDetailsForm
            handleNext={handleNext}
            handleBack={handleBack}
            handleReset={handleReset}
            activeStep={activeStep}
            steps={steps}
          />
        );
      default:
        return "Unknown step";
    }
  }

  return (
    <div className={classes.root}>
      {activeView === "payoutRequestForm" ? (
        <Fragment>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<QontoConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
          </div>
        </Fragment>
      ) : (
        <OnlineEmandateFinalStep />
      )}
    </div>
  );
}

export default PayoutRequest;
