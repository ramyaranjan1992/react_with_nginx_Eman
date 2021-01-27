import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Hidden from "@material-ui/core/Hidden";

//Layout Elements
import Header from "./components/Headers/index.js";
// import Footer from "./components/Footers/index.js";
import { Toolbar } from "@material-ui/core";
import SideDrawerForLargeScreen from "./components/SideDrawers/SideDrawerForLargeScreen.js";

const useStyles = makeStyles((theme) => ({
  layout_wrapper: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  breackPointBelow960: {
    [theme.breakpoints.down("960")]: {
      display: "none",
    },
  },
  breakPointAbove960: {
    [theme.breakpoints.up("960")]: {
      display: "none",
    },
  },
}));

const MainLayout = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.layout_wrapper}>
      {/* Header->App Bar */}
      <Header />

      {/* Side Drawer-> */}
      <div className={classes.breakPointAbove960}></div>

      <div className={classes.breackPointBelow960}>
        <SideDrawerForLargeScreen />
      </div>

      {/* Main content for dynamic wrapping */}
      <main className={classes.content}>
        <Toolbar />
        {props.children}
      </main>
    </div>
  );
};

export default MainLayout;
