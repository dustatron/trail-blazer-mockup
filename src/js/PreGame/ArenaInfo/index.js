import React, { Fragment } from 'react';
import HeaderBarTemplate from '../../Shared/HeaderBarTemplate';
import rosegardenModaCenter from '../../../media/rosegarden-moda-center.png';
import modaCenterExt from '../../../media/moda-center-ext.png';

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
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.9322531260436!2d-122.66903634831682!3d45.53156883686318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a752d90af2bd%3A0xac4da428b0c0c9a7!2sModa%20Center!5e0!3m2!1sen!2sus!4v1593541057339!5m2!1sen!2sus'
            width='600'
            height='450'
            frameborder='0'
            allowfullscreen=''
            aria-hidden='false'
            tabindex='0'
            className='arena-map-iframe'></iframe>
        </div>
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
          <button className='arena-blurb-button'>Learn More </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
