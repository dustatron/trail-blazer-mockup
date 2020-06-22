import React from 'react';
import { Link } from 'react-router-dom';
import '../../../scss/zzGraveyard/Nav.scss';

function Nav() {
  return (
    <div className='container'>
      <div className='row navbar'>
        <div className='col'>
          <Link to='/game-score/'>Pre-Game View</Link>
        </div>
        <div className='col'>
          <Link to='/game-score/livegame'>Live Game View</Link>
        </div>
        <div className='col'>
          <Link to='/game-score/postgame'>Post Game View</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
