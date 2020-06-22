import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Test from './Test';
import SimpleLinks from './SimpleLinks';
import KeyPlayersStats from './zzGraveYard/keyPlayStats/KeyPlayersStats';
import NewsFeedControl from './zzGraveYard/newsFeed/NewsFeedControl';
import PreGame from './PreGame';
function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path='/test' component={Test} />
          <Route path='/key-players-stats' component={KeyPlayersStats} />
          <Route path='/news-feed' component={NewsFeedControl} />
          <Route path='/pre-game' component={PreGame} />
          <Route exact path='/'>
            <SimpleLinks />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
