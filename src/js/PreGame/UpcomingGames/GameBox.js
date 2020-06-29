import React from 'react';
import PropTypes from 'prop-types';

const GameBox = ({ game }) => {
  const {
    gameId,
    gameCode,
    wholeDate,
    dayNumber,
    day,
    time,
    month,
    price,
    sold,
    nameShort,
    nameLong,
    value,
    hot,
    giveaway,
    link,
    dateIsTBD,
  } = game;
  return (
    <div className='game-box'>
      {hot > 0 && <div className='game-box-hot'></div>}
      {value > 0 && <div className='game-box-value'> </div>}
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

// GameBox.propTypes = {
//   game: PropTypes.PropTypes.shape({
//     gameId: PropTypes.string,
//     gameCode: PropTypes.string,
//     date: PropTypes.string,
//     dayNumber: PropTypes.array,
//     hour: PropTypes.array,
//     visitorTeam: PropTypes.shape({
//       tid: PropTypes.number,
//       re: PropTypes.string,
//       ta: PropTypes.string,
//       tn: PropTypes.string,
//       tc: PropTypes.string,
//       s: PropTypes.string,
//     }),
//   }),
// };

export default GameBox;
