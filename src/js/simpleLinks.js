import React from 'react';
import { Link } from 'react-router-dom';
const SimpleLinks = () => {
  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <h1 style={{ fontWeight: 'bolder', margin: '10px', fontSize: '2em' }}>
        Pre Game Views
      </h1>
      <p style={{ fontWeight: 'bolder', margin: '10px', fontSize: '1.5em' }}>
        <Link to='/pre-game'>Pre Game all together</Link>
      </p>
      <p>
        <ol>
          <li>
            1. <Link to='/hero'>Hero Component</Link>
          </li>
          <li>
            2. <Link to='/CTA'>CTA Component</Link>
          </li>
          <li>
            3. <Link to='/KeyPlayers'>KeyPlayers Component</Link>
          </li>
          <li>
            6. <Link to='/ArenaInfo'>ArenaInfo Component</Link>
          </li>
        </ol>
      </p>
      <hr />
      <h1 style={{ fontWeight: 'bolder', margin: '10px', fontSize: '2em' }}>
        Live Game Views
      </h1>
      <p style={{ fontWeight: 'bolder', margin: '10px', fontSize: '1.5em' }}>
        <Link to='/live-game'>Live Game all together</Link>
      </p>
      <p>
        <ol>
          <li>
            1. <Link to='/hero-live'>Hero Component</Link>
          </li>
          <li>
            2. <Link to='/cta-live'>CTA Component</Link>
          </li>
          <li>
            3. <Link to='/court-live'>Court</Link>
          </li>
          <li>
            4. <Link to='/live-stats'>Live Stats</Link>
          </li>
        </ol>
      </p>
      <hr />
      <p>
        <h2 style={{ fontWeight: 'bolder', margin: '10px', fontSize: '1.5em' }}>
          {' '}
          Shared components{' '}
        </h2>
        <ol>
          <li>
            5. <Link to='/KeyPlayers'>KeyPlayers Component</Link>
          </li>
          <li>
            6. <Link to='/UpcomingGames'>UpcomingGames Component</Link>
          </li>
        </ol>
      </p>
    </div>
  );
};

export default SimpleLinks;
