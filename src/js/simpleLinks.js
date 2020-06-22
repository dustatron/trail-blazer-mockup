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
        <Link to='/key-players-stats'>Key Players stats</Link>
      </p>
      <p>
        <Link to='/news-feed'>News Feed</Link>
      </p>
    </div>
  );
};

export default simpleLinks;
