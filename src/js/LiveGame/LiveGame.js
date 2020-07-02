import React from 'react';

// Components
import LiveCTA from './LiveCTA';
import Hero from './LiveHero';
import Court from './Court';
import LiveStats from './LiveStats';
import KeyPlayers from '../Shared/KeyPlayers/';
import UpcomingGames from '../Shared/UpcomingGames';
import Footer from '../Shared/Footer';

import '../../scss/components/_live-game-index.scss';

const LiveGame = () => {
  return (
    <div className='live-game'>
      <div className='live-game-container'>
        <Hero />
        <Court />
        <LiveStats />
        <KeyPlayers links={false} />
        <UpcomingGames />
        <div style={{ height: '3em' }}></div>
      </div>
      <Footer />
    </div>
  );
};

export default LiveGame;
