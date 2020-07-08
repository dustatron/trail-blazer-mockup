import React from 'react';
import PropTypes from 'prop-types';
// Styling.
import '../../../scss/components/_key-players.scss';

const Player = ({ player }) => {
  const { id, lastName, firstName, pointsPerGame } = player;
  return (
    <div className='player'>
      <div className='player-top'>
        <div className='player-top-points'>POINTS PER GAME</div>
        <a href='/'>
          <div className='player-top-view-all'>VIEW ALL</div>
        </a>
      </div>
      <div className='player-bottom'>
        <div className='player-bottom-score'>
          <div className='player-bottom-score-number'>{pointsPerGame}</div>
          <div className='player-bottom-score-info'>
            <span className='player-bottom-score-info-name'>
              {firstName} {lastName}
            </span>
            <span className='player-bottom-score-info-season'>
              2019-20 Regular Season
            </span>
          </div>
        </div>
        <div className='player-bottom-img'>
          <img
            src={`https://ak-static.cms.nba.com/wp-content/uploads/silos/nba/latest/440x700/${id}.png`}
            alt='Player'
          />
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
};

export default Player;
