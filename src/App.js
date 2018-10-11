import React from "react";
import { withRouter } from "react-router-dom";
import './App.css';
import MainLayout from './containers/_layout/mainLayout'

class App extends React.Component {
  render() {
    return (
      <div>
        <MainLayout />
      </div>
    );
  }
}

export default withRouter(App);