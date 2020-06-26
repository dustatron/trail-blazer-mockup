import React from 'react';
import './index.scss';
import Hero from './Hero';
import '../../../scss/components/_hero.scss';



const index = () => {
  return (
    <Hero
      imageSrc='https://www.denverpost.com/wp-content/uploads/2019/04/NUGGETS-TRAILBLAZERS-AAO-_3AO4075x1.jpg'
      color='#555555'
      gradientDirection='to bottom right'
      height='441px'
      opacity='0.2'
      childrenStyles={{ color: '#f7f7f7' }}
      parallax
      textPosition='left'>
      <h1 className="teams">Blazers</h1>
      <h3>vs</h3>
      <h1 className="teams">Pelicans</h1>
      <h4>Moda Center - Friday, Feb 21</h4>
      <p className="gameDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim adas minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Lorem ipsum dolor sit amet.
      </p>
      <button className='primaryButton'>Primary</button>
      <button className='secondaryButton'>Secondary</button>
    </Hero>
  );
};

export default index;
