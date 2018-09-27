import React, { Component } from 'react';
import Layout from './Layout/Layout';
import DisplayArea from './DisplayArea/DisplayArea';

class App extends Component {
  render() {
    return (
      <Layout>
        <DisplayArea/>
      </Layout>
    );
  }
}

export default App;
