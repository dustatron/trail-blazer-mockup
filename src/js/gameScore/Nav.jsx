import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Nav.css';

function Nav() {
  return (
    <div className="container">
      <div className="row navbar">
        <div className="col">
          <Link to="/">Pre-Game View</Link>
        </div>
        <div className="col">
          <Link to="/livegame">Live Game View</Link>
        </div>
        <div className="col">
          <Link to="/postgame">Post Game View</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
