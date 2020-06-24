import React from 'react';
import PropTypes from 'prop-types';
import pageheaderbar from '../../media/pageheaderbar.png';
import '../../scss/components/_header-bar-template.scss';

const HeaderBarTemplate = ({ title }) => {
  return (
    <div className='header-bar-template'>
      <div className='header-bar-template-title'>
        <h1>{title}</h1>
      </div>
      <img className='header-bar-template-bar' src={pageheaderbar} alt='' />
    </div>
  );
};

HeaderBarTemplate.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderBarTemplate;
