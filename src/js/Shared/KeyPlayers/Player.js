import React from 'react';
import PropTypes from 'prop-types';
// Styling.
import '../../../scss/components/_key-players.scss';

const Player = ({ thisPlayer }) => {
  const { pid, ln, fn, val, title, key } = thisPlayer;

  const checkIsPercent = (value, key) => {
    // Checks key for a final letter of p.
    // Which should indicate that the number is a percentage.
    if (key[key.length - 1] === 'p' && key.length > 2) {
      // Return percentage value.
      return value * 100 + '%';
    }
    //Else return value as is.
    return value;
  };
  return (
    <div className='player'>
      <div className='player-top'>
        <div className='player-top-points'>{title.toUpperCase()} PER GAME</div>
        <a href={`https://www.nba.com/blazers/stats${'?sort=' + key}`}>
          <div className='player-top-view-all'>VIEW ALL</div>
        </a>
      </div>
      <div className='player-bottom'>
        <div className='player-bottom-score'>
          <div className='player-bottom-score-number'>
            {checkIsPercent(val, key)}
          </div>
          <div className='player-bottom-score-info'>
            <span className='player-bottom-score-info-name'>
              {fn} {ln}
            </span>
            <span className='player-bottom-score-info-season'>
              2019-20 Regular Season
            </span>
          </div>
        </div>
        <div className='player-bottom-img'>
          <img
            src={`https://ak-static.cms.nba.com/wp-content/uploads/silos/nba/latest/440x700/${pid}.png`}
            alt='Full body Player'
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
