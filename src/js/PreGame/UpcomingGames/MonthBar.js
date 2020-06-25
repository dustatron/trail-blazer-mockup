import React from 'react';
import PropTypes from 'prop-types';
import '../../../scss/components/_upcoming-games.scss';

const MonthBar = ({ month }) => {
  return (
    <div className='month-bar'>
      <div className='month-bar-line'></div>
      <div className='month-bar-month'>{month}</div>
      <div className='month-bar-line'></div>
    </div>
  );
};

MonthBar.propTypes = {
  month: PropTypes.string.isRequired,
};

export default MonthBar;
