import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Test from './Test';

import Hero from './PreGame/Hero';
import CTA from './PreGame/CTA';
import KeyPlayers from './PreGame/KeyPlayers';
import NewsFeed from './PreGame/NewsFeed';
import UpcomingGames from './PreGame/UpcomingGames';
import ArenaInfo from './PreGame/ArenaInfo';
import Footer from './PreGame/Footer';

import SimpleLinks from './SimpleLinks';
import KeyPlayersStats from './zzGraveYard/keyPlayStats/KeyPlayersStats';
import NewsFeedControl from './zzGraveYard/newsFeed/NewsFeedControl';

import PreGame from './PreGame';
import GameScore from './zzGraveYard/gameScore';
function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path='/test' component={Test} />

          <Route path='/pre-game' component={PreGame} />
          <Route path='/hero' component={Hero} />
          <Route path='/CTA' component={CTA} />
          <Route path='/KeyPlayers' component={KeyPlayers} />
          <Route path='/NewsFeed' component={NewsFeed} />
          <Route path='/UpcomingGames' component={UpcomingGames} />
          <Route path='/ArenaInfo' component={ArenaInfo} />
          <Route path='/Footer' component={Footer} />

          {/* ////////// Old Components ///////// */}
          <Route path='/key-players-stats' component={KeyPlayersStats} />
          <Route path='/game-score' component={GameScore} />
          <Route path='/news-feed' component={NewsFeedControl} />

          <Route exact path='/'>
            <SimpleLinks />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
