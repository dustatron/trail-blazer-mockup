import React from 'react';
import PropTypes from 'prop-types';
import pageheaderbar from '../../media/pageheaderbar.png';
import '../../scss/components/_header-bar-template.scss';

const HeaderBarTemplate = ({ title, showLinks }) => {
  return (
    <div className='header-bar-template'>
      <div className='header-bar-template-top'>
        <div className='header-bar-template-title'>
          <h1>{title}</h1>
        </div>
        {showLinks && (
          <ul className='header-bar-template-links'>
            <li>
              <a href='#'>Team Stats</a>
            </li>
            <li>
              <a href='#'>Leaders</a>
            </li>
            <li>
              <a href='#'>Player Stats</a>
            </li>
          </ul>
        )}
      </div>
      <img className='header-bar-template-bar' src={pageheaderbar} alt='' />
    </div>
  );
};

HeaderBarTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  showLinks: PropTypes.bool,
};

export default HeaderBarTemplate;
