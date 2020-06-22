import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Test from './Test';
import SimpleLinks from './simpleLinks';
import KeyPlayersStats from './keyPlayStats/KeyPlayersStats';
import Ad from './gameScore/ad';
import LiveGame from './gameScore/LiveGame';
import Nav from './gameScore/Nav';
import PostGame from './gameScore/PostGame';
import PreGame from './gameScore/PreGame';



function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path='/test' component={Test} />
          <Route path='/key-players-stats' component={KeyPlayersStats} />
          <Route path='/news-feed' component={NewsFeedControl} />
          <Route path='/ad' component={Ad} />
          <Route path='/LiveGame' component={LiveGame} />
          <Route path='/Nav' component={Nav} />
          <Route path='/PostGame' component={PostGame} />
          <Route path='/PreGame' component={PreGame} />

          <Route exact path='/'>
            <SimpleLinks />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;