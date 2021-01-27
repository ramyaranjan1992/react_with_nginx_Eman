import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

//Components form material ui--

import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@material-ui/core";

import PaymentIcon from "@material-ui/icons/Payment";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useDispatch, useSelector } from "react-redux";

import { viewSelected } from "../../../store/selectedView";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerContainer: {
    overflow: "auto",
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const SideDrawerForLargeScreen = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const sideDrawerItems = useSelector(
    (state) => state.entities.selectedView.sideDrawerItems
  );
  const currentView = useSelector(
    (state) => state.entities.selectedView.currentView
  );

  const handleListItemClick = (event, sideDrawerItemName) => {
    dispatch(viewSelected({ viewSelected: sideDrawerItemName }));
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {sideDrawerItems.map((sideDrawerItemName, index) => (
            <Fragment>
              <ListItem
                button
                key={`SidedrawerItem-${index}`}
                selected={currentView === sideDrawerItemName}
                onClick={(event) =>
                  handleListItemClick(event, sideDrawerItemName)
                }
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <PaymentIcon /> : <ExitToAppIcon />}
                </ListItemIcon>
                <ListItemText primary={sideDrawerItemName} />
              </ListItem>
              <Divider />
            </Fragment>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default SideDrawerForLargeScreen;
