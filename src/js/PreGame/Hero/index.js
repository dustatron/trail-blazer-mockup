import React from 'react';
import './index.scss';
import Hero from './Hero';

const index = () => {
  return (
    <Hero
      imageSrc='https://codetheweb.blog/assets/img/posts/full-image-hero/image.jpg'
      color='#555555'
      gradientDirection='to bottom right'
      height='441px'
      opacity='0.8'
      childrenStyles={{ color: '#f7f7f7' }}
      parallax
      textPosition='center'>
      <h1>Blazers</h1>
      <h3>vs</h3>
      <h1>Pelicans</h1>
      <h4>Moda Center - Friday, Feb 21</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Lorem ipsum dolor sit amet. consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
      <button id='PrimaryButton'>Primary</button>
      <button id='SecondaryButton'>Secondary</button>
    </Hero>
  );
};

export default index;
