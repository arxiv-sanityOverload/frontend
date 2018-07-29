import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import NotFoundPage from "./containers/pages/not_found";
import Home from "./containers/home/home";
import Test from "./containers/test/test";
import NavigationBar from './containers/header/index'
import './App.css';
import Category from './containers/category/category'
import Community from './containers/community/community'
import Contact from './containers/contact/contact'
import Donate from './containers/donate/donate'
import Recent from './containers/recent/recent'

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Switch>
          <Route exact path="/"  render={routeProps => {
              return <Test {...routeProps} />;
          }} />
          <Route exact path="/home" render={routeProps => {
            return <Home {...routeProps} />;
          }} />
          <Route exact path="/category" render={routeProps => {
            return <Category {...routeProps} />;
          }} />
          <Route exact path="/community" render={routeProps => {
            return <Community {...routeProps} />;
          }} />
          <Route exact path="/contact" render={routeProps => {
            return <Contact {...routeProps} />;
          }} />
          <Route exact path="/Donate" render={routeProps => {
            return <Donate {...routeProps} />;
          }} />
          <Route exact path="/recent" render={routeProps => {
            return <Recent {...routeProps} />;
          }} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);