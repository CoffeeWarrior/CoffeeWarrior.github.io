import React, { Component } from 'react';
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Home/>
        </Layout>
      </div>
    );
  }
}

export default App;
