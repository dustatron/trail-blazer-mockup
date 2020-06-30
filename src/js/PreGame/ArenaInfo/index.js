import React, { Fragment } from 'react';
import HeaderBarTemplate from '../../Shared/HeaderBarTemplate';
import '../../../scss/components/_arena-info.scss';
///////  ARENA INFO INDEX //////
const Index = () => {
  return (
    <Fragment>
      <HeaderBarTemplate title={'Arena Info'} />
      <div className='arena'>
        <div className='arena-logo'>Logo Title</div>
        <div className='arena-img'>Image</div>
        <div className='arena-map'>Map</div>
        <div className='arena-blurb'>Blurb</div>
      </div>
    </Fragment>
  );
};

export default Index;
