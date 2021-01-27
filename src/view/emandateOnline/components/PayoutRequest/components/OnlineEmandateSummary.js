import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Grid } from "@material-ui/core";

// to access global state----
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    // backgroundColor: theme.palette.background.paper
  },
  listHeader: {
    backgroundColor: "#f6f7f9",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  summary_list: {},
}));

export default function OnlineEmandateSummary(props) {
  const classes = useStyles();
  const onlineEmandateStateObject = useSelector(
    (state) => state.entities.onlineEmandate.forms
  );
  const mappingWithFormikStates = useSelector(
    (state) => state.entities.onlineEmandate.forms.mappingWithFormikStates
  );
  const [open, setOpen] = React.useState(props.byDefaultOpen);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.summary_list}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            {/* Nested List Items */}
          </ListSubheader>
        }
        className={classes.root}
      >
        <ListItem button onClick={handleClick} className={classes.listHeader}>
          <ListItemText primary={props.summary_header} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                item={true}
              >
                {console.log(props.summary_details_field)}
                {props.summary_details_field.map((fieldName) => (
                  <Grid item xs={12} sm={4}>
                    <ListItemText
                      primary={mappingWithFormikStates[fieldName]}
                      secondary={
                        onlineEmandateStateObject[fieldName] instanceof Date
                          ? onlineEmandateStateObject[fieldName].toDateString()
                          : onlineEmandateStateObject[fieldName]
                      }
                    />
                  </Grid>
                ))}
              </Grid>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
}
