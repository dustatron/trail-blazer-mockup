import React from 'react';
import { Link } from 'react-router-dom';
const SimpleLinks = () => {
  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <h1 style={{ fontWeight: 'bolder', margin: '10px', fontSize: '2em' }}>
        Master Links
      </h1>
      <p style={{ fontWeight: 'bolder', margin: '10px', fontSize: '1.5em' }}>
        <Link to='/pre-game'>Pre Game master layout</Link>
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
            4. <Link to='/NewsFeed'>NewsFeed Component</Link>
          </li>
          <li>
            5. <Link to='/UpcomingGames'>UpcomingGames Component</Link>
          </li>
          <li>
            6. <Link to='/ArenaInfo'>ArenaInfo Component</Link>
          </li>
          <li>
            7 .<Link to='/Footer'>Footer Component</Link>
          </li>
        </ol>
      </p>
      <hr />
      {/* /////////// Old Components ////////// */}
      <h2 style={{ fontWeight: 'bolder', margin: '10px', fontSize: '2em' }}>
        Early Components
      </h2>
      <p>
        <Link to='/key-players-stats'>Key Players stats</Link>
      </p>
      <p>
        <Link to='/news-feed'>News Feed</Link>
      </p>
      <p>
        <Link to='/game-score'>Pre-Game / Game Score</Link>
      </p>
    </div>
  );
};

export default SimpleLinks;
