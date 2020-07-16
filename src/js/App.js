import React, { Fragment } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Test from './Test';

// import Hero from './PreGame/Hero';
// import CTA from './PreGame/CTA';
// import KeyPlayers from './Shared/KeyPlayers';
// import NewsFeed from './PreGame/NewsFeed';
// import UpcomingGames from './Shared/UpcomingGames';
// import ArenaInfo from './PreGame/ArenaInfo';
// import Court from './LiveGame/Court';
// import CTALive from './LiveGame/LiveCTA';
// import HeroLive from './LiveGame/LiveHero';
// import LiveStats from './LiveGame/LiveStats';

// import SimpleLinks from './simpleLinks';

// import PreGame from './PreGame/PreGame.js';
import LiveGame from './LiveGame/LiveGame.js';

import '../scss/components/_app.scss';

//Styles

function App() {
  return (
    <Fragment>
      <LiveGame />
      {/* 
      <Router>
        <Switch>
          <Route exact path='/'>
            <SimpleLinks />
          </Route>
          <Route path='/test' component={Test} />
          <Route path='/pre-game' component={PreGame} />
          <Route path='/live-game' component={LiveGame} />
          <div className='container'>
            
            <Route path='/hero' component={Hero} />
            <Route path='/CTA' component={CTA} />
            <Route path='/NewsFeed' component={NewsFeed} />
            <Route path='/ArenaInfo' component={ArenaInfo} />

 
            <Route path='/hero-live' component={HeroLive} />
            <Route path='/cta-live' component={CTALive} />
            <Route path='/court-live' component={Court} />
            <Route path='/live-stats' component={LiveStats} />

       
            <Route path='/KeyPlayers' component={KeyPlayers} />
            <Route path='/UpcomingGames' component={UpcomingGames} />
          </div>
        </Switch>
      </Router>
      */}
    </Fragment>
  );
}

export default App;
