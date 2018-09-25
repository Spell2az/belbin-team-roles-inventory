import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from 'react-router-dom';

import Home from './components/pages/home/Home';
import Quiz from './components/pages/quiz/Quiz';
import Results from './components/pages/results/Results';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/results" component={Results} />
      </Fragment>
    );
  }
}

export default App;
