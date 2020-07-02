import React from 'react';
import '../../../scss/components/_live-hero.scss';
import LiveHeroPlaceholderLarge from '../../../media/live-hero-placeholder-large.png';
import LiveCTA from '../LiveCTA';
///// Hero \\\\\\
const Index = () => {
  return (
    <div className='live-hero'>
      <LiveCTA />
      <div className='live-hero-top-bar'>
        <div className='live-hero-top-bar-at'>
          <span className='live-hero-top-bar-at-live'>Live </span> @ Moda Center
        </div>
        <div className='live-hero-top-bar-spacer'>|</div>
        <div className='live-hero-top-bar-time'>Fri April 28, 2020</div>
      </div>
      <div className='live-hero-img'>
        <img src={LiveHeroPlaceholderLarge} alt='placeholder for video' />
      </div>
    </div>
  );
};

export default Index;
