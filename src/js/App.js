import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Test from './Test';
import KeyPlayersStats from './keyPlayStats/KeyPlayersStats';
function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path='/test' component={Test} />
          <Route path='/key-players-stats' component={KeyPlayersStats} />
          <Route exact path='/'>
            <h1>Hello from App</h1>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
