import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: "20px",
    borderWidth: "1px",
    padding: "30px",
  },
});

function MandateRecordCard(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={3}>
      <Grid conatiner direction="row">
        <Grid item xs={6}>
          Ayush
        </Grid>
        <Grid item xs={6}>
          Inside Card
        </Grid>
        {/* <Grid item xs={4}>
                        <span>Inside Card</span>
                    </Grid> */}
      </Grid>
    </Paper>
  );
}

export default MandateRecordCard;
