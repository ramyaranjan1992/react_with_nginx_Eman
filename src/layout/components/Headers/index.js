import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

//Sabpaisa Logo
import SabpaisaLogo from "../../../assets/images/sabpaisa-logo.png";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#fff",
  },
  appBarRightText: {
    color: "black",
  },

  toolBar: {
    display: "flex",
    direction: "row",
    justifyContent: "space-between",
  },
  menuButton: {
    marginRight: theme.spacing(-1),
    [theme.breakpoints.up("960")]: {
      display: "none",
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  const onClickMenuButtonForSwipableDrawer = () => {
    console.log("inside menu click ");
  };
  return (
    <Fragment>
      <AppBar position="fixed" className={classes.appBar} elevation={1}>
        <Toolbar className={classes.toolBar}>
          <div>
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              onClick={onClickMenuButtonForSwipableDrawer}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <img alt="Sabpaisa Logo" src={SabpaisaLogo} height="" width="120" />
          </div>
          <Typography variant="h6" className={classes.appBarRightText} noWrap>
            Subscription Pay
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}
