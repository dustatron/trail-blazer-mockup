import React from 'react';
import PropTypes from 'prop-types';

const GameBox = ({ game }) => {
  const {
    gameId,
    gameCode,
    date,
    dayNumber,
    hour,
    city,
    state,
    arena,
    homeTeam,
    visitorTeam,
  } = game;
  return (
    <div className='game-box'>
      <div className='game-box-img'>
        <img
          src={`https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_80x64/${visitorTeam.ta.toLowerCase()}.gif`}
          alt='Team Logo'
        />
      </div>
      <div className='game-box-details'>
        <div className='game-box-details-left'>
          <div className='game-box-details-left-name'>
            {visitorTeam.tc} {visitorTeam.tn}
          </div>
          <div className='game-box-details-left-date'>fri, feb 21</div>
          <div className='game-box-details-left-when-n-where'>
            Moda Center @ 7:00 pm
          </div>
        </div>
        <div className='game-box-details-right'>
          <div className='game-box-details-right-top'>As low as</div>
          <div className='game-box-details-right-bottom'>
            <div className='game-box-details-right-bottom-bling'>$</div>
            <div className='game-box-details-right-bottom-copy'>35</div>
          </div>
        </div>
      </div>

      <div className='game-box-bottom'>
        <div className='game-box-bottom-copy'>view tickets</div>
        <div className='game-box-bottom-arrow'> </div>
      </div>
    </div>
  );
};

GameBox.propTypes = {
  game: PropTypes.PropTypes.shape({
    gameId: PropTypes.string,
    gameCode: PropTypes.string,
    date: PropTypes.string,
    dayNumber: PropTypes.string,
    hour: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    arena: PropTypes.string,
    homeTeam: PropTypes.shape({
      tid: PropTypes.string,
      re: PropTypes.string,
      ta: PropTypes.string,
      tn: PropTypes.string,
      tc: PropTypes.string,
      s: PropTypes.string,
    }),
    visitorTeam: PropTypes.shape({
      tid: PropTypes.string,
      re: PropTypes.string,
      ta: PropTypes.string,
      tn: PropTypes.string,
      tc: PropTypes.string,
      s: PropTypes.string,
    }),
  }),
};

export default GameBox;
