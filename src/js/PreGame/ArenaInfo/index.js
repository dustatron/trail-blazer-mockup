import React, { Fragment } from 'react';
import HeaderBarTemplate from '../../Shared/HeaderBarTemplate';
import rosegardenModaCenter from '../../../media/rosegarden-moda-center.png';
import modaCenterExt from '../../../media/moda-center-ext.png';

// API
import { ApiGoogleMapLink } from '../../Config/API_config';

import '../../../scss/components/_arena-info.scss';
///////  ARENA INFO INDEX //////
const Index = () => {
  return (
    <Fragment>
      <HeaderBarTemplate title={'Arena Info'} />
      <div className='arena'>
        <div className='arena-logo'>
          <img src={rosegardenModaCenter} alt='Rose Garden Moda Center' />
        </div>
        <div className='arena-img'>
          <img src={modaCenterExt} alt='Moda Center Exterior' />
        </div>
        <div className='arena-map'>
          <iframe
            title='map'
            src={ApiGoogleMapLink()}
            width='600'
            height='450'
            frameborder='0'
            allowfullscreen=''
            aria-hidden='false'
            tabindex='0'
            className='arena-map-iframe'></iframe>
        </div>
        {/* ///// This Section will probably want an API \\\\ */}
        {/* ///// Currently this is just a placeholder    \\\\ */}
        <div className='arena-blurb'>
          <div className='arena-blurb-headline'>
            HOOD'S REHAB CONTINUES ON SCHEDULE DESPITE CORONAVIRUS
          </div>
          <div className='arena-blurb-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </div>
          <a href='/'>
            <button className='arena-blurb-button'>Learn More </button>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
