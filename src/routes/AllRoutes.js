import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import PayoutRequest from "../view/emandateOnline/components/PayoutRequest/PayoutRequest";

import RouteWrapper from "../hoc/RouteWrapper";
import config from "../config";

//Layouts components
import MainLayout from "../layout/MainLayout";
import OnlineEmandateFinalStep from "../view/emandateOnline/components/PayoutRequest/OnlineEmandateFinalStep";
import OnlineEmandateView from "../view/emandateOnline/OnlineEmandateView";
//Testing
import Test from "./Test";
import LoginPageView from "../../src/view/loginPage/loginPageView";
import EmandateView from "../view/Emandate/EmandateView";

export default function AllRoutes() {
  return (
    <Fragment>
      <Switch>
        <Route
          exact
          path="/login"
          render={(props) => {
            return <LoginPageView />;
          }}
        />
        <RouteWrapper
          exact
          path="/"
          layout={MainLayout}
          component={EmandateView}
        />

        <RouteWrapper
          exact
          path="/emandate"
          layout={MainLayout}
          component={OnlineEmandateView}
        />

        <RouteWrapper
          exact
          path="/emandate/:currentView"
          layout={MainLayout}
          component={PayoutRequest}
        />
        <RouteWrapper
          exact
          path="/emandate/payoutRequest/:id/:requestType"
          layout={MainLayout}
          component={PayoutRequest}
        />
      </Switch>
    </Fragment>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     countValue: state.count,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(actions.incrementCount()),
//     decrement: () => dispatch(actions.decrementCount()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(AllRoutes);
