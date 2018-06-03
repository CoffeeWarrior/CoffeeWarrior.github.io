import React, { Component } from 'react';
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Redirect to="/"/> 
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
