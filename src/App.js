import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './components/layout/Layout';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />

       <Layout/>
      </Fragment>
    );
  }
}

export default App;
