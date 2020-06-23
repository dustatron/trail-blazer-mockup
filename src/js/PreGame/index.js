import React from 'react';
import Hero from './Hero';
import CTA from './CTA';
import KeyPlayers from './KeyPlayers';
import NewsFeed from './NewsFeed';
import UpcomingGames from './UpcomingGames';
import ArenaInfo from './ArenaInfo';
import Footer from './Footer';

///////  PRE GAME INDEX //////
const index = () => {
  return (
    <div>
      <Hero />
      <CTA />
      <KeyPlayers />
      <NewsFeed />
      <UpcomingGames />
      <ArenaInfo />
      <Footer />
    </div>
  );
};

export default index;