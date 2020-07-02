import React from 'react';
import '../../../scss/components/_live-cta.scss';

const index = () => {
  return (
    <div className='live-cta'>
      {/* ///// Home \\\\\\ */}
      <div className='live-cta-team'>
        <div className='live-cta-team-img'>
          <img
            src={`https://nba.com/blazers/sites/blazers/files/blazers.png`}
            alt='Team Logo'
          />
        </div>
        <div className='live-cta-team-name'>Blazers</div>
      </div>
      <div className='live-cta-score'>
        <div className='live-cta-score-copy'>LIVE SCORE</div>
        <div className='live-cta-score-the-score'>33 - 27</div>
        <div className='live-cta-score-copy'>Q2</div>
      </div>
      {/* /////// Visting Team \\\\\\ */}
      <div className='live-cta-team'>
        <div className='live-cta-team-img'>
          <img
            src={`https://nba.com/blazers/sites/blazers/files/pelicans.png`}
            alt='Team Logo'
          />
        </div>
        <div className='live-cta-team-name'>Pelicans</div>
      </div>
    </div>
  );
};

export default index;
