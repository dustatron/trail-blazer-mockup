import React from 'react';
import PropTypes from 'prop-types';
import '../../../scss/components/_wvl-charts.scss';

const WVLChart = ({ stat }) => {
  const statArray = stat.split('-');
  const percent =
    (parseInt(statArray[0]) /
      (parseInt(statArray[0]) + parseInt(statArray[1]))) *
    100;
  return (
    <div className='wvl-chart'>
      <div className='wvl-chart-left' style={{ width: `${percent}%` }}>
        {statArray[0]}
      </div>
      <div className='wvl-chart-right'>{statArray[1]}</div>
    </div>
  );
};

WVLChart.propTypes = {
  stat: PropTypes.string.isRequired,
};

export default WVLChart;
