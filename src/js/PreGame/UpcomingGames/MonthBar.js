import React from 'react';
import PropTypes from 'prop-types';

const MonthBar = ({ month }) => {
  return (
    <div>
      {month}
      <hr />
    </div>
  );
};

MonthBar.propTypes = {
  month: PropTypes.string.isRequired,
};

export default MonthBar;
