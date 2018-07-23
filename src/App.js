import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import NotFoundPage from "./containers/pages/not_found";
import Home from "./containers/home/home";
import Test from "./containers/test/test";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => {
              return <Test {...routeProps} />;
            }}
          />
          <Route exact path="/home" render={routeProps => {
            return <Home {...routeProps} />;
          }} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);