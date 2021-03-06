import React from 'react';
import Hero from './Hero';
import CTA from './CTA';
import KeyPlayers from '../Shared/KeyPlayers';
import NewsFeed from './NewsFeed';
import UpcomingGames from '../Shared/UpcomingGames';
import ArenaInfo from './ArenaInfo';
import Footer from '../Shared/Footer';

import '../../scss/components/_pre-game-index.scss';

///////  PRE GAME INDEX //////
const index = () => {
  return (
    <div className='pre-game'>
      <div className='pre-game-container'>
        <Hero />
        <CTA />
        <KeyPlayers links={true} />
        <NewsFeed />
        <UpcomingGames />
        <ArenaInfo />
      </div>
      <Footer />
    </div>
  );
};

export default index;
