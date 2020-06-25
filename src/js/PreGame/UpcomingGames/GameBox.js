import React from 'react';
import PropTypes from 'prop-types';

const GameBox = ({ game }) => {
  return (
    <div>
      {game.gdte}
      {game.ac}
    </div>
  );
};

GameBox.propTypes = {
  game: PropTypes.object.isRequired,
};

export default GameBox;
