import React from 'react';
import PropTypes from 'prop-types';

const GameBox = ({ game }) => {
  const {
    dayNumber,
    day,
    time,
    month,
    price,
    nameShort,
    nameLong,
    value,
    hot,
    link,
  } = game;
  return (
    <div className='game-box'>
      {hot > 0 && (
        <div className='game-box-corner game-box-corner-hot'>
          <div className='game-box-corner-icon'>
            <i class='fas fa-burn'></i>
          </div>
        </div>
      )}
      {value > 0 && (
        <div className='game-box-corner game-box-corner-value'>
          <div className='game-box-corner-icon'>
            <i class='fas fa-dollar-sign'></i>
          </div>
        </div>
      )}
      <div className='game-box-img'>
        <img
          src={`https://nba.com/blazers/sites/blazers/files/${nameShort.toLowerCase()}.png`}
          alt='Team Logo'
        />
      </div>
      <div className='game-box-details'>
        <div className='game-box-details-left'>
          <div className='game-box-details-left-name'>{nameLong}</div>
          <div className='game-box-details-left-date'>
            {day.slice(0, 3)}, {month} {dayNumber}
          </div>
          <div className='game-box-details-left-when-n-where'>
            Moda Center @ {time}
          </div>
        </div>
        <div className='game-box-details-right'>
          <div className='game-box-details-right-top'>As low as</div>
          <div className='game-box-details-right-bottom'>
            <div className='game-box-details-right-bottom-bling'>$</div>
            <div className='game-box-details-right-bottom-copy'>
              {Math.min.apply(Math, price)}
            </div>
          </div>
        </div>
      </div>
      <div className='game-box-bottom'>
        <a href={link}>
          <div className='game-box-bottom-copy'>view tickets</div>
        </a>
        <div className='game-box-bottom-arrow'> </div>
      </div>
    </div>
  );
};

GameBox.propTypes = {
  gameId: PropTypes.string,
  gameCode: PropTypes.string,
  wholeDate: PropTypes.string,
  dayNumber: PropTypes.string,
  day: PropTypes.string,
  time: PropTypes.number,
  month: PropTypes.string,
  price: PropTypes.array.isRequired,
  sold: PropTypes.bool,
  nameShort: PropTypes.string,
  nameLong: PropTypes.string,
  value: PropTypes.number.isRequired,
  hot: PropTypes.number.isRequired,
  giveaway: PropTypes.number,
  link: PropTypes.string.isRequired,
  dateIsTBD: PropTypes.bool,
};

export default GameBox;
