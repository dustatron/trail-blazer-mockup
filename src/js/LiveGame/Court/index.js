import React, { Fragment } from 'react';
import CourtImg from '../../../media/court.png';

import '../../../scss/components/_court.scss';

////// Court \\\\\\\
const Index = () => {
  return (
    <div className='court'>
      <div className='court-title court-title-home'>blazers</div>
      <div className='court-layout'>
        <div className='court-layout-img'></div>
      </div>
      <div className='court-title court-title-visitor'>Pelicans</div>
    </div>
  );
};

export default Index;
