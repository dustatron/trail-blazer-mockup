import React from 'react';
import PropTypes from 'prop-types';
// Styling.
import '../../../scss/components/_key-players.scss';

const Player = ({ player }) => {
  return <div className='player'>{player.lastName}</div>;
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
};

export default Player;
