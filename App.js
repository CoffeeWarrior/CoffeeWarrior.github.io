import React, { Component } from 'react';
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Bio from "./containers/Bio/Bio";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import News from "./containers/News/News";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Bio" component={Bio}/>
            <Route path="/News" component={News}/>
            <Redirect to={"/"}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
