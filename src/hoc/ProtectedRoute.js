// This is a Protected route that only wraps and return a Route component if a condition is satisfied i.e current user is present.
import React from "react";
import { Route } from "react-browser-router";
import { Redirect } from "react-router-dom";
import prod from "../config";

const ProtectedRouteWrapper = ({
  isSessionPresent,
  isCurrentUserPresentInState,
  component: Component,
  layout: Layout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // alert("yoy");
        // console.log("this is the pros in new layout vala --->", { ...rest });
        // return;
        if (isSessionPresent && isCurrentUserPresentInState)
          return (
            <Layout {...rest}>
              <Component {...rest} />{" "}
            </Layout>
          );
        return window.location.replace(prod.noUserReturnUrl);
      }}
    />
  );
};

export default ProtectedRouteWrapper;
