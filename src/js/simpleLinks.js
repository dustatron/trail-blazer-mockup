import React from 'react';
import { Link } from 'react-router-dom';
const simpleLinks = () => {
  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <h1>Master Links</h1>
      <p>
        <Link to='/pre-game'>Pre Game master layout</Link>
      </p>
      <p>
        <ol>
          <li>
            <Link to='/hero'>Hero Component</Link>
          </li>
          <li>
            <Link to='/CTA'>CTA Component</Link>
          </li>
          <li>
            <Link to='/KeyPlayers'>KeyPlayers Component</Link>
          </li>
          <li>
            <Link to='/NewsFeed'>NewsFeed Component</Link>
          </li>
          <li>
            <Link to='/UpcomingGames'>UpcomingGames Component</Link>
          </li>
          <li>
            <Link to='/ArenaInfo'>ArenaInfo Component</Link>
          </li>
          <li>
            <Link to='/Footer'>Footer Component</Link>
          </li>
        </ol>
      </p>
      <hr />
      {/* /////////// Old Components ////////// */}
      <h2>Early Components</h2>
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

export default simpleLinks;
