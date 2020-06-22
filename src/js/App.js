import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Test from './Test';
function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path='/test' component={Test} />
          <Route exact path='/'>
            <h1>Hello from App</h1>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
