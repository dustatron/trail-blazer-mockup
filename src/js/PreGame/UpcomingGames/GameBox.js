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
        <p>{visitorTeam.tn}</p>
        <p>Date of game</p>
        <p>Moda Center @ 7:00</p>
      </div>
      <div className='game-box-buttons'></div>
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
