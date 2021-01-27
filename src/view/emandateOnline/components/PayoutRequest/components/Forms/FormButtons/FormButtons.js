import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  button: {
      marginRight: theme.spacing(1),
    },
}))

function FormButtons(props) {
    const classes = useStyles();
    return (
        <div>
            <Button
                disabled={props.activeStep === 0}
                onClick={props.handleBack}
                className={classes.button}
            >
                Back
            </Button>
            <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.button}
            >
                {props.activeStep === props.steps.length - 1 ? "Finish" : "Next"}
            </Button>
        </div>
    );
}

export default FormButtons;